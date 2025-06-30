import React from "react"
import { transitions } from "./utils/animations"

/**
 * Props for the Card component
 */
export interface CardProps {
  /** Visual style variant following iOS design patterns */
  variant?: "elevated" | "grouped" | "inset" | "plain"
  /** Padding size variant */
  padding?: "none" | "small" | "medium" | "large"
  /** Card content */
  children: React.ReactNode
  /** Click event handler for interactive cards */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
  /** Whether the card is interactive/clickable */
  interactive?: boolean
  /** Whether the card is in loading state */
  loading?: boolean
  /** Additional CSS classes to apply */
  className?: string
  /** Test identifier for automated testing */
  testId?: string
  /** Accessible label for interactive cards */
  "aria-label"?: string
}

/**
 * iOS-inspired card component following Apple's design guidelines.
 * 
 * Features:
 * - Multiple visual variants (elevated, grouped, inset, plain)
 * - Interactive support with proper keyboard navigation
 * - Loading state with skeleton animation
 * - Accessibility support with proper ARIA attributes
 * - Smooth hover and focus transitions
 * - Touch-friendly interaction areas
 * 
 * @example
 * ```tsx
 * <Card
 *   variant="elevated"
 *   interactive
 *   onClick={handleCardClick}
 *   aria-label="User profile card"
 * >
 *   <h3>John Doe</h3>
 *   <p>Software Engineer</p>
 * </Card>
 * ```
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = "elevated",
      padding = "medium",
      children,
      onClick,
      interactive = false,
      loading = false,
      className = "",
      testId,
      ...props
    },
    ref
  ) => {
    const baseStyles = "card-ios"

    const variantStyles = {
      elevated: "card-elevated",
      grouped: "card-grouped",
      inset: "bg-background-secondary rounded-ios-lg mx-4 overflow-hidden dark:bg-background-secondary-dark",
      plain: "bg-transparent",
    }

    const paddingStyles = {
      none: "",
      small: "p-3",
      medium: "p-4",
      large: "p-6",
    }

    const isInteractive = interactive || !!onClick
    const interactiveStyles = isInteractive
      ? "cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-systemBlue-500 focus-visible:ring-offset-2 hover:scale-[1.02] active:scale-[0.98] hover:shadow-ios-3"
      : ""

    const loadingStyles = loading ? "animate-pulse" : ""

    /**
     * Handles click events
     */
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (loading) return
      onClick?.(event)
    }

    /**
     * Handles keyboard navigation
     */
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (loading) return
      
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault()
        const clickEvent = new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
        event.currentTarget.dispatchEvent(clickEvent)
      }
    }

    const cardClasses = [
      baseStyles,
      variantStyles[variant],
      paddingStyles[padding],
      interactiveStyles,
      loadingStyles,
      transitions.default,
      className,
    ].filter(Boolean).join(" ")

    return (
      <div
        ref={ref}
        className={cardClasses}
        onClick={handleClick}
        onKeyDown={isInteractive ? handleKeyDown : undefined}
        data-testid={testId}
        role={isInteractive ? "button" : undefined}
        tabIndex={isInteractive ? 0 : undefined}
        aria-busy={loading}
        aria-disabled={loading}
        {...props}
      >
        {loading ? (
          <div className="space-y-3">
            <div className="h-4 bg-fill-tertiary rounded animate-pulse dark:bg-fill-tertiary-dark" />
            <div className="h-4 bg-fill-tertiary rounded animate-pulse dark:bg-fill-tertiary-dark w-3/4" />
            <div className="h-4 bg-fill-tertiary rounded animate-pulse dark:bg-fill-tertiary-dark w-1/2" />
          </div>
        ) : (
          children
        )}
      </div>
    )
  }
)

Card.displayName = "Card"