import React from "react"

/**
 * Props for the Button component
 */
export interface ButtonProps {
  /** Visual style variant following iOS design patterns */
  variant?: "primary" | "secondary" | "destructive" | "ghost" | "plain"
  /** Size variant affecting padding and font size */
  size?: "small" | "medium" | "large"
  /** Button content */
  children: React.ReactNode
  /** Whether the button is disabled */
  disabled?: boolean
  /** Whether the button is in loading state */
  loading?: boolean
  /** Whether the button should take full width of container */
  fullWidth?: boolean
  /** Icon to display before the text content */
  startIcon?: React.ReactNode
  /** Icon to display after the text content */
  endIcon?: React.ReactNode
  /** Click event handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  /** HTML button type */
  type?: "button" | "submit" | "reset"
  /** Additional CSS classes to apply */
  className?: string
  /** Test identifier for automated testing */
  testId?: string
  /** Accessible label for screen readers (especially important for icon-only buttons) */
  "aria-label"?: string
}

/**
 * iOS-inspired button component following Apple's Human Interface Guidelines.
 *
 * Features:
 * - Multiple variants (primary, secondary, destructive, ghost, plain)
 * - Three size options with proper touch targets
 * - Loading state with spinner and width preservation
 * - Icon support with proper spacing
 * - Full accessibility support including ARIA attributes
 * - Smooth animations and hover effects
 * - Proper disabled state handling
 *
 * @example
 * ```tsx
 * <Button
 *   variant="primary"
 *   size="medium"
 *   startIcon={<PlusIcon />}
 *   onClick={handleClick}
 *   loading={isSubmitting}
 * >
 *   Add Item
 * </Button>
 * ```
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "medium",
      children,
      disabled = false,
      loading = false,
      fullWidth = false,
      startIcon,
      endIcon,
      onClick,
      type = "button",
      className = "",
      testId,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "btn-ios inline-flex items-center justify-center font-sf-pro font-semibold transition-all duration-200 ease-ios focus:outline-none focus-visible:ring-2 focus-visible:ring-systemBlue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"

    const variantStyles = {
      primary: "btn-primary",
      secondary: "btn-secondary",
      destructive: "btn-destructive",
      ghost: "btn-ghost",
      plain:
        "bg-transparent text-systemBlue-500 hover:bg-fill-quaternary active:bg-fill-tertiary dark:text-systemBlue-400 dark:hover:bg-fill-quaternary-dark dark:active:bg-fill-tertiary-dark p-0 min-h-0",
    }

    const sizeStyles = {
      small: "px-3 py-1.5 text-ios-footnote min-h-[32px] gap-1",
      medium: "px-4 py-2.5 text-ios-body min-h-[44px] gap-2",
      large: "px-6 py-3.5 text-ios-headline min-h-[52px] gap-2",
    }

    const widthStyles = fullWidth ? "w-full" : ""

    /**
     * Handles click events with proper disabled/loading state checks
     */
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled || loading) {
        event.preventDefault()
        return
      }
      onClick?.(event)
    }

    /**
     * Renders button content with loading state handling
     */
    const renderContent = () => {
      if (loading) {
        return (
          <>
            <div className="spinner-ios h-4 w-4" />
            <span className="ml-2">Loading...</span>
          </>
        )
      }

      return (
        <>
          {startIcon && <span className="flex-shrink-0">{startIcon}</span>}
          <span className={loading ? "invisible" : ""}>{children}</span>
          {endIcon && <span className="flex-shrink-0">{endIcon}</span>}
        </>
      )
    }

    return (
      <button
        ref={ref}
        type={type}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`.trim()}
        disabled={disabled || loading}
        onClick={handleClick}
        data-testid={testId}
        aria-busy={loading}
        aria-disabled={disabled || loading}
        {...props}
      >
        {renderContent()}
      </button>
    )
  }
)

Button.displayName = "Button"
