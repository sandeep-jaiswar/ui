import * as fs from "fs";
import * as path from "path";
import * as toml from "toml";
import { build } from "bun";

// Read and parse bunfig.toml
const bunfigPath = path.resolve(process.cwd(), "bunfig.toml");
const bunfigContent = fs.readFileSync(bunfigPath, "utf-8");
const config = toml.parse(bunfigContent);

// Validate required fields
if (!config.entrypoints || !config.outdir) {
  throw new Error("bunfig.toml must include 'entrypoints' and 'outdir'");
}

// Run Bun.build
await build({
  entrypoints: config.entrypoints,
  outdir: config.outdir,
  target: config.target ?? "browser",
  external: config.external ?? [],
  minify: config.minify ?? false,
  splitting: config.splitting ?? false,
  sourcemap: config.sourcemap ?? "none",
  banner: "'use client'",
});
