import React from "react"
import { Icon } from "./Icon"

/**
 * Props for the FloatingActionButton component
 */
export interface FloatingActionButtonProps {
  /** Button icon */
  icon?: string
  /** Button content (if no icon) */
  children?: React.ReactNode
  /** Button size */
  size?: "small" | "medium" | "large"
  /** Button color */
  color?: "blue" | "green" | "orange" | "red" | "purple"
  /** Button position */
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left"
  /** Is the button disabled? */
  disabled?: boolean
  /** Click handler */
  onClick?: () => void
  /** Additional CSS classes */
  className?: string
  /** Test ID for testing */
  testId?: string
}

/**
 * iOS-inspired floating action button component for primary actions.
 * 
 * Features:
 * - Fixed positioning in any corner
 * - Multiple size options
 * - Various color options
 * - Icon or custom content
 * - Hover and active animations
 * - Accessibility support
 * 
 * @example
 * ```tsx
 * <FloatingActionButton
 *   icon="plus"
 *   color="blue"
 *   position="bottom-right"
 *   onClick={handleAddItem}
 * />
 * ```
 */
export const FloatingActionButton = React.forwardRef<HTMLButtonElement, FloatingActionButtonProps>(
  (
    {
      icon = "plus",
      children,
      size = "medium",
      color = "blue",
      position = "bottom-right",
      disabled = false,
      onClick,
      className = "",
      testId,
      ...props
    },
    ref
  ) => {
    const sizeStyles = {
      small: "w-12 h-12",
      medium: "w-14 h-14",
      large: "w-16 h-16",
    }

    const iconSizes = {
      small: "medium" as const,
      medium: "large" as const,
      large: "xlarge" as const,
    }

    const colorStyles = {
      blue: "bg-systemBlue-500 hover:bg-systemBlue-600 active:bg-systemBlue-700 dark:bg-systemBlue-600 dark:hover:bg-systemBlue-700",
      green:
        "bg-systemGreen-500 hover:bg-systemGreen-600 active:bg-systemGreen-700 dark:bg-systemGreen-600 dark:hover:bg-systemGreen-700",
      orange:
        "bg-systemOrange-500 hover:bg-systemOrange-600 active:bg-systemOrange-700 dark:bg-systemOrange-600 dark:hover:bg-systemOrange-700",
      red: "bg-systemRed-500 hover:bg-systemRed-600 active:bg-systemRed-700 dark:bg-systemRed-600 dark:hover:bg-systemRed-700",
      purple:
        "bg-systemPurple-500 hover:bg-systemPurple-600 active:bg-systemPurple-700 dark:bg-systemPurple-600 dark:hover:bg-systemPurple-700",
    }

    const positionStyles = {
      "bottom-right": "bottom-6 right-6",
      "bottom-left": "bottom-6 left-6",
      "top-right": "top-6 right-6",
      "top-left": "top-6 left-6",
    }

    return (
      <button
        ref={ref}
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={`fixed ${positionStyles[position]} ${sizeStyles[size]} ${
          colorStyles[color]
        } flex items-center justify-center rounded-full text-white shadow-ios-3 transition-all duration-200 ease-ios focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 ${
          disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:scale-105 active:scale-95"
        } z-50 ${className} `.trim()}
        data-testid={testId}
        {...props}
      >
        {children || <Icon name={icon} size={iconSizes[size]} className="text-white" />}
      </button>
    )
  }
)

FloatingActionButton.displayName = "FloatingActionButton"