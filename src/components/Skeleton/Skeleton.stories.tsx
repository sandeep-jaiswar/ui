import type { Meta, StoryObj } from "@storybook/react"
import { Skeleton } from "./Skeleton"

const meta = {
  title: "Components/Feedback/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    className: "w-[100px] h-[20px] rounded-full",
  },
  render: (args) => (
    <div className="flex items-center space-x-4">
      <Skeleton {...args} className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton {...args} className="h-4 w-[250px]" />
        <Skeleton {...args} className="h-4 w-[200px]" />
      </div>
    </div>
  ),
}
