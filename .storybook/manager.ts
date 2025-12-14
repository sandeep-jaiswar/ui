import { addons } from "storybook/manager-api"
import { create } from "storybook/theming/create"

// Theme notes:
// - Manager UI cannot directly reuse Tailwind classes from preview.
// - We keep a minimal palette aligned with the library's Button defaults.

addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "@sandeep-jaiswar/ui",
    brandUrl: "https://github.com/sandeep-jaiswar/ui",
    brandTarget: "_blank",

    // Palette aligned with Tailwind's common defaults used in components.
    colorPrimary: "#2563eb", // blue-600
    colorSecondary: "#111827", // gray-900

    // App chrome
    appBg: "#ffffff",
    appContentBg: "#ffffff",
    appPreviewBg: "#ffffff",
    appBorderColor: "#e5e7eb", // gray-200
    appBorderRadius: 8,

    // Typography (leave fonts to Storybook defaults; avoid hard-coding families)
    textColor: "#111827",
    textInverseColor: "#ffffff",

    // Toolbar
    barTextColor: "#374151", // gray-700
    barSelectedColor: "#2563eb",
    barHoverColor: "#111827",

    // Forms
    inputBg: "#ffffff",
    inputBorder: "#d1d5db", // gray-300
    inputTextColor: "#111827",
    inputBorderRadius: 8,
  }),

  // Appearance / layout defaults
  showNav: true,
  showPanel: true,
  panelPosition: "bottom",
  showToolbar: true,
  enableShortcuts: true,
})
