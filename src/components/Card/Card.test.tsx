// @vitest-environment jsdom
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./Card";
import { CoreProvider } from "../../core";

describe("Card", () => {
    it("renders all parts", () => {
        render(
            <CoreProvider>
                <Card>
                    <CardHeader>
                        <CardTitle>Title</CardTitle>
                        <CardDescription>Description</CardDescription>
                    </CardHeader>
                    <CardContent>Content</CardContent>
                    <CardFooter>Footer</CardFooter>
                </Card>
            </CoreProvider>
        );
        expect(screen.getByText("Title")).toBeInTheDocument();
        expect(screen.getByText("Description")).toBeInTheDocument();
        expect(screen.getByText("Content")).toBeInTheDocument();
        expect(screen.getByText("Footer")).toBeInTheDocument();
    });

    it("applies variant and hover effect props", () => {
        render(
            <CoreProvider>
                <Card variant="glass" hoverEffect="glow" data-testid="card">
                    Content
                </Card>
            </CoreProvider>
        );
        const card = screen.getByTestId("card");
        expect(card).toHaveAttribute("data-variant", "glass");
        expect(card).toHaveAttribute("data-hover-effect", "glow");
    })
});
