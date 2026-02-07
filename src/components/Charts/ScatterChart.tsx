import React from "react"
import { useCore } from "../../core"
import { useChart } from "./ChartContainer"

interface DataPoint {
  x: number
  y: number
  label?: string
  color?: string
  size?: number // Optional size override
}

interface ScatterChartProps {
  data: DataPoint[]
  pointSize?: number
  color?: string
}

export const ScatterChart = ({ data, pointSize = 5, color }: ScatterChartProps) => {
  const { width, height, margin } = useChart()
  const { theme } = useCore()

  const chartWidth = width - margin.left - margin.right
  const chartHeight = height - margin.top - margin.bottom

  if (data.length === 0) return null

  const maxX = Math.max(...data.map((d) => d.x))
  const maxY = Math.max(...data.map((d) => d.y))
  // Ideally min should also be calculated, assuming 0 for now for simple charts

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

        {/* Points */}
        {data.map((d, i) => {
          const cx = (d.x / maxX) * chartWidth
          const cy = chartHeight - (d.y / maxY) * chartHeight

          return (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={d.size || pointSize}
              fill={d.color || defaultColor}
              className="cursor-pointer opacity-80 transition-transform hover:scale-150 hover:opacity-100"
            >
              <title>{d.label || `(${d.x}, ${d.y})`}</title>
            </circle>
          )
        })}
      </g>
    </svg>
  )
}
