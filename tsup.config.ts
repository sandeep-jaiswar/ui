import { defineConfig } from "tsup"

export default defineConfig(({ watch }) => ({
  entry: ["src/index.ts", "src/*.tsx"],
  outDir: "dist",
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: !!process.env.GENERATE_SOURCEMAP || !!watch || process.env.NODE_ENV !== "production",
  clean: true,
  splitting: true,
  minify: process.env.NODE_ENV === "production",
  target: "es2021",
  treeshake: true,
  esbuildOptions(options) {
    options.define = {
      ...(options.define || {}),
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "production"),
    }
  },
  external: [
    "react",
    "react-dom",
    "react/jsx-runtime",
    "react/jsx-dev-runtime",
    "@base-ui/react/button",
    "@base-ui/react/input",
    "@base-ui/react/accordion",
  ],
}))
