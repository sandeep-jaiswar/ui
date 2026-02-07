import React from "react"
import { useCore } from "../../core"
import { useChart } from "./ChartContainer"

interface DataPoint {
  x: number
  y: number
  r: number // Radius value
  label?: string
  color?: string
}

interface BubbleChartProps {
  data: DataPoint[]
  maxBubbleSize?: number
  color?: string
}

export const BubbleChart = ({ data, maxBubbleSize = 30, color }: BubbleChartProps) => {
  const { width, height, margin } = useChart()
  const { theme } = useCore()

  const chartWidth = width - margin.left - margin.right
  const chartHeight = height - margin.top - margin.bottom

  if (data.length === 0) return null

  const maxX = Math.max(1, Math.max(...data.map((d) => d.x)))
  const maxY = Math.max(1, Math.max(...data.map((d) => d.y)))
  const maxR = Math.max(1, Math.max(...data.map((d) => d.r)))

  const defaultColor = color || theme?.primaryColor || "#3b82f6"

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

        {/* Bubbles */}
        {data.map((d, i) => {
          const cx = (d.x / maxX) * chartWidth
          const cy = chartHeight - (d.y / maxY) * chartHeight
          // Normalize radius to logical pixels
          const r = (d.r / maxR) * maxBubbleSize

          return (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={r}
              fill={d.color || defaultColor}
              fillOpacity={0.6}
              stroke={d.color || defaultColor}
              strokeWidth={1}
              className="cursor-pointer transition-transform hover:scale-110"
            >
              <title>{d.label || `(${d.x}, ${d.y}, r:${d.r})`}</title>
            </circle>
          )
        })}
      </g>
    </svg>
  )
}
