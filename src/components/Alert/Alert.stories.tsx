import type { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertTitle, AlertDescription } from "./Alert";

const meta = {
    title: "Components/Feedback/Alert",
    component: Alert,
    tags: ["autodocs"],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Alert>
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
                You can add components to your app using the cli.
            </AlertDescription>
        </Alert>
    )
};

export const Destructive: Story = {
    render: () => (
        <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
                Your session has expired. Please log in again.
            </AlertDescription>
        </Alert>
    )
};

export const Success: Story = {
    render: () => (
        <Alert variant="success">
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>
                Profile updated successfully.
            </AlertDescription>
        </Alert>
    )
};
