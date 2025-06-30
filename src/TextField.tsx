import React, { InputHTMLAttributes, useState } from "react"

/**
 * Props for the TextField component
 */
export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  /** Label text */
  label?: string
  /** Whether the field has an error */
  error?: boolean
  /** Helper or error text */
  helperText?: string
  /** Change handler */
  onChange?: (value: string) => void
  /** Visual style variant */
  variant?: "light" | "dark"
}

/**
 * Basic text field component with clear button functionality.
 * 
 * Features:
 * - Light and dark variants
 * - Error state
 * - Helper text
 * - Clear button
 * - Focus and blur handling
 * 
 * @example
 * ```tsx
 * <TextField
 *   label="Username"
 *   placeholder="Enter your username"
 *   value={username}
 *   onChange={setUsername}
 *   helperText="Username must be at least 3 characters"
 * />
 * ```
 */
export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, error, helperText, className, onChange, value, variant = "light", ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false)

    /**
     * Clears the input value
     */
    const handleClear = () => {
      if (onChange) {
        onChange("")
      }
    }

    /**
     * Handles input focus
     */
    const handleFocus = () => {
      setIsFocused(true)
    }

    /**
     * Handles input blur
     */
    const handleBlur = () => {
      setIsFocused(false)
    }

    const baseStyles = "block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm"

    const variantStyles =
      variant === "dark"
        ? "bg-gray-800 text-white border-gray-700 focus:ring-blue-600 focus:border-blue-600"
        : "bg-white text-gray-900 border-gray-300 focus:ring-blue-500 focus:border-blue-500"

    const stateStyles = error ? "border-red-500 focus:ring-red-500 focus:border-red-500" : variantStyles // Use variant styles if no error

    const disabledStyles = props.disabled
      ? "opacity-50 cursor-not-allowed bg-gray-100 dark:bg-gray-700 dark:text-gray-400"
      : ""

    return (
      <div>
        {label && (
          <label htmlFor={props.id} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {label}
          </label>
        )}
        <div className="relative mt-1">
          <input
            ref={ref}
            type="text"
            className={`${baseStyles} ${stateStyles} ${disabledStyles} ${className || ""} pr-8`.trim()} // Added pr-8 for clear button spacing
            onChange={(e) => onChange?.(e.target.value)}
            value={value}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />
          {value && onChange && !props.disabled && (
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5 text-gray-500 focus:outline-none dark:text-gray-400"
              onClick={handleClear}
              aria-label="Clear input"
            >
              ×
            </button>
          )}
        </div>
        {(helperText || error) && (
          <p className={`mt-1 text-xs ${error ? "text-red-600" : "text-gray-500 dark:text-gray-400"}`}>{helperText}</p>
        )}
      </div>
    )
  }
)

TextField.displayName = "TextField"