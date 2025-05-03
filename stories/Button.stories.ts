import type { Meta, StoryObj } from "@storybook/react";

import Button, { ButtonProps } from "../src/Button";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LargeBlack: Story = {
  args: {
    size: "large",
    background: "black",
    children: "Large Black",
  },
};

export const LargeWhite: Story = {
  args: {
    size: "large",
    background: "white",
    children: "Large White",
  },
};

export const LargeRed: Story = {
  args: {
    size: "large",
    background: "red",
    children: "Large Red",
  },
};

export const LargeGrey: Story = {
  args: {
    size: "large",
    background: "grey",
    children: "Large Grey",
  },
};
