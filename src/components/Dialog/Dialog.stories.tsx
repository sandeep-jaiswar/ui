import type { Meta, StoryObj } from "@storybook/react";
import { Dialog, DialogTrigger, DialogContent, DialogOverlay, DialogPortal } from "./Dialog";
import { Button } from "../Button"; // Assuming Button exists

const meta = {
    title: "Components/Dialog",
    component: Dialog,
    // Dialogs are hard to autodoc completely due to portals, but we try
    tags: ["autodocs"],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Dialog Content"
    },
    render: () => (
        <Dialog>
            <DialogTrigger>
                <Button>Open Dialog</Button>
            </DialogTrigger>
            <DialogPortal>
                <DialogOverlay />
                <DialogContent>
                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold">Dialog Title</h2>
                        <p className="text-gray-500">
                            This is a dialog content. You can put anything here.
                        </p>
                        <div className="flex justify-end">
                            {/* In a real app, you'd use a close button or manage state */}
                            <Button intent="secondary">Close (click overlay)</Button>
                        </div>
                    </div>
                </DialogContent>
            </DialogPortal>
        </Dialog>
    ),
};
