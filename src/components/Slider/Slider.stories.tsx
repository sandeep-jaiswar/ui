import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./Slider";

const meta = {
    title: "Components/Forms/Slider",
    component: Slider,
    tags: ["autodocs"],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        defaultValue: [50],
        max: 100,
        step: 1
    }
};

export const Disabled: Story = {
    args: {
        defaultValue: [30],
        disabled: true
    }
}
