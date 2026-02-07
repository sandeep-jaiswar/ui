import type { Meta, StoryObj } from "@storybook/react";
import { Radio, RadioGroup } from "./Radio";

const meta = {
    title: "Components/Forms/RadioGroup",
    component: RadioGroup,
    subcomponents: { Radio } as any, // Storybook weirdness with generic subcomponents
    tags: ["autodocs"],
    argTypes: {
        intent: {
            control: { type: "select" },
            options: ["primary", "secondary", "success", "danger", "warning"],
        }
    }
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => (
        <RadioGroup {...args} defaultValue="option-one">
            <Radio value="option-one" label="Option One" />
            <Radio value="option-two" label="Option Two" />
            <Radio value="option-three" label="Option Three" />
        </RadioGroup>
    )
};

export const Intents: Story = {
    render: () => (
        <div className="flex gap-8">
            <RadioGroup defaultValue="1" intent="success">
                <Radio value="1" label="Success Option 1" />
                <Radio value="2" label="Success Option 2" />
            </RadioGroup>
            <RadioGroup defaultValue="1" intent="danger">
                <Radio value="1" label="Danger Option 1" />
                <Radio value="2" label="Danger Option 2" />
            </RadioGroup>
        </div>
    )
}
