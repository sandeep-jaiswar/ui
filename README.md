# @sandeep-jaiswar/ui

A modern, lightweight, and tree-shakable React component library powered by **Tailwind CSS**, **TypeScript**, and **tsup** — optimized for performance and DX.

## ✨ Features

- 🧩 Reusable UI components
- 🎨 Tailwind CSS styling with theme support
- ⚡ Zero-config build with `tsup`
- 📦 ESM + CJS output
- 🪶 Minimal footprint
- 🧪 Built-in TypeScript typings

## 📦 Installation

```bash
# Using Bun
bun add @sandeep-jaiswar/ui

# Using npm
npm install @sandeep-jaiswar/ui

# Using yarn
yarn add @sandeep-jaiswar/ui
````

## 🧑‍💻 Usage

```tsx
// Example: App.tsx

import { Button } from '@sandeep-jaiswar/ui';

export default function App() {
  return <Button variant="primary">Click me</Button>;
}
```

> ✅ Tree-shakable: Only import what you use.

---

## 🎨 Theming (Optional)

You can integrate with [`@sandeep-jaiswar/tailwind-preset`](https://github.com/sandeep-jaiswar/tailwind-preset) for a consistent design system:

```ts
// tailwind.config.ts
import preset from '@sandeep-jaiswar/tailwind-preset';

export default {
  presets: [preset],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
};
```

---

## 📁 File Structure

```
src/
├── components/
│   ├── Button.tsx
│   └── ...
├── index.ts            // Barrel file
```

All components are individually exported and fully typed.

---

## 🛠 Development

```bash
# Start dev server (e.g., for Storybook or local testing)
bun dev

# Build for production
bun run build
```

---

## 🚀 Publishing

```bash
bunx changeset version
bun run build
git commit -am "chore: release"
git push --follow-tags
```

---

## 📘 License

MIT License — [Sandeep Jaiswar](https://github.com/sandeep-jaiswar)
