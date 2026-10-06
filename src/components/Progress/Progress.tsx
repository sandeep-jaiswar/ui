import React from "react"
import { cn } from "../../utils/cn"
import "./progress.css"

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number
  max?: number
}

/**
 * Progress component for visualizing completion of a task.
 * Supports indeterminate state (omit value). Zero external dependencies.
 *
 * @example
 * <Progress value={60} max={100} />
 *
 * @example
 * <Progress /> {/* indeterminate *\/}
 */
export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value, max = 100, ...props }, ref) => {
    const isIndeterminate = value === undefined || value === null
    const clampedValue = isIndeterminate ? 0 : Math.min(max, Math.max(0, value))
    const percent = isIndeterminate ? 0 : (clampedValue / max) * 100

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={isIndeterminate ? undefined : clampedValue}
        data-indeterminate={isIndeterminate ? "true" : undefined}
        className={cn("progress", className)}
        {...props}
      >
        <div
          className="progress__fill"
          style={isIndeterminate ? undefined : { transform: `translateX(-${100 - percent}%)` }}
        />
      </div>
    )
  }
)
Progress.displayName = "Progress"
