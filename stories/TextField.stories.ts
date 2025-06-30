import type { Meta, StoryObj } from "@storybook/react"
import { TextField } from "../src/TextField"

// Mock function for onChange handlers
const fn = () => {}

const meta = {
  title: "Components/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "iOS-inspired text field component with support for different variants, states, and validation.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["light", "dark"],
      control: { type: "radio" },
      description: "TextField variant",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disable the text field",
    },
    error: {
      control: { type: "boolean" },
      description: "Show error state",
    },
    label: {
      control: { type: "text" },
      description: "Field label",
    },
    placeholder: {
      control: { type: "text" },
      description: "Placeholder text",
    },
    helperText: {
      control: { type: "text" },
      description: "Helper or error text",
    },
  },
  args: {
    onChange: fn,
  },
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
    variant: "light",
  },
}

export const WithText: Story = {
  args: {
    value: "Hello, world!",
    placeholder: "Enter text...",
    variant: "light",
  },
}

export const Dark: Story = {
  args: {
    placeholder: "Enter text...",
    variant: "dark",
  },
}

export const DarkWithText: Story = {
  args: {
    value: "Hello, world!",
    placeholder: "Enter text...",
    variant: "dark",
  },
}

export const Disabled: Story = {
  args: {
    placeholder: "Enter text...",
    disabled: true,
    variant: "light",
  },
}

export const Error: Story = {
  args: {
    placeholder: "Enter text...",
    error: true,
    helperText: "This is an error message.",
    variant: "light",
  },
}

export const WithLabel: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
    variant: "light",
  },
}

export const WithLabelAndHelper: Story = {
  args: {
    label: "Email Address",
    placeholder: "Enter your email",
    helperText: "We will never share your email with anyone.",
    variant: "light",
  },
}

export const Required: Story = {
  args: {
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    required: true,
    variant: "light",
  },
}
