import type { Meta, StoryObj } from "@storybook/react"
import { Input } from "./index"

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    placeholder: "Type here...",
    className: "border rounded px-3 py-2",
  },
}

export const Disabled: Story = {
  args: {
    placeholder: "Disabled",
    disabled: true,
    className: "border rounded px-3 py-2",
  },
}

export const WithValue: Story = {
  args: {
    defaultValue: "Hello",
    className: "border rounded px-3 py-2",
  },
}
