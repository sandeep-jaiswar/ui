import React from "react"

export interface ProgressBarProps {
  /** Progress value (0-100) */
  value: number
  /** Maximum value */
  max?: number
  /** Progress bar size */
  size?: "small" | "medium" | "large"
  /** Progress bar color */
  color?: "blue" | "green" | "orange" | "red" | "purple"
  /** Show percentage label */
  showLabel?: boolean
  /** Custom label */
  label?: string
  /** Indeterminate progress */
  indeterminate?: boolean
  /** Additional CSS classes */
  className?: string
  /** Test ID for testing */
  testId?: string
}

/** iOS-inspired progress bar component */
export const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    {
      value,
      max = 100,
      size = "medium",
      color = "blue",
      showLabel = false,
      label,
      indeterminate = false,
      className = "",
      testId,
      ...props
    },
    ref
  ) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

    const sizeStyles = {
      small: "h-1",
      medium: "h-2",
      large: "h-3",
    }

    const colorStyles = {
      blue: "bg-systemBlue-500 dark:bg-systemBlue-600",
      green: "bg-systemGreen-500 dark:bg-systemGreen-600",
      orange: "bg-systemOrange-500 dark:bg-systemOrange-600",
      red: "bg-systemRed-500 dark:bg-systemRed-600",
      purple: "bg-systemPurple-500 dark:bg-systemPurple-600",
    }

    const displayLabel = label || (showLabel ? `${Math.round(percentage)}%` : "")

    return (
      <div className={`space-y-2 ${className}`} data-testid={testId} {...props}>
        {displayLabel && (
          <div className="flex items-center justify-between">
            <span className="text-label-secondary text-ios-footnote dark:text-label-secondary-dark">
              {displayLabel}
            </span>
            {showLabel && !label && (
              <span className="text-label-tertiary text-ios-footnote dark:text-label-tertiary-dark">
                {value}/{max}
              </span>
            )}
          </div>
        )}

        <div
          ref={ref}
          className={`w-full overflow-hidden rounded-full bg-fill-tertiary dark:bg-fill-tertiary-dark ${sizeStyles[size]}`}
          role="progressbar"
          aria-valuenow={indeterminate ? undefined : value}
          aria-valuemin={0}
          aria-valuemax={max}
          aria-label={displayLabel || "Progress"}
        >
          <div
            className={`h-full rounded-full transition-all duration-300 ease-ios ${colorStyles[color]} ${
              indeterminate ? "animate-pulse" : ""
            }`}
            style={{
              width: indeterminate ? "100%" : `${percentage}%`,
              transform: indeterminate ? "translateX(-100%)" : "none",
              animation: indeterminate ? "progress-indeterminate 2s infinite linear" : undefined,
            }}
          />
        </div>
      </div>
    )
  }
)

ProgressBar.displayName = "ProgressBar"
