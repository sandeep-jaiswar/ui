import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { ColorPicker } from "../src/ColorPicker"

const meta = {
  title: "Advanced/ColorPicker",
  component: ColorPicker,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "iOS-inspired color picker component.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ColorPicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithLabel: Story = {
  args: {
    label: "Theme Color",
    helperText: "Choose your preferred theme color",
  },
}

export const CustomColors: Story = {
  args: {
    colors: ["#FF6B35", "#F7931E", "#FFD23F", "#06FFA5", "#118AB2", "#073B4C"],
    label: "Brand Colors",
  },
}

export const Interactive: Story = {
  render: () => {
    const [selectedColor, setSelectedColor] = React.useState("#007AFF")

    return (
      <div className="space-y-4">
        <ColorPicker
          label="Background Color"
          value={selectedColor}
          onChange={setSelectedColor}
          helperText="Choose a background color"
        />

        <div
          className="h-20 w-full rounded-ios border border-separator-opaque dark:border-separator-opaque-dark"
          style={{ backgroundColor: selectedColor }}
        />

        <p className="text-sm text-label-secondary">Selected color: {selectedColor}</p>
      </div>
    )
  },
}
