import * as a11yAddonAnnotations from "@storybook/addon-a11y/preview"
import { setProjectAnnotations } from "@storybook/react-vite"
import * as projectAnnotations from "./preview"

// This is an important step to apply the right configuration when testing your stories.
// More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
setProjectAnnotations([a11yAddonAnnotations, projectAnnotations])

// Provide a lightweight mock for the external base-ui Button used by our
// Button component so Storybook-based tests can run without the package
// installed.
import { vi } from "vitest"
import React from "react"

vi.mock("@base-ui/react/button", () => ({
  Button: React.forwardRef((props: any, ref: any) => React.createElement("button", { ref, ...props }, props.children)),
}))

vi.mock("@base-ui/react/input", () => ({
  Input: React.forwardRef((props: any, ref: any) => React.createElement("input", { ref, ...props })),
}))
