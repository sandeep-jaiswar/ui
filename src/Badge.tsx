import React from "react"
import { announceToScreenReader } from "./utils/accessibility"
import { transitions } from "./utils/animations"

/**
 * Props for the Badge component
 */
export interface BadgeProps {
  /** Visual style variant */
  variant?: "primary" | "secondary" | "success" | "warning" | "error" | "info"
  /** Size variant */
  size?: "small" | "medium" | "large"
  /** Badge content */
  children?: React.ReactNode
  /** Shape variant */
  shape?: "rounded" | "pill"
  /** Show as dot indicator instead of content */
  dot?: boolean
  /** Maximum number to display (shows max+ if exceeded) */
  max?: number
  /** Whether to animate count changes */
  animated?: boolean
  /** Accessible label for dot badges */
  "aria-label"?: string
  /** Additional CSS classes to apply */
  className?: string
  /** Test identifier for automated testing */
  testId?: string
}

/**
 * iOS-inspired badge component for notifications, status indicators, and labels.
 *
 * Features:
 * - Multiple variants with semantic colors
 * - Animated count changes with accessibility announcements
 * - Dot variant with proper accessibility labels
 * - Number formatting with customizable max values
 * - Smooth animations with reduced motion support
 *
 * @example
 * ```tsx
 * <Badge variant="primary" animated max={99}>
 *   {notificationCount}
 * </Badge>
 *
 * <Badge dot variant="success" aria-label="Online status" />
 * ```
 */
export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = "primary",
      size = "medium",
      children,
      shape = "pill",
      dot = false,
      max = 99,
      animated = true,
      className = "",
      testId,
      ...props
    },
    ref
  ) => {
    const [previousValue, setPreviousValue] = React.useState<React.ReactNode>(children)

    // Announce count changes to screen readers
    React.useEffect(() => {
      if (animated && typeof children === "number" && typeof previousValue === "number") {
        if (children !== previousValue) {
          const message = children > previousValue ? `Count increased to ${children}` : `Count decreased to ${children}`
          announceToScreenReader(message, "polite")
        }
      }
      setPreviousValue(children)
    }, [children, previousValue, animated])

    const baseStyles = "badge-ios inline-flex items-center justify-center font-medium select-none"

    const variantStyles = {
      primary: "bg-systemRed-500 text-white dark:bg-systemRed-600",
      secondary:
        "bg-fill-secondary text-label-primary border border-separator-opaque dark:bg-fill-secondary-dark dark:text-label-primary-dark dark:border-separator-opaque-dark",
      success: "bg-systemGreen-500 text-white dark:bg-systemGreen-600",
      warning: "bg-systemOrange-500 text-white dark:bg-systemOrange-600",
      error: "bg-systemRed-500 text-white dark:bg-systemRed-600",
      info: "bg-systemBlue-500 text-white dark:bg-systemBlue-600",
    }

    const sizeStyles = {
      small: dot ? "w-2 h-2" : "px-1.5 py-0.5 text-ios-caption-2 min-w-[16px] h-4",
      medium: dot ? "w-2.5 h-2.5" : "px-2 py-0.5 text-ios-caption-1 min-w-[20px] h-5",
      large: dot ? "w-3 h-3" : "px-2.5 py-1 text-ios-footnote min-w-[24px] h-6",
    }

    const shapeStyles = {
      rounded: "rounded-ios-sm",
      pill: "rounded-full",
    }

    const animationStyles = animated ? transitions.default : ""

    /**
     * Formats content with max value handling
     */
    const formatContent = (content: React.ReactNode): React.ReactNode => {
      if (typeof content === "number" && content > max) {
        return `${max}+`
      }
      return content
    }

    const badgeClasses = [
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      shapeStyles[shape],
      animationStyles,
      className,
    ]
      .filter(Boolean)
      .join(" ")

    if (dot) {
      return (
        <span
          ref={ref}
          className={badgeClasses}
          data-testid={testId}
          role="status"
          aria-label={props["aria-label"] || `${variant} indicator`}
          {...props}
        />
      )
    }

    return (
      <span
        ref={ref}
        className={badgeClasses}
        data-testid={testId}
        role="status"
        aria-label={typeof children === "number" ? `${children} notifications` : undefined}
        {...props}
      >
        <span className={animated ? "transition-all duration-200 ease-ios" : ""}>{formatContent(children)}</span>
      </span>
    )
  }
)

Badge.displayName = "Badge"
