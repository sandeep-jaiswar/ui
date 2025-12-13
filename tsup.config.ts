import { defineConfig } from "tsup"

export default defineConfig(({ watch }) => ({
  // Keep per-file entry points for tree-shaking and subpath imports
  entry: ["src/index.ts", "src/*.tsx"],
  outDir: "dist",
  // keep ESM and CJS for compatibility; consumers that support ESM will be able to tree-shake
  format: ["esm", "cjs"],
  dts: true,
  // only emit sourcemaps when in watch/dev or NODE_ENV !== production (keeps published files small)
  sourcemap: !!process.env.GENERATE_SOURCEMAP || !!watch || process.env.NODE_ENV !== "production",
  clean: true,
  splitting: true,
  minify: process.env.NODE_ENV === "production",
  target: "es2021",
  treeshake: true,
  esbuildOptions(options) {
    // Define NODE_ENV at build time so that libraries using env checks (React etc.) can be optimized away.
    options.define = {
      ...(options.define || {}),
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "production"),
    }
  },
  // Do not bundle React (peer deps) — this keeps packages minimal and avoids duplicate React copies
  external: ["react", "react-dom"],
}))
