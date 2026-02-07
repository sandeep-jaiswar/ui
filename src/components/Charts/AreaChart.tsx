import React from "react"
import { useCore } from "../../core"
import { useChart } from "./ChartContainer"

interface DataPoint {
  label: string
  value: number
}

interface AreaChartProps {
  data: DataPoint[]
  color?: string
  showDots?: boolean
  strokeWidth?: number
}

/**
 * AreaChart component for trend data with filled area.
 * Uses a gradient fill under the line.
 *
 * @example
 * <AreaChart data={[{ label: "Jan", value: 100 }]} />
 */
export const AreaChart = ({ data, color, showDots = true, strokeWidth = 2 }: AreaChartProps) => {
  const { width, height, margin } = useChart()
  const { theme } = useCore()

  const chartWidth = width - margin.left - margin.right
  const chartHeight = height - margin.top - margin.bottom

  if (data.length === 0) return null

  const maxValue = Math.max(...data.map((d) => d.value))
  const stepX = data.length > 1 ? chartWidth / (data.length - 1) : 0

  const points = data
    .map((d, i) => {
      const x = i * stepX
      const y = chartHeight - (d.value / maxValue) * chartHeight
      return `${x},${y}`
    })
    .join(" ")

  // Close the path for area fill
  const areaPoints = `${points} ${chartWidth},${chartHeight} 0,${chartHeight}`

  const areaColor = color || theme?.primaryColor || "#3b82f6"

  return (
    <svg width={width} height={height} className="overflow-visible">
      <defs>
        <linearGradient id={`gradient-${areaColor}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor={areaColor} stopOpacity={0.3} />
          <stop offset="95%" stopColor={areaColor} stopOpacity={0} />
        </linearGradient>
      </defs>
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

        {/* Area Fill */}
        <polyline fill={`url(#gradient-${areaColor})`} points={areaPoints} />

        {/* Line Path */}
        <polyline fill="none" stroke={areaColor} strokeWidth={strokeWidth} points={points} />

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
                stroke={areaColor}
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
