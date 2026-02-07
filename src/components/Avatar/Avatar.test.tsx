// @vitest-environment jsdom
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Avatar } from "./Avatar";
import { CoreProvider } from "../../core";

describe("Avatar", () => {
    it("renders image when src provided", () => {
        render(
            <CoreProvider>
                <Avatar src="https://via.placeholder.com/150" alt="User" />
            </CoreProvider>
        );
        const img = screen.getByRole("img");
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute("src", "https://via.placeholder.com/150");
    });

    it("renders fallback when image fails", () => {
        render(
            <CoreProvider>
                <Avatar src="invalid-url.jpg" alt="User" fallback="US" />
            </CoreProvider>
        );

        const img = screen.getByRole("img");
        fireEvent.error(img); // Simulate error

        expect(screen.getByText("US")).toBeInTheDocument();
        expect(screen.queryByRole("img")).not.toBeInTheDocument();
    });

    it("renders fallback if no src", () => {
        render(
            <CoreProvider>
                <Avatar fallback="AB" />
            </CoreProvider>
        );
        expect(screen.getByText("AB")).toBeInTheDocument();
    });

    it("generates fallback from alt text if not provided", () => {
        render(
            <CoreProvider>
                <Avatar alt="John Doe" />
            </CoreProvider>
        );
        // Should take first 2 chars upper case -> JO
        expect(screen.getByText("JO")).toBeInTheDocument();
    });

    it("renders default fallback if no alt or fallback", () => {
        render(
            <CoreProvider>
                <Avatar />
            </CoreProvider>
        );
        expect(screen.getByText("??")).toBeInTheDocument();
    });

    it("supports different sizes", () => {
        const { container } = render(
            <CoreProvider>
                <Avatar size="lg" fallback="LG" />
            </CoreProvider>
        );
        // implementation: sizeClasses.lg -> h-14 w-14
        const root = container.firstChild;
        expect(root).toHaveClass("h-14 w-14");
    });
});
