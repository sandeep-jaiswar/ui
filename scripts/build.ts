import { readdirSync, statSync, rmSync, mkdirSync, renameSync } from "fs";
import { join, basename, resolve } from "path";
import { performance } from "perf_hooks";
import { spawnSync } from "child_process";

const srcDir = resolve("src");
const distDir = resolve("dist");

// Clean dist
if (statSync(distDir, { throwIfNoEntry: false })) {
  rmSync(distDir, { recursive: true, force: true });
}
mkdirSync(distDir, { recursive: true });

function getFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = join(dir, entry.name);
    return entry.isDirectory()
      ? getFiles(fullPath)
      : /\.(ts|tsx|js|jsx)$/.test(entry.name)
        ? [fullPath]
        : [];
  });
}

const files = getFiles(srcDir);
console.log(`📁 Found ${files.length} source file(s) to build.`);

const start = performance.now();

await Promise.all(
  files.map(async (file) => {
    const outFile = join(distDir, basename(file).replace(/\.(tsx|ts)$/, ".js"));
    const result = await Bun.build({
      entrypoints: [file],
      outdir: distDir,
      target: "bun",
      external: ["react", "react-dom"]
    });

    if (result.success) {
      const output = result.outputs[0];
      const sizeKB = (await output.arrayBuffer()).byteLength / 1024;
      console.log(
        `✅ Built ${basename(file)} → ${basename(outFile)} (${sizeKB.toFixed(2)} KB)`
      );
    } else {
      console.error(`❌ Failed to build ${file}`);
    }
  })
);

console.log(`🏁 JS build completed in ${(performance.now() - start).toFixed(1)} ms`);

console.log("🧾 Generating type declarations...");

const tsc = spawnSync("tsc", ["-p", "tsconfig.build.json"], {
  stdio: "inherit"
});

if (tsc.status !== 0) {
  console.error("❌ Failed to generate .d.ts files");
  process.exit(tsc.status ?? 1);
}

// Flatten .d.ts output (move files to dist root)
const flattenDts = (dir: string) => {
  readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      flattenDts(fullPath);
    } else if (entry.name.endsWith(".d.ts")) {
      const dest = join(distDir, basename(fullPath));
      renameSync(fullPath, dest);
    }
  });
};
flattenDts(distDir);

// Optional: remove subfolders created by tsc
readdirSync(distDir, { withFileTypes: true }).forEach((entry) => {
  const fullPath = join(distDir, entry.name);
  if (entry.isDirectory()) {
    rmSync(fullPath, { recursive: true, force: true });
  }
});

console.log("✅ Type declarations flattened");
