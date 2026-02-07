// @vitest-environment jsdom
import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import { describe, it, expect, vi, afterEach } from "vitest";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "./Tooltip";
import { CoreProvider } from "../../core";

describe("Tooltip", () => {
    afterEach(() => {
        vi.useRealTimers();
    });

    it("shows content on hover after delay", async () => {
        vi.useFakeTimers();
        render(
            <CoreProvider>
                <TooltipProvider>
                    <Tooltip delayDuration={300}>
                        <TooltipTrigger>Hover me</TooltipTrigger>
                        <TooltipContent>Tooltip text</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </CoreProvider>
        );

        expect(screen.queryByText("Tooltip text")).not.toBeInTheDocument();

        fireEvent.mouseEnter(screen.getByText("Hover me"));

        // Fast forward time
        await act(async () => {
            vi.advanceTimersByTime(300);
        });

        expect(screen.getByText("Tooltip text")).toBeInTheDocument();

        fireEvent.mouseLeave(screen.getByText("Hover me"));

        // Advance time for close
        await act(async () => {
            vi.runAllTimers();
        });

        expect(screen.queryByText("Tooltip text")).not.toBeInTheDocument();
    });

    it("opens on focus and closes on blur", async () => {
        render(
            <CoreProvider>
                <TooltipProvider>
                    <Tooltip delayDuration={0}>
                        <TooltipTrigger>Focus me</TooltipTrigger>
                        <TooltipContent>Tooltip text</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </CoreProvider>
        );

        const trigger = screen.getByText("Focus me");
        fireEvent.focus(trigger);
        await waitFor(() => expect(screen.getByText("Tooltip text")).toBeInTheDocument());

        fireEvent.blur(trigger);
        await waitFor(() => expect(screen.queryByText("Tooltip text")).not.toBeInTheDocument());
    });

    it("throws error if used outside context", () => {
        // Suppress console.error for this test as React logs the error
        const spy = vi.spyOn(console, 'error').mockImplementation(() => { });
        expect(() => render(<TooltipTrigger>Fail</TooltipTrigger>)).toThrow("useTooltip must be used within a Tooltip");
        spy.mockRestore();
    });
});
