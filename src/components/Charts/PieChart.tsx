import React from "react"
import { useCore } from "../../core"
import { useChart } from "./ChartContainer"

interface DataPoint {
  label: string
  value: number
  color?: string
}

interface PieChartProps {
  data: DataPoint[]
  innerRadius?: number // 0 for Pie, >0 for Donut
}

/**
 * PieChart component for proportional data.
 * Can render as a Donut chart if innerRadius > 0.
 *
 * @example
 * <PieChart data={[{ label: "A", value: 10 }]} innerRadius={50} />
 */
export const PieChart = ({ data, innerRadius = 0 }: PieChartProps) => {
  const { width, height, margin } = useChart()
  const { theme } = useCore()

  const chartWidth = width - margin.left - margin.right
  const chartHeight = height - margin.top - margin.bottom
  const radius = Math.min(chartWidth, chartHeight) / 2
  const centerX = chartWidth / 2
  const centerY = chartHeight / 2

  const total = data.reduce((sum, d) => sum + d.value, 0)
  let startAngle = 0

  // Helper to calculate coordinates
  const getCoordinatesForPercent = (percent: number) => {
    const x = Math.cos(2 * Math.PI * percent)
    const y = Math.sin(2 * Math.PI * percent)
    return [x, y]
  }

  return (
    <svg width={width} height={height} className="overflow-visible">
      <g transform={`translate(${margin.left},${margin.top})`}>
        <g transform={`translate(${centerX},${centerY})`}>
          {data.map((d, i) => {
            const sliceAngle = d.value / total
            const endAngle = startAngle + sliceAngle

            // Calculate path
            const [startX, startY] = getCoordinatesForPercent(startAngle)
            const [endX, endY] = getCoordinatesForPercent(endAngle)

            const largeArcFlag = sliceAngle > 0.5 ? 1 : 0

            const pathData = [
              `M ${startX * innerRadius} ${startY * innerRadius}`,
              `L ${startX * radius} ${startY * radius}`,
              `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX * radius} ${endY * radius}`,
              `L ${endX * innerRadius} ${endY * innerRadius}`,
              `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${startX * innerRadius} ${startY * innerRadius}`,
            ].join(" ")

            // Simple Pie (no inner radius) logic simplification if needed,
            // but generalized Donut logic works for r=0 too if math holds (needs careful 0 handling).
            // For r=0, the inner arc effectively collapses to center.
            // Let's use a simpler path for pure Pie if innerRadius is 0 to avoid artifacts.

            let dPath = ""
            if (innerRadius === 0) {
              dPath = [
                `M 0 0`,
                `L ${startX * radius} ${startY * radius}`,
                `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX * radius} ${endY * radius}`,
                `Z`,
              ].join(" ")
            } else {
              dPath = pathData
            }

            const sliceColor = d.color || theme?.primaryColor || `hsl(${(i * 360) / data.length}, 70%, 50%)`

            const element = (
              <path
                key={i}
                d={dPath}
                fill={sliceColor}
                stroke="white"
                strokeWidth="1"
                className="cursor-pointer transition-opacity hover:opacity-80"
              >
                <title>{`${d.label}: ${d.value} (${Math.round(sliceAngle * 100)}%)`}</title>
              </path>
            )

            startAngle = endAngle
            return element
          })}
        </g>
      </g>
    </svg>
  )
}
