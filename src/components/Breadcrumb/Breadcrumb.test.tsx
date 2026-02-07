// @vitest-environment jsdom
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "./Breadcrumb";

describe("Breadcrumb", () => {
    it("renders items and default separators", () => {
        render(
            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
            </Breadcrumb>
        );

        expect(screen.getByRole("navigation")).toBeInTheDocument();
        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("Components")).toBeInTheDocument();
        expect(screen.getByText("Breadcrumb")).toBeInTheDocument();

        // Check for separators (default is /)
        const separators = screen.getAllByText("/");
        expect(separators.length).toBe(2);
    });

    it("renders custom separator prop", () => {
        render(
            <Breadcrumb separator=">">
                <BreadcrumbItem>
                    <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbPage>Current</BreadcrumbPage>
                </BreadcrumbItem>
            </Breadcrumb>
        );
        expect(screen.getByText(">")).toBeInTheDocument();
    });

    it("renders BreadcrumbSeparator component explicit usage", () => {
        // Implementation might just render children array, but let's see if manual utilization works.
        // The Breadcrumb component auto-injects, but user might want to manually compose?
        // Current implementation auto-injects if children are just items. 
        // If we mix items and separators manually, auto-injection might double up?
        // Let's test the component itself isolated.
        render(<BreadcrumbSeparator><span>-</span></BreadcrumbSeparator>);
        expect(screen.getByText("-")).toBeInTheDocument();
    });
});
