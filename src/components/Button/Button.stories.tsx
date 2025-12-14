import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./index"

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: "Primary Button",
    className: "bg-blue-800 text-white px-4 py-2 rounded",
  },
}

export const Secondary: Story = {
  args: {
    children: "Secondary",
    className: "bg-gray-300 text-black px-4 py-2 rounded",
  },
}

export const WithOnClick: Story = {
  args: {
    children: "Click Me",
    onClick: () => alert("clicked"),
  },
}
