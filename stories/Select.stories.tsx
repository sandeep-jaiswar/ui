import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { Select } from "../src/Select"

const mockOptions = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "orange", label: "Orange" },
  { value: "grape", label: "Grape" },
]

const meta = {
  title: "Form Controls/Select",
  component: Select,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "iOS-inspired select component with dropdown functionality.",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    options: mockOptions,
    placeholder: "Choose a fruit",
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithLabel: Story = {
  args: {
    label: "Favorite Fruit",
    helperText: "Select your preferred fruit",
  },
}

export const ErrorState: Story = {
  args: {
    label: "Required Field",
    state: "error",
    errorText: "Please select an option",
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "apple",
  },
}

export const Variants: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <Select options={mockOptions} variant="filled" placeholder="Filled variant" />
      <Select options={mockOptions} variant="outlined" placeholder="Outlined variant" />
      <Select options={mockOptions} variant="plain" placeholder="Plain variant" />
    </div>
  ),
}
