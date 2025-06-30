import React from "react"
import { Icon } from "./Icon"

/**
 * Option configuration for Select component
 */
export interface SelectOption {
  /** Option value */
  value: string
  /** Display label */
  label: string
  /** Whether the option is disabled */
  disabled?: boolean
}

/**
 * Props for the Select component
 */
export interface SelectProps {
  /** Select options */
  options: SelectOption[]
  /** Selected value */
  value?: string
  /** Default selected value */
  defaultValue?: string
  /** Placeholder text */
  placeholder?: string
  /** Is the select disabled? */
  disabled?: boolean
  /** Select variant */
  variant?: "filled" | "outlined" | "plain"
  /** Select size */
  size?: "small" | "medium" | "large"
  /** Label text */
  label?: string
  /** Helper text */
  helperText?: string
  /** Error text */
  errorText?: string
  /** Select state */
  state?: "default" | "error" | "success"
  /** Full width select */
  fullWidth?: boolean
  /** Change handler */
  onChange?: (value: string) => void
  /** Additional CSS classes */
  className?: string
  /** Test ID for testing */
  testId?: string
  /** Additional props */
  id?: string
}

/**
 * iOS-inspired select component for dropdown selection.
 * 
 * Features:
 * - Multiple variants (filled, outlined, plain)
 * - Various size options
 * - Validation states
 * - Custom chevron icon
 * - Placeholder support
 * - Disabled state and options
 * 
 * @example
 * ```tsx
 * <Select
 *   label="Country"
 *   options={[
 *     { value: "us", label: "United States" },
 *     { value: "ca", label: "Canada" },
 *     { value: "mx", label: "Mexico" }
 *   ]}
 *   value={country}
 *   onChange={setCountry}
 * />
 * ```
 */
export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      options,
      value,
      defaultValue,
      placeholder = "Select an option",
      disabled = false,
      variant = "filled",
      size = "medium",
      label,
      helperText,
      errorText,
      state = "default",
      fullWidth = false,
      onChange,
      className = "",
      testId,
      ...props
    },
    ref
  ) => {
    const [selectedValue, setSelectedValue] = React.useState(value ?? defaultValue ?? "")

    React.useEffect(() => {
      if (value !== undefined) {
        setSelectedValue(value)
      }
    }, [value])

    /**
     * Handles select change events
     */
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newValue = e.target.value
      if (value === undefined) {
        setSelectedValue(newValue)
      }
      onChange?.(newValue)
    }

    const displayText = state === "error" && errorText ? errorText : helperText

    const baseStyles = "transition-all duration-200 ease-ios focus:outline-none appearance-none cursor-pointer"

    const variantStyles = {
      filled:
        "bg-fill-secondary dark:bg-fill-secondary-dark border border-transparent focus:border-systemBlue-500 focus:bg-background-primary dark:focus:bg-background-tertiary-dark",
      outlined:
        "bg-transparent border border-separator-opaque dark:border-separator-opaque-dark focus:border-systemBlue-500",
      plain: "bg-transparent border-none focus:bg-fill-quaternary dark:focus:bg-fill-quaternary-dark",
    }

    const sizeStyles = {
      small: "px-3 py-2 text-ios-footnote min-h-[32px] pr-8",
      medium: "px-4 py-3 text-ios-body min-h-[44px] pr-10",
      large: "px-5 py-4 text-ios-callout min-h-[52px] pr-12",
    }

    const stateStyles = {
      default: "",
      error: "border-systemRed-500 focus:border-systemRed-500",
      success: "border-systemGreen-500 focus:border-systemGreen-500",
    }

    const disabledStyles = disabled
      ? "opacity-50 cursor-not-allowed bg-fill-quaternary dark:bg-fill-quaternary-dark"
      : ""

    const widthStyles = fullWidth ? "w-full" : ""

    const selectClasses = [
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      stateStyles[state],
      disabledStyles,
      widthStyles,
      "rounded-ios",
      "text-label-primary dark:text-label-primary-dark",
      className,
    ]
      .filter(Boolean)
      .join(" ")

    const iconSize = size === "small" ? 16 : size === "large" ? 24 : 20

    return (
      <div className={`${fullWidth ? "w-full" : ""} space-y-1`}>
        {label && (
          <label
            htmlFor={props.id}
            className="block font-medium text-label-primary text-ios-subhead dark:text-label-primary-dark"
          >
            {label}
          </label>
        )}

        <div className="relative">
          <select
            ref={ref}
            className={selectClasses}
            value={selectedValue}
            onChange={handleChange}
            disabled={disabled}
            data-testid={testId}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value} disabled={option.disabled}>
                {option.label}
              </option>
            ))}
          </select>

          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 transform">
            <Icon name="chevron" size={iconSize} color="tertiary" className="rotate-90" />
          </div>
        </div>

        {displayText && (
          <p
            className={`text-ios-footnote ${
              state === "error"
                ? "text-systemRed-500 dark:text-systemRed-400"
                : state === "success"
                ? "text-systemGreen-500 dark:text-systemGreen-400"
                : "text-label-tertiary dark:text-label-tertiary-dark"
            }`}
          >
            {displayText}
          </p>
        )}
      </div>
    )
  }
)

Select.displayName = "Select"