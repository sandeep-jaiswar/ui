import React from "react"

export interface CardProps {
  /** Card variant following iOS design patterns */
  variant?: "elevated" | "grouped" | "inset" | "plain"
  /** Card padding size */
  padding?: "none" | "small" | "medium" | "large"
  /** Card contents */
  children: React.ReactNode
  /** Optional click handler for interactive cards */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
  /** Is the card interactive/clickable? */
  interactive?: boolean
  /** Additional CSS classes */
  className?: string
  /** Test ID for testing */
  testId?: string
}

/** iOS-inspired card component following Apple's design guidelines */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = "elevated",
      padding = "medium",
      children,
      onClick,
      interactive = false,
      className = "",
      testId,
      ...props
    },
    ref
  ) => {
    const baseStyles = "card-ios transition-all duration-200 ease-ios"

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

    const interactiveStyles =
      interactive || onClick ? "cursor-pointer hover:scale-[1.02] active:scale-[0.98] hover:shadow-ios-3" : ""

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (onClick) {
        onClick(event)
      }
    }

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${paddingStyles[padding]} ${interactiveStyles} ${className}`.trim()}
        onClick={handleClick}
        data-testid={testId}
        role={interactive || onClick ? "button" : undefined}
        tabIndex={interactive || onClick ? 0 : undefined}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = "Card"
