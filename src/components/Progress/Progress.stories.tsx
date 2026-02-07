import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./Progress";

const meta = {
    title: "Components/Feedback/Progress",
    component: Progress,
    tags: ["autodocs"],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: 60,
        className: "w-[60%]"
    },
    render: (args) => (
        <Progress {...args} />
    )
};
