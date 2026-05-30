import { forwardRef } from "react"
import type React from "react"
import { cn } from "../../utils/cn"
import "./badge.css"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  intent?: "primary" | "secondary" | "success" | "warning" | "danger" | "neutral"
  size?: "sm" | "md"
  shape?: "rounded" | "pill"
}

/**
 * Badge component for status indicators or labels.
 * Supports various intents (colors) and shapes.
 * Zero external dependencies.
 *
 * @example
 * <Badge intent="success">Completed</Badge>
 */
export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, intent = "neutral", size = "md", shape = "pill", ...props }, ref) => (
    <div
      ref={ref}
      data-intent={intent}
      data-size={size}
      data-shape={shape}
      className={cn("badge", className)}
      {...props}
    />
  )
)
Badge.displayName = "Badge"
