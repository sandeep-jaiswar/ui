import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

import js from "@eslint/js"

import tseslint from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"
import { defineConfig } from "eslint/config"
import importPlugin from "eslint-plugin-import"
import markdown from "eslint-plugin-markdown"
import react from "eslint-plugin-react"
import globals from "globals"

const dirname = path.dirname(fileURLToPath(import.meta.url))

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
  react.configs.flat.recommended,

  // --------------------------------------------------
  // TypeScript (flat config)
  // --------------------------------------------------
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: dirname,
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
    },
  },

  // --------------------------------------------------
  // Import plugin (flat)
  // --------------------------------------------------
  importPlugin.flatConfigs.recommended,

  // --------------------------------------------------
  // Markdown
  // --------------------------------------------------
  markdown.configs.recommended,

  // --------------------------------------------------
  // Common JS / TS / React rules
  // --------------------------------------------------
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
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
])
