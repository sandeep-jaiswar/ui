import fs from "node:fs"
import path from "node:path"
import js from "@eslint/js"
import markdown from "@eslint/markdown"
import { defineConfig } from "eslint/config"
import importPlugin from "eslint-plugin-import"
import react from "eslint-plugin-react"
import globals from "globals"
import tseslint from "typescript-eslint"

const eslintIgnore = [
  ".git/",
  ".next/",
  "node_modules/",
  ".storybook/",
  "dist/",
  "build/",
  "coverage/",
  "*.min.js",
  "*.config.js",
  "*.d.ts",
]

function getDirectoriesToSort() {
  const ignored = [".git", ".next", ".vscode", "node_modules"]
  return fs
    .readdirSync(process.cwd())
    .filter((f) => fs.statSync(path.join(process.cwd(), f)).isDirectory())
    .filter((f) => !ignored.includes(f))
}

export default defineConfig([
  // --------------------------------------------------
  // Ignore patterns
  // --------------------------------------------------
  {
    ignores: eslintIgnore,
  },

  // --------------------------------------------------
  // Core ESLint recommended
  // --------------------------------------------------
  js.configs.recommended,

  // --------------------------------------------------
  // React (flat config)
  // --------------------------------------------------
  {
    ...react.configs.flat.recommended,
    files: ["**/*.{jsx,tsx}"],
  },

  // --------------------------------------------------
  // TypeScript (flat config)
  // --------------------------------------------------
  ...tseslint.configs.recommended,

  // --------------------------------------------------
  // Import plugin (flat)
  // --------------------------------------------------
  importPlugin.flatConfigs.recommended,

  // --------------------------------------------------
  // Markdown
  // --------------------------------------------------
  markdown.configs.recommended,

  // --------------------------------------------------
  // Markdown overrides
  // --------------------------------------------------
  {
    files: ["**/*.md"],
    rules: {
      "no-irregular-whitespace": "off",
    },
  },

  // --------------------------------------------------
  // Common JS / TS / React rules
  // --------------------------------------------------
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      react: { version: "detect" },
      "import/resolver": {
        node: true,
        typescript: true,
      },
    },
    rules: {
      // This library externalizes Base UI entrypoints in tsup and ships local
      // type declarations in `src/types/base-ui.d.ts`. The actual runtime
      // package is expected to be provided by the consumer.
      "import/no-unresolved": [
        "error",
        {
          ignore: ["^@base-ui/react/(button|input|accordion)$"],
        },
      ],

      "import/order": [
        "warn",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          pathGroups: [
            ...getDirectoriesToSort().map((dir) => ({
              pattern: `${dir}/**`,
              group: "internal",
            })),
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],

      // React modern defaults
      "react/react-in-jsx-scope": "off",

      // Library-friendly rules
      "no-console": "warn",
      "no-debugger": "error",
    },
  },

  // --------------------------------------------------
  // Node scripts
  // --------------------------------------------------
  {
    files: ["scripts/**/*.{js,mjs,cjs,ts,mts,cts}"],
    rules: {
      "no-console": "off",
    },
  },
])
