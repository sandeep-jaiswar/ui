import path from "node:path"
import { fileURLToPath } from "node:url"
import { defineConfig } from "vitest/config"

const dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  resolve: {
    alias: {
      // point the external base-ui package import to a local test stub so
      // Vite can resolve it during the unit test build.
      "@base-ui/react/button": path.resolve(dirname, "src/test-stubs/base-ui-button.tsx"),
      "@base-ui/react/input": path.resolve(dirname, "src/test-stubs/base-ui-input.tsx"),
      "@base-ui/react/accordion": path.resolve(dirname, "src/test-stubs/base-ui-accordion.tsx"),
    },
  },
  test: {
    include: ["src/components/**/*.test.tsx"],
    environment: "jsdom",
    setupFiles: ["./vitest.setup.unit.ts"],
  },
})
