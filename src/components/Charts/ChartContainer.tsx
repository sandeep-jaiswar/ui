import React, { createContext, useContext, useEffect, useRef, useState, ReactNode } from "react"
import { cn } from "../../utils/cn"

interface ChartConfig {
  width: number
  height: number
  margin: { top: number; right: number; bottom: number; left: number }
}

const ChartContext = createContext<ChartConfig | undefined>(undefined)

export const useChart = () => {
  const context = useContext(ChartContext)
  if (!context) {
    throw new Error("useChart must be used within a ChartContainer")
  }
  return context
}

interface ChartContainerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  children: ReactNode | ((props: ChartConfig) => ReactNode)
  margin?: Partial<ChartConfig["margin"]>
}

/**
 * ChartContainer component that handles responsiveness.
 * Uses ResizeObserver to provide width and height to child charts.
 *
 * @example
 * <ChartContainer height={300}>
 *   <BarChart data={data} />
 * </ChartContainer>
 */
export const ChartContainer = ({
  children,
  className,
  margin = { top: 20, right: 20, bottom: 30, left: 40 },
  ...props
}: ChartContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (!containerRef.current) return

    const observer = new ResizeObserver((entries) => {
      if (!entries[0]) return
      const { width, height } = entries[0].contentRect
      setDimensions({ width, height })
    })

    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  const config: ChartConfig = {
    width: dimensions.width,
    height: dimensions.height,
    margin: { top: 20, right: 20, bottom: 30, left: 40, ...margin }, // Merge defaults
  }

  return (
    <div ref={containerRef} className={cn("relative h-full min-h-[300px] w-full", className)} {...props}>
      {dimensions.width > 0 && (
        <ChartContext.Provider value={config}>
          {typeof children === "function" ? children(config) : children}
        </ChartContext.Provider>
      )}
    </div>
  )
}
