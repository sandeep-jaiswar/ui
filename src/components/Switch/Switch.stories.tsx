import type { Meta, StoryObj } from "@storybook/react"
import { Switch } from "./Switch"

const meta = {
  title: "Components/Forms/Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    intent: {
      control: { type: "select" },
      options: ["primary", "secondary", "success", "danger", "warning"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: "Airplane mode",
  },
}

export const Intents: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Switch label="Primary" intent="primary" defaultChecked />
      <Switch label="Secondary" intent="secondary" defaultChecked />
      <Switch label="Success" intent="success" defaultChecked />
      <Switch label="Danger" intent="danger" defaultChecked />
      <Switch label="Warning" intent="warning" defaultChecked />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Switch label="Small" size="sm" />
      <Switch label="Medium" size="md" />
      <Switch label="Large" size="lg" />
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    label: "Cannot toggle me",
    disabled: true,
  },
}
