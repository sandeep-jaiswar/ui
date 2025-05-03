import { $ } from "bun";
import { readdirSync, statSync, mkdirSync, existsSync, cpSync } from "fs";
import { join, basename, resolve } from "path";

const srcDir = resolve("src");
const distDir = resolve("dist");

// Clear and recreate dist
if (existsSync(distDir))
  cpSync(distDir, distDir + "_backup", { recursive: true });
Bun.write(distDir + "/.keep", ""); // optional
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

await Promise.all(
  files.map((file) => {
    const outFile = join(distDir, basename(file).replace(/\.(tsx|ts)$/, ".js"));
    return Bun.build({
      entrypoints: [file],
      outdir: distDir,
      target: "bun",
      external: ["react", "react-dom"],
    });
  })
);
