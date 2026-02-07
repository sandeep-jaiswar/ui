// @vitest-environment jsdom
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MotionPrimitive } from "./MotionPrimitive";
import { CoreProvider } from "../core";

describe("MotionPrimitive", () => {
    it("renders children", () => {
        render(
            <CoreProvider>
                <MotionPrimitive>
                    <div data-testid="child">Content</div>
                </MotionPrimitive>
            </CoreProvider>
        );
        expect(screen.getByTestId("child")).toBeInTheDocument();
    });

    it("applies class names", () => {
        render(
            <CoreProvider>
                <MotionPrimitive className="test-class">
                    <div>Content</div>
                </MotionPrimitive>
            </CoreProvider>
        );
        // Find the container div
        const container = screen.getByText("Content").parentElement;
        expect(container).toHaveClass("test-class");
    });
});
