import React from "react"
import { useCore } from "../../core"
import { useChart } from "./ChartContainer"

interface DataPoint {
  label: string
  value: number
}

interface LineChartProps {
  data: DataPoint[]
  color?: string
  showDots?: boolean
  strokeWidth?: number
}

/**
 * LineChart component for trend data.
 * Renders a line and optional dots for data points.
 *
 * @example
 * <LineChart data={[{ label: "Jan", value: 100 }]} color="red" />
 */
export const LineChart = ({ data, color, showDots = true, strokeWidth = 2 }: LineChartProps) => {
  const { width, height, margin } = useChart()
  const { theme } = useCore()

  const chartWidth = width - margin.left - margin.right
  const chartHeight = height - margin.top - margin.bottom

  if (data.length === 0) return null

  const maxValue = Math.max(1, Math.max(...data.map((d) => d.value)))
  const stepX = data.length > 1 ? chartWidth / (data.length - 1) : 0

  const points = data
    .map((d, i) => {
      const x = i * stepX
      const y = chartHeight - (d.value / maxValue) * chartHeight
      return `${x},${y}`
    })
    .join(" ")

  const lineColor = color || theme?.primaryColor || "#3b82f6"

  return (
    <svg width={width} height={height} className="overflow-visible">
      <g transform={`translate(${margin.left},${margin.top})`}>
        {/* Axis Lines */}
        <line
          x1={0}
          y1={chartHeight}
          x2={chartWidth}
          y2={chartHeight}
          stroke="currentColor"
          className="text-gray-300"
        />
        <line x1={0} y1={0} x2={0} y2={chartHeight} stroke="currentColor" className="text-gray-300" />

        {/* Line Path */}
        <polyline
          fill="none"
          stroke={lineColor}
          strokeWidth={strokeWidth}
          points={points}
          className="animate-draw-line" // Need keyframes for drawing effect
        />

        {/* Dots */}
        {showDots &&
          data.map((d, i) => {
            const x = i * stepX
            const y = chartHeight - (d.value / maxValue) * chartHeight
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r={4}
                fill="white"
                stroke={lineColor}
                strokeWidth={2}
                className="cursor-pointer transition-transform hover:scale-150"
              >
                <title>{`${d.label}: ${d.value}`}</title>
              </circle>
            )
          })}
        {/* X Axis Labels */}
        {data.map((d, i) => {
          const x = i * stepX
          return (
            <text key={i} x={x} y={chartHeight + 20} textAnchor="middle" className="fill-gray-500 text-xs">
              {d.label}
            </text>
          )
        })}
      </g>
    </svg>
  )
}
