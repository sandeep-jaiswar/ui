import type { StorybookConfig } from "@storybook/react-vite"
import path from "node:path"
import { fileURLToPath } from "node:url"

const dirname = path.dirname(fileURLToPath(import.meta.url))

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(viteConfig) {
    viteConfig.resolve = viteConfig.resolve ?? {}
    viteConfig.resolve.alias = {
      ...(viteConfig.resolve.alias as any),
      "@base-ui/react/button": path.resolve(dirname, "../src/test-stubs/base-ui-button.tsx"),
      "@base-ui/react/input": path.resolve(dirname, "../src/test-stubs/base-ui-input.tsx"),
      "@base-ui/react/accordion": path.resolve(dirname, "../src/test-stubs/base-ui-accordion.tsx"),
    }
    return viteConfig
  },
}
export default config
