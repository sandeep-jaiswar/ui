import type { Meta, StoryObj } from "@storybook/react";
import { BarChart } from "./BarChart";
import { ChartContainer } from "./ChartContainer";

const meta = {
    title: "Components/Charts/BarChart",
    component: BarChart,
    tags: ["autodocs"],
    decorators: [
        (Story) => (
            <div className="h-[400px] w-full p-4 border rounded-lg bg-white dark:bg-gray-900">
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const simpleData = [
    { label: "Jan", value: 400 },
    { label: "Feb", value: 300 },
    { label: "Mar", value: 200 },
    { label: "Apr", value: 278 },
    { label: "May", value: 189 },
];

const colorfulData = [
    { label: "A", value: 10, color: "#ef4444" },
    { label: "B", value: 20, color: "#f97316" },
    { label: "C", value: 30, color: "#eab308" },
    { label: "D", value: 40, color: "#22c55e" },
    { label: "E", value: 50, color: "#3b82f6" },
];

export const Default: Story = {
    args: {
        data: simpleData
    },
    render: (args) => (
        <ChartContainer>
            <BarChart {...args} />
        </ChartContainer>
    )
};

export const Colorful: Story = {
    args: {
        data: colorfulData,
        animate: true
    },
    render: (args) => (
        <ChartContainer>
            <BarChart {...args} />
        </ChartContainer>
    )
};
