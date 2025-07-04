import React from "react"

/**
 * Props for the Divider component
 */
export interface DividerProps {
  /** Divider orientation */
  orientation?: "horizontal" | "vertical"
  /** Divider variant */
  variant?: "full" | "inset" | "middle"
  /** Divider thickness */
  thickness?: "thin" | "medium" | "thick"
  /** Divider color */
  color?: "default" | "light" | "dark"
  /** Divider content (text or element) */
  children?: React.ReactNode
  /** Additional CSS classes */
  className?: string
  /** Test ID for testing */
  testId?: string
}

/**
 * iOS-inspired divider component for separating content sections.
 * 
 * Features:
 * - Horizontal or vertical orientation
 * - Multiple variants (full, inset, middle)
 * - Customizable thickness
 * - Different color options
 * - Optional content display in the middle
 * 
 * @example
 * ```tsx
 * // Simple divider
 * <Divider />
 * 
 * // Divider with text
 * <Divider>OR</Divider>
 * 
 * // Vertical divider
 * <Divider orientation="vertical" />
 * 
 * // Styled divider
 * <Divider variant="middle" thickness="medium" color="dark" />
 * ```
 */
export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      orientation = "horizontal",
      variant = "full",
      thickness = "thin",
      color = "default",
      children,
      className = "",
      testId,
      ...props
    },
    ref
  ) => {
    const baseStyles = "flex items-center"

    const orientationStyles = {
      horizontal: "w-full",
      vertical: "h-full flex-col",
    }

    const variantStyles = {
      full: "",
      inset: orientation === "horizontal" ? "ml-4" : "mt-4",
      middle: orientation === "horizontal" ? "mx-4" : "my-4",
    }

    const thicknessStyles = {
      thin: orientation === "horizontal" ? "border-t" : "border-l",
      medium: orientation === "horizontal" ? "border-t-2" : "border-l-2",
      thick: orientation === "horizontal" ? "border-t-4" : "border-l-4",
    }

    const colorStyles = {
      default: "border-separator-nonOpaque dark:border-separator-nonOpaque-dark",
      light: "border-separator-opaque dark:border-separator-opaque-dark",
      dark: "border-label-quaternary dark:border-label-quaternary-dark",
    }

    if (children) {
      return (
        <div
          ref={ref}
          className={`${baseStyles} ${orientationStyles[orientation]} ${variantStyles[variant]} ${className}`}
          data-testid={testId}
          {...props}
        >
          <div className={`flex-1 ${thicknessStyles[thickness]} ${colorStyles[color]}`} />
          <div className={`px-4 ${orientation === "vertical" ? "px-0 py-4" : ""}`}>
            {typeof children === "string" ? (
              <span className="text-label-tertiary text-ios-footnote dark:text-label-tertiary-dark">{children}</span>
            ) : (
              children
            )}
          </div>
          <div className={`flex-1 ${thicknessStyles[thickness]} ${colorStyles[color]}`} />
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={` ${baseStyles} ${orientationStyles[orientation]} ${variantStyles[variant]} ${thicknessStyles[thickness]} ${colorStyles[color]} ${className} `.trim()}
        data-testid={testId}
        {...props}
      />
    )
  }
)

Divider.displayName = "Divider"