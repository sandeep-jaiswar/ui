import React, { forwardRef } from "react"

import { cn } from "../../utils/cn"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  intent?: "primary" | "secondary" | "success" | "warning" | "danger" | "neutral"
  size?: "sm" | "md"
  shape?: "rounded" | "pill"
}

const getIntentClasses = (intent: NonNullable<BadgeProps["intent"]>) => {
  switch (intent) {
    case "primary":
      return "border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
    case "secondary":
      return "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
    case "success":
      return "border-transparent bg-green-500/15 text-green-700 hover:bg-green-500/25 dark:text-green-400"
    case "warning":
      return "border-transparent bg-amber-500/15 text-amber-700 hover:bg-amber-500/25 dark:text-amber-400"
    case "danger":
      return "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80"
    case "neutral":
    default:
      return "border-transparent bg-muted text-muted-foreground hover:bg-muted/80"
  }
}

/**
 * Badge component for status indicators or labels.
 * Supports various intents (colors) and shapes.
 *
 * @example
 * <Badge intent="success">Completed</Badge>
 */
export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, intent = "neutral", size = "md", shape = "rounded", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center font-medium transition-colors",
          size === "sm" ? "px-2 py-0.5 text-xs" : "px-2.5 py-0.5 text-sm",
          shape === "pill" ? "rounded-full" : "rounded-md",
          getIntentClasses(intent),
          className
        )}
        {...props}
      />
    )
  }
)
Badge.displayName = "Badge"
