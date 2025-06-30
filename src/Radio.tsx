import React from "react"

/**
 * Props for the Radio component
 */
export interface RadioProps {
  /** Radio value */
  value: string
  /** Is the radio checked? */
  checked?: boolean
  /** Radio name (for grouping) */
  name?: string
  /** Radio size */
  size?: "small" | "medium" | "large"
  /** Is the radio disabled? */
  disabled?: boolean
  /** Radio color when checked */
  color?: "blue" | "green" | "orange" | "red" | "purple"
  /** Change handler */
  onChange?: (value: string) => void
  /** Radio label */
  label?: string
  /** Label position */
  labelPosition?: "left" | "right"
  /** Additional CSS classes */
  className?: string
  /** Test ID for testing */
  testId?: string
}

/**
 * iOS-inspired radio component for single selection options.
 * 
 * Features:
 * - Multiple size variants
 * - Various color options
 * - Label with customizable position
 * - Disabled state
 * - Proper accessibility attributes
 * - Smooth animations
 * 
 * @example
 * ```tsx
 * <Radio
 *   value="option1"
 *   name="options"
 *   checked={selectedOption === "option1"}
 *   onChange={(value) => setSelectedOption(value)}
 *   label="Option 1"
 * />
 * ```
 */
export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      value,
      checked = false,
      name,
      size = "medium",
      disabled = false,
      color = "blue",
      onChange,
      label,
      labelPosition = "right",
      className = "",
      testId,
      ...props
    },
    ref
  ) => {
    /**
     * Handles change events
     */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return
      onChange?.(e.target.value)
    }

    const sizeStyles = {
      small: "w-4 h-4",
      medium: "w-5 h-5",
      large: "w-6 h-6",
    }

    const colorStyles = {
      blue: "checked:bg-systemBlue-500 checked:border-systemBlue-500 dark:checked:bg-systemBlue-600 dark:checked:border-systemBlue-600",
      green:
        "checked:bg-systemGreen-500 checked:border-systemGreen-500 dark:checked:bg-systemGreen-600 dark:checked:border-systemGreen-600",
      orange:
        "checked:bg-systemOrange-500 checked:border-systemOrange-500 dark:checked:bg-systemOrange-600 dark:checked:border-systemOrange-600",
      red: "checked:bg-systemRed-500 checked:border-systemRed-500 dark:checked:bg-systemRed-600 dark:checked:border-systemRed-600",
      purple:
        "checked:bg-systemPurple-500 checked:border-systemPurple-500 dark:checked:bg-systemPurple-600 dark:checked:border-systemPurple-600",
    }

    const baseStyles = `
      appearance-none rounded-full border-2 border-separator-opaque dark:border-separator-opaque-dark
      bg-background-primary dark:bg-background-tertiary-dark
      transition-all duration-200 ease-ios cursor-pointer
      focus:outline-none focus-visible:ring-2 focus-visible:ring-systemBlue-500 focus-visible:ring-offset-2
      relative
    `

    const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : ""

    const radioElement = (
      <div className="relative">
        <input
          ref={ref}
          type="radio"
          value={value}
          name={name}
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          className={`${baseStyles} ${sizeStyles[size]} ${colorStyles[color]} ${disabledStyles} ${className}`.trim()}
          data-testid={testId}
          {...props}
        />
        {checked && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-white" />
          </div>
        )}
      </div>
    )

    if (!label) {
      return radioElement
    }

    return (
      <label
        className={`flex cursor-pointer items-center gap-3 ${labelPosition === "left" ? "flex-row-reverse" : ""} ${
          disabled ? "cursor-not-allowed" : ""
        }`}
      >
        {radioElement}
        <span className="select-none text-label-primary text-ios-body dark:text-label-primary-dark">{label}</span>
      </label>
    )
  }
)

Radio.displayName = "Radio"