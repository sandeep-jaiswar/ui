import React from "react"
import { Icon } from "./Icon"

/**
 * Configuration for a timeline item
 */
export interface TimelineItem {
  /** Unique identifier for the item */
  id: string
  /** Item title */
  title: string
  /** Optional description */
  description?: string
  /** Timestamp or date text */
  timestamp: string
  /** Optional icon name */
  icon?: string
  /** Color theme for the item */
  color?: "blue" | "green" | "orange" | "red" | "purple"
  /** Whether the item is completed */
  completed?: boolean
}

/**
 * Props for the Timeline component
 */
export interface TimelineProps {
  /** Timeline items */
  items: TimelineItem[]
  /** Timeline variant */
  variant?: "default" | "compact"
  /** Timeline orientation */
  orientation?: "vertical" | "horizontal"
  /** Additional CSS classes */
  className?: string
  /** Test ID for testing */
  testId?: string
}

/**
 * iOS-inspired timeline component for chronological data display.
 * 
 * Features:
 * - Vertical or horizontal orientation
 * - Default and compact variants
 * - Customizable item colors
 * - Icon support
 * - Completed/incomplete state visualization
 * 
 * @example
 * ```tsx
 * <Timeline
 *   items={[
 *     {
 *       id: "1",
 *       title: "Order Placed",
 *       description: "Your order has been placed successfully",
 *       timestamp: "2:30 PM",
 *       completed: true,
 *       color: "green"
 *     },
 *     {
 *       id: "2",
 *       title: "Processing",
 *       description: "Your order is being processed",
 *       timestamp: "3:15 PM",
 *       completed: true,
 *       color: "blue"
 *     },
 *     {
 *       id: "3",
 *       title: "Shipped",
 *       timestamp: "Expected 4:00 PM",
 *       completed: false,
 *       color: "orange"
 *     }
 *   ]}
 * />
 * ```
 */
export const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  ({ items, variant = "default", orientation = "vertical", className = "", testId, ...props }, ref) => {
    const colorStyles = {
      blue: "bg-systemBlue-500 border-systemBlue-500",
      green: "bg-systemGreen-500 border-systemGreen-500",
      orange: "bg-systemOrange-500 border-systemOrange-500",
      red: "bg-systemRed-500 border-systemRed-500",
      purple: "bg-systemPurple-500 border-systemPurple-500",
    }

    if (orientation === "horizontal") {
      return (
        <div
          ref={ref}
          className={`flex items-center gap-4 overflow-x-auto pb-4 ${className}`}
          data-testid={testId}
          {...props}
        >
          {items.map((item, index) => (
            <div key={item.id} className="flex min-w-0 items-center gap-4">
              <div className="flex min-w-0 flex-col items-center gap-2">
                {/* Icon/Dot */}
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full border-2 ${
                    item.completed
                      ? colorStyles[item.color || "blue"]
                      : "border-separator-opaque bg-fill-tertiary dark:border-separator-opaque-dark dark:bg-fill-tertiary-dark"
                  } `}
                >
                  {item.icon ? (
                    <Icon
                      name={item.icon}
                      size="small"
                      className={item.completed ? "text-white" : "text-label-tertiary dark:text-label-tertiary-dark"}
                    />
                  ) : item.completed ? (
                    <Icon name="check" size="small" className="text-white" />
                  ) : null}
                </div>

                {/* Content */}
                <div className="min-w-0 max-w-[120px] text-center">
                  <h4 className="truncate font-medium text-label-primary text-ios-caption-1 dark:text-label-primary-dark">
                    {item.title}
                  </h4>
                  <p className="text-label-tertiary text-ios-caption-2 dark:text-label-tertiary-dark">
                    {item.timestamp}
                  </p>
                </div>
              </div>

              {/* Connector */}
              {index < items.length - 1 && (
                <div className="h-0.5 w-8 bg-separator-nonOpaque dark:bg-separator-nonOpaque-dark" />
              )}
            </div>
          ))}
        </div>
      )
    }

    return (
      <div ref={ref} className={`space-y-0 ${className}`} data-testid={testId} {...props}>
        {items.map((item, index) => (
          <div key={item.id} className="flex gap-4">
            {/* Timeline Line */}
            <div className="flex flex-col items-center">
              {/* Icon/Dot */}
              <div
                className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 ${
                  item.completed
                    ? colorStyles[item.color || "blue"]
                    : "border-separator-opaque bg-fill-tertiary dark:border-separator-opaque-dark dark:bg-fill-tertiary-dark"
                } `}
              >
                {item.icon ? (
                  <Icon
                    name={item.icon}
                    size="small"
                    className={item.completed ? "text-white" : "text-label-tertiary dark:text-label-tertiary-dark"}
                  />
                ) : item.completed ? (
                  <Icon name="check" size="small" className="text-white" />
                ) : null}
              </div>

              {/* Connector Line */}
              {index < items.length - 1 && (
                <div className="mt-2 h-12 w-0.5 bg-separator-nonOpaque dark:bg-separator-nonOpaque-dark" />
              )}
            </div>

            {/* Content */}
            <div className={`flex-1 ${variant === "compact" ? "pb-4" : "pb-8"}`}>
              <div className="mb-1 flex items-start justify-between">
                <h4 className="font-medium text-label-primary text-ios-subhead dark:text-label-primary-dark">
                  {item.title}
                </h4>
                <span className="ml-4 flex-shrink-0 text-label-tertiary text-ios-caption-1 dark:text-label-tertiary-dark">
                  {item.timestamp}
                </span>
              </div>

              {item.description && (
                <p className="text-label-secondary text-ios-footnote dark:text-label-secondary-dark">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    )
  }
)

Timeline.displayName = "Timeline"