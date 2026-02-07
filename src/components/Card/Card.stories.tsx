import type { Meta, StoryObj } from "@storybook/react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./Card"

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["surface", "ghost", "glass"],
    },
    hoverEffect: {
      control: { type: "select" },
      options: ["none", "lift", "glow"],
    },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Card {...args} className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Main content area for the card.</p>
      </CardContent>
      <CardFooter>
        <button className="text-sm font-medium text-blue-600">Deploy</button>
      </CardFooter>
    </Card>
  ),
  args: {
    variant: "surface",
    hoverEffect: "lift",
  },
}
