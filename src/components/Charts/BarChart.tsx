import React, { useMemo } from "react";
import { useChart } from "./ChartContainer";
import { useCore } from "../../core";
import { cn } from "../../utils/cn";

interface DataPoint {
    label: string;
    value: number;
    color?: string; // Allow override
}

interface BarChartProps {
    data: DataPoint[];
    barColor?: string; // Default color
    animate?: boolean;
}

/**
 * BarChart component for categorical data.
 * Renders vertical bars with animations.
 *
 * @example
 * <BarChart data={[{ label: "A", value: 10 }]} barColor="blue" />
 */
export const BarChart = ({ data, barColor, animate = true }: BarChartProps) => {
    const { width, height, margin } = useChart();
    const { theme } = useCore();

    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    const maxValue = Math.max(...data.map(d => d.value));
    const barWidth = chartWidth / data.length;
    const padding = barWidth * 0.2; // 20% padding
    const activeBarWidth = barWidth - padding;

    // JavaFX-like default palette if no specific color
    const defaultColor = barColor || theme?.primaryColor || "#3b82f6";

    return (
        <svg width={width} height={height} className="overflow-visible">
            <g transform={`translate(${margin.left},${margin.top})`}>
                {/* Axis Lines */}
                <line x1={0} y1={chartHeight} x2={chartWidth} y2={chartHeight} stroke="currentColor" className="text-gray-300" />
                <line x1={0} y1={0} x2={0} y2={chartHeight} stroke="currentColor" className="text-gray-300" />

                {/* Bars */}
                {data.map((d, i) => {
                    const barHeight = (d.value / maxValue) * chartHeight;
                    const x = i * barWidth + (padding / 2);
                    const y = chartHeight - barHeight;

                    return (
                        <g key={i} className="group">
                            {/* Bar with simple enter animation via CSS for now */}
                            <rect
                                x={x}
                                y={y}
                                width={activeBarWidth}
                                height={barHeight}
                                fill={d.color || defaultColor}
                                className={cn(
                                    "transition-all duration-500 hover:opacity-80 cursor-pointer",
                                    animate && "animate-enter-bar" // We need to define this keyframe or use standard CSS transition
                                )}
                                style={{
                                    transformOrigin: "bottom",
                                    // Hacky simple animation for prototype
                                    animation: animate ? `growUp 0.6s ease-out forwards ${i * 0.1}s` : 'none',
                                    opacity: animate ? 0 : 1
                                }}
                            />
                            {/* Tooltip-like label on hover */}
                            <text
                                x={x + activeBarWidth / 2}
                                y={y - 5}
                                textAnchor="middle"
                                className="fill-gray-700 text-xs opacity-0 transition-opacity group-hover:opacity-100 dark:fill-gray-200"
                            >
                                {d.value}
                            </text>
                            {/* X-Axis Label */}
                            <text
                                x={x + activeBarWidth / 2}
                                y={chartHeight + 20}
                                textAnchor="middle"
                                className="fill-gray-500 text-xs"
                            >
                                {d.label}
                            </text>
                        </g>
                    );
                })}
            </g>
            {/* Inline styles for the specific animation to avoid global CSS dependency for now */}
            <style>
                {`
                    @keyframes growUp {
                        from { transform: scaleY(0); opacity: 0; }
                        to { transform: scaleY(1); opacity: 1; }
                    }
                `}
            </style>
        </svg>
    );
};
