import type { Meta, StoryObj } from "@storybook/react"
import { LineChart, PieChart, ScatterChart, BubbleChart, ChartContainer } from "./index"

const meta = {
  title: "Components/Charts/LineAndArea",
  component: ChartContainer, // Wrapper as main component
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="h-[400px] w-full rounded-lg border bg-white p-4 dark:bg-gray-900">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ChartContainer>

export default meta
type Story = StoryObj<typeof meta>

const data = [
  { label: "Jan", value: 400 },
  { label: "Feb", value: 300 },
  { label: "Mar", value: 500 },
  { label: "Apr", value: 280 },
  { label: "May", value: 590 },
]

export const LineVariant: Story = {
  args: {
    children: <LineChart data={data} strokeWidth={3} />,
  },
  render: (args) => <ChartContainer {...args}>{args.children}</ChartContainer>,
}

export const PieVariant: Story = {
  args: {
    children: (
      <PieChart
        data={[
          { label: "A", value: 30, color: "#ef4444" },
          { label: "B", value: 50, color: "#3b82f6" },
          { label: "C", value: 20, color: "#eab308" },
        ]}
      />
    ),
  },
  render: (args) => <ChartContainer {...args}>{args.children}</ChartContainer>,
}

export const DonutVariant: Story = {
  args: {
    children: (
      <PieChart
        innerRadius={60}
        data={[
          { label: "A", value: 30, color: "#ef4444" },
          { label: "B", value: 50, color: "#3b82f6" },
          { label: "C", value: 20, color: "#eab308" },
        ]}
      />
    ),
  },
  render: (args) => <ChartContainer {...args}>{args.children}</ChartContainer>,
}

export const ScatterVariant: Story = {
  args: {
    children: (
      <ScatterChart
        data={[
          { x: 10, y: 20 },
          { x: 30, y: 50 },
          { x: 50, y: 80 },
          { x: 70, y: 30 },
          { x: 90, y: 60 },
        ]}
        color="#f97316"
      />
    ),
  },
  render: (args) => <ChartContainer {...args}>{args.children}</ChartContainer>,
}

export const BubbleVariant: Story = {
  args: {
    children: (
      <BubbleChart
        data={[
          { x: 10, y: 20, r: 10, color: "#ef4444" },
          { x: 30, y: 50, r: 20, color: "#3b82f6" },
          { x: 50, y: 80, r: 30, color: "#22c55e" },
          { x: 70, y: 30, r: 15, color: "#eab308" },
        ]}
      />
    ),
  },
  render: (args) => <ChartContainer {...args}>{args.children}</ChartContainer>,
}
