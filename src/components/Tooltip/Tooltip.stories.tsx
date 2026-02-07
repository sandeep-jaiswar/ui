import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./Tooltip";
import { Button } from "../Button";

const meta = {
    title: "Components/Feedback/Tooltip",
    component: Tooltip,
    tags: ["autodocs"],
    decorators: [
        (Story) => (
            <div className="flex h-[200px] w-full items-center justify-center">
                <TooltipProvider>
                    <Story />
                </TooltipProvider>
            </div>
        )
    ]
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Tooltip>
            <TooltipTrigger>
                <Button variant="outline">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>Add to library</p>
            </TooltipContent>
        </Tooltip>
    )
};
