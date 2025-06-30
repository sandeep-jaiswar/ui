# @sandeep-jaiswar/ui

A modern, iOS-inspired React component library built with TypeScript and Tailwind CSS.

![npm version](https://img.shields.io/npm/v/@sandeep-jaiswar/ui)
![license](https://img.shields.io/npm/l/@sandeep-jaiswar/ui)
![bundle size](https://img.shields.io/bundlephobia/minzip/@sandeep-jaiswar/ui)

## Features

- 🎨 iOS-inspired design system
- 📱 Mobile-first, responsive components
- 🌙 Dark mode support out of the box
- ♿ Accessible components following WAI-ARIA guidelines
- 🔍 TypeScript support with comprehensive type definitions
- 🧩 Modular architecture for tree-shaking
- 🎭 Comprehensive Storybook documentation

## Installation

```bash
# npm
npm install @sandeep-jaiswar/ui

# yarn
yarn add @sandeep-jaiswar/ui

# pnpm
pnpm add @sandeep-jaiswar/ui
```

## Quick Start

```jsx
import React from 'react'
import { Button, Card, Typography } from '@sandeep-jaiswar/ui'
import '@sandeep-jaiswar/ui/styles.css'

function App() {
  return (
    <Card className="p-6 max-w-md mx-auto">
      <Typography variant="headline">Welcome to @sandeep-jaiswar/ui</Typography>
      <Typography variant="body" className="mt-2">
        A beautiful, iOS-inspired component library for React applications.
      </Typography>
      <Button className="mt-4">Get Started</Button>
    </Card>
  )
}
```

## Tailwind CSS Setup

This library is built with Tailwind CSS. To ensure all styles work correctly, add the following to your `tailwind.config.js`:

```js
module.exports = {
  content: [
    // ...
    './node_modules/@sandeep-jaiswar/ui/**/*.{js,ts,jsx,tsx}',
  ],
  // ...
}
```

## Available Components

The library includes a comprehensive set of components:

### Layout Components
- `Card` - Versatile container with various styles
- `List` & `ListItem` - For creating lists with various content
- `Divider` - Horizontal or vertical separators

### Navigation Components
- `NavigationBar` - iOS-style top navigation
- `TabBar` - Bottom navigation with badges
- `Tabs` - Content tabs with different styles
- `Menu` - Context menu with various options
- `Drawer` - Side panel for navigation or content

### Form Components
- `Button` - Various button styles and states
- `Input` - Text input with validation
- `TextArea` - Multi-line text input
- `Checkbox` - Selection control
- `Radio` & `RadioGroup` - Option selection
- `Select` - Dropdown selection
- `Switch` - Toggle control
- `Slider` - Range selection
- `SearchField` - Search input with cancel
- `DatePicker` - Date selection
- `ColorPicker` - Color selection
- `FileUpload` - File upload with drag & drop

### Feedback Components
- `Alert` - Modal alerts and action sheets
- `Modal` - Content overlay
- `Toast` - Temporary notifications
- `ProgressBar` - Progress indicators
- `Spinner` - Loading indicators

### Display Components
- `Typography` - Text styles following iOS guidelines
- `Icon` - System and custom icons
- `Avatar` - User avatars with various states
- `Badge` - Notification badges
- `Image` - Image display with loading states
- `Timeline` - Chronological data display
- `Rating` - Star rating component

## Documentation

For detailed documentation and examples, visit our [Storybook documentation](https://sandeep-jaiswar.github.io/ui).

## Browser Support

The library supports all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the LICENSE file for details.

## Acknowledgments

- Inspired by Apple's Human Interface Guidelines
- Built with React, TypeScript, and Tailwind CSS