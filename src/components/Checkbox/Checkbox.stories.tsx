import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta = {
    title: "Components/Forms/Checkbox",
    component: Checkbox,
    tags: ["autodocs"],
    argTypes: {
        intent: {
            control: { type: "select" },
            options: ["primary", "secondary", "success", "danger", "warning"],
        },
        size: {
            control: { type: "select" },
            options: ["sm", "md", "lg"],
        }
    },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: "Accept terms and conditions",
    },
};

export const Intents: Story = {
    render: () => (
        <div className="flex flex-col gap-2">
            <Checkbox label="Primary" intent="primary" defaultChecked />
            <Checkbox label="Secondary" intent="secondary" defaultChecked />
            <Checkbox label="Success" intent="success" defaultChecked />
            <Checkbox label="Danger" intent="danger" defaultChecked />
            <Checkbox label="Warning" intent="warning" defaultChecked />
        </div>
    )
}

export const Sizes: Story = {
    render: () => (
        <div className="flex flex-col gap-2">
            <Checkbox label="Small" size="sm" />
            <Checkbox label="Medium" size="md" />
            <Checkbox label="Large" size="lg" />
        </div>
    )
}

export const Disabled: Story = {
    args: {
        label: "Cannot click me",
        disabled: true,
    }
}
