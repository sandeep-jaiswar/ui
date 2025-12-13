import eslintPluginNext from "@next/eslint-plugin-next"
import eslintPluginImport from "eslint-plugin-import"
import eslintPluginStorybook from "eslint-plugin-storybook"
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"
import jsxA11y from "eslint-plugin-jsx-a11y"
import fs from "fs"

const eslintIgnore = [
  ".git/",
  ".next/",
  "node_modules/",
  "dist/",
  "build/",
  "coverage/",
  "*.min.js",
  "*.config.js",
  "*.d.ts",
]

function getDirectoriesToSort() {
  const ignoredSortingDirectories = [".git", ".next", ".vscode", "node_modules"]
  return fs
    .readdirSync(process.cwd())
    .filter((file) => fs.statSync(process.cwd() + "/" + file).isDirectory())
    .filter((f) => !ignoredSortingDirectories.includes(f))
}

export default [
  {
    ignores: eslintIgnore,
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslintPlugin,
      "@next/next": eslintPluginNext,
      import: eslintPluginImport,
      storybook: eslintPluginStorybook,
      "jsx-a11y": jsxA11y,
    },
    settings: {
      tailwindcss: {
        callees: ["classnames", "clsx", "ctl", "cn", "cva"],
      },
      "import/resolver": {
        typescript: true,
        node: true,
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "sort-imports": [
        "error",
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
        },
      ],
      "import/order": [
        "warn",
        {
          groups: ["external", "builtin", "internal", "sibling", "parent", "index"],
          pathGroups: [
            ...getDirectoriesToSort().map((singleDir) => ({
              pattern: `${singleDir}/**`,
              group: "internal",
            })),
            {
              pattern: "env",
              group: "internal",
            },
            {
              pattern: "theme",
              group: "internal",
            },
            {
              pattern: "public/**",
              group: "internal",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: ["internal"],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      ...eslintPluginNext.configs?.recommended?.rules,
      ...eslintPluginNext.configs?.["core-web-vitals"]?.rules,
    },
  },
]
