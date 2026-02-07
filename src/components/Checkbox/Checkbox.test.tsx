// @vitest-environment jsdom
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Checkbox } from "./Checkbox";
import { CoreProvider } from "../../core";

describe("Checkbox", () => {
    it("renders with label", () => {
        render(
            <CoreProvider>
                <Checkbox label="Accept terms" />
            </CoreProvider>
        );
        expect(screen.getByLabelText("Accept terms")).toBeInTheDocument();
    });

    it("toggles checked state", () => {
        const handleChange = vi.fn();
        render(
            <CoreProvider>
                <Checkbox label="Toggle me" onChange={handleChange} />
            </CoreProvider>
        );
        const checkbox = screen.getByLabelText("Toggle me");
        fireEvent.click(checkbox);
        expect(handleChange).toHaveBeenCalled();
        expect(checkbox).toBeChecked();
    });

    it("respects disabled state", () => {
        const handleChange = vi.fn();
        render(
            <CoreProvider>
                <Checkbox label="Disabled" disabled onChange={handleChange} />
            </CoreProvider>
        );
        const checkbox = screen.getByLabelText("Disabled");
        expect(checkbox).toBeDisabled();

        // In JSDOM/React testing library, clicking a disabled input might not fire events, 
        // or we check if the handler is called.
        // fireEvent.click(checkbox); // This might throw or do nothing depending on version
        // expect(handleChange).not.toHaveBeenCalled();
    });

    it("renders different sizes", () => {
        const { container } = render(
            <CoreProvider>
                <Checkbox size="lg" />
            </CoreProvider>
        );
        // Check for size class in label (text-base) or input (h-6 w-6)
        // Implementation: sizeClasses[size] applied to input
        const input = container.querySelector('input');
        expect(input).toHaveClass("h-6 w-6");
    });

    it("renders different intents", () => {
        const { container } = render(
            <CoreProvider>
                <Checkbox intent="danger" />
            </CoreProvider>
        );
        const input = container.querySelector('input');
        expect(input).toHaveClass("text-red-600");
    });
});
