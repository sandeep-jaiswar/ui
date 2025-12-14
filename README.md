# @sandeep-jaiswar/ui

## Tailwind Usage and Packaging (Tailwind v4)

This component library uses Tailwind CSS for styling during development and Storybook preview. We do not bundle Tailwind utility classes with the package; consumers should install and configure Tailwind in their application build.

Key points for consumers:

1. Install Tailwind CSS (as a dependency of your application):

```bash
npm install tailwindcss postcss autoprefixer -D
npx tailwindcss init
```

2. Because Tailwind v4's default configuration approach may not require a project-level `tailwind.config.js`, you can skip creating one if you rely on the default config. However, if the consumer needs to ensure the classes used in this library are included in the generated CSS, either:

- Add our package path into your `content` glob list (recommended):

```js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./node_modules/@sandeep-jaiswar/ui/**/*.{js,ts,jsx,tsx}"],
}
```

- Or use a bundler configuration that scans node_modules/{package}/\*\* for classes (less common).

3. Import a Tailwind-enabled stylesheet in your application (for example `global.css`) that includes the Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. Use components from `@sandeep-jaiswar/ui` as usual. The library exports JS code and optional component-level CSS (which we include in `dist`). We do not ship compiled Tailwind utilities.

For development and Storybook, we include `src/styles/global.css` which contains Tailwind directives — this file is only used locally for preview. Consumers must include Tailwind in their apps to generate the utility CSS tailored to their project's needs.
