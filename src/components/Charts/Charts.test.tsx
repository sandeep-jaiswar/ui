// @vitest-environment jsdom
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { LineChart } from "./LineChart";
import { AreaChart } from "./AreaChart";
import { PieChart } from "./PieChart";
import { BarChart } from "./BarChart";
import { CoreProvider } from "../../core";

// Mock useChart to provide fixed dimensions
const mockUseChart = vi.fn();

vi.mock("./ChartContainer", () => ({
    useChart: () => mockUseChart(),
    ChartContainer: ({ children }: any) => <div>{children}</div>
}));

describe("Chart Components", () => {
    beforeEach(() => {
        // Default mock implementation
        mockUseChart.mockReturnValue({
            width: 500,
            height: 300,
            margin: { top: 20, right: 20, bottom: 30, left: 40 }
        });
    });

    it("renders BarChart bars", () => {
        const data = [
            { label: "A", value: 10 },
            { label: "B", value: 20 }
        ];
        // Must wrap in CoreProvider if it uses useCore (theme)
        const { container } = render(
            <CoreProvider>
                <BarChart data={data} animate={false} />
            </CoreProvider>
        );

        // Check for rects
        // 2 bars
        const rects = container.querySelectorAll("rect");
        expect(rects.length).toBe(2);

        // labels
        expect(screen.getByText("A")).toBeInTheDocument();
        expect(screen.getByText("B")).toBeInTheDocument();
    });

    it("renders LineChart path and dots", () => {
        const data = [
            { label: "Jan", value: 10 },
            { label: "Feb", value: 20 }
        ];
        const { container } = render(
            <CoreProvider>
                <LineChart data={data} showDots={true} />
            </CoreProvider>
        );

        // Check for circles (dots)
        const dots = container.querySelectorAll("circle");
        expect(dots.length).toBe(2);

        // Check for polyline
        const polyline = container.querySelector("polyline");
        expect(polyline).toBeInTheDocument();
    });

    it("renders AreaChart area and line", () => {
        const data = [
            { label: "1", value: 50 }
        ];
        const { container } = render(
            <CoreProvider>
                <AreaChart data={data} />
            </CoreProvider>
        );
        // Expect 2 polylines (one for fill, one for stroke)
        const polylines = container.querySelectorAll("polyline");
        expect(polylines.length).toBe(2);
    });

    it("renders PieChart slices", () => {
        const data = [
            { label: "A", value: 100 },
            { label: "B", value: 100 }
        ];
        const { container } = render(
            <CoreProvider>
                <PieChart data={data} />
            </CoreProvider>
        );

        // Should have 2 paths
        const paths = container.querySelectorAll("path");
        expect(paths.length).toBe(2);
    });

    it("renders PieChart as Donut", () => {
        const data = [{ label: "A", value: 100 }];
        const { container } = render(
            <CoreProvider>
                <PieChart data={data} innerRadius={50} />
            </CoreProvider>
        );
        const path = container.querySelector("path");
        expect(path).toBeInTheDocument();
        // Just verify it renders without error logic
    });
});
