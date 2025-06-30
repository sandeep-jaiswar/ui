import React from "react"
import { announceToScreenReader, generateId } from "./utils/accessibility"
import { transitions } from "./utils/animations"

/**
 * Props for the Checkbox component
 */
export interface CheckboxProps {
  /** Whether the checkbox is checked */
  checked?: boolean
  /** Default checked state for uncontrolled component */
  defaultChecked?: boolean
  /** Whether the checkbox is in indeterminate state */
  indeterminate?: boolean
  /** Size variant */
  size?: "small" | "medium" | "large"
  /** Whether the checkbox is disabled */
  disabled?: boolean
  /** Color variant when checked */
  color?: "blue" | "green" | "orange" | "red" | "purple"
  /** Change event handler */
  onChange?: (checked: boolean) => void
  /** Checkbox label */
  label?: string
  /** Label position relative to checkbox */
  labelPosition?: "left" | "right"
  /** Whether the checkbox is in error state */
  error?: boolean
  /** Error message to display */
  errorMessage?: string
  /** Helper text */
  helperText?: string
  /** Whether the checkbox is required */
  required?: boolean
  /** Additional CSS classes to apply */
  className?: string
  /** Test identifier for automated testing */
  testId?: string
}

/**
 * iOS-inspired checkbox component following Apple's design patterns.
 *
 * Features:
 * - Controlled and uncontrolled modes
 * - Indeterminate state with proper screen reader support
 * - Error state with validation messaging
 * - Smooth animations with reduced motion support
 * - Large touch targets for mobile accessibility
 * - Comprehensive keyboard navigation
 *
 * @example
 * ```tsx
 * <Checkbox
 *   label="Accept terms and conditions"
 *   required
 *   error={hasError}
 *   errorMessage="You must accept the terms"
 *   onChange={setAccepted}
 * />
 * ```
 */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      checked,
      defaultChecked = false,
      indeterminate = false,
      size = "medium",
      disabled = false,
      color = "blue",
      onChange,
      label,
      labelPosition = "right",
      error = false,
      errorMessage,
      helperText,
      required = false,
      className = "",
      testId,
      ...props
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = React.useState(checked ?? defaultChecked)
    const inputRef = React.useRef<HTMLInputElement>(null)
    const checkboxId = React.useId()
    const errorId = generateId("checkbox-error")
    const helperId = generateId("checkbox-helper")

    React.useEffect(() => {
      if (checked !== undefined) {
        setIsChecked(checked)
      }
    }, [checked])

    React.useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = indeterminate
      }
    }, [indeterminate])

    /**
     * Handles change events with accessibility announcements
     */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return

      const newChecked = e.target.checked
      if (checked === undefined) {
        setIsChecked(newChecked)
      }
      onChange?.(newChecked)

      // Announce state change to screen readers
      if (indeterminate) {
        announceToScreenReader("Checkbox state changed from indeterminate", "polite")
      } else {
        announceToScreenReader(newChecked ? "Checkbox checked" : "Checkbox unchecked", "polite")
      }
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
      appearance-none rounded-ios-sm border-2 border-separator-opaque dark:border-separator-opaque-dark
      bg-background-primary dark:bg-background-tertiary-dark
      cursor-pointer relative
      focus:outline-none focus-visible:ring-2 focus-visible:ring-systemBlue-500 focus-visible:ring-offset-2
      ${transitions.default}
    `

    const errorStyles = error ? "border-systemRed-500 dark:border-systemRed-400" : ""
    const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : ""

    const checkboxElement = (
      <div className="relative">
        <input
          ref={(node) => {
            inputRef.current = node
            if (typeof ref === "function") {
              ref(node)
            } else if (ref) {
              ref.current = node
            }
          }}
          id={checkboxId}
          type="checkbox"
          checked={isChecked}
          disabled={disabled}
          required={required}
          onChange={handleChange}
          className={`${baseStyles} ${sizeStyles[size]} ${colorStyles[color]} ${errorStyles} ${disabledStyles} ${className}`.trim()}
          data-testid={testId}
          aria-describedby={
            [error && errorMessage ? errorId : null, helperText ? helperId : null].filter(Boolean).join(" ") ||
            undefined
          }
          aria-invalid={error}
          aria-required={required}
          {...props}
        />
        {(isChecked || indeterminate) && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            {indeterminate ? (
              <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
              </svg>
            ) : (
              <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
              </svg>
            )}
          </div>
        )}
      </div>
    )

    if (!label) {
      return (
        <div className="space-y-1">
          {checkboxElement}
          {error && errorMessage && (
            <p id={errorId} className="text-systemRed-500 text-ios-footnote dark:text-systemRed-400" role="alert">
              {errorMessage}
            </p>
          )}
          {helperText && !error && (
            <p id={helperId} className="text-label-tertiary text-ios-footnote dark:text-label-tertiary-dark">
              {helperText}
            </p>
          )}
        </div>
      )
    }

    return (
      <div className="space-y-1">
        <label
          htmlFor={checkboxId}
          className={`flex min-h-[44px] cursor-pointer items-start gap-3 ${
            labelPosition === "left" ? "flex-row-reverse" : ""
          } ${disabled ? "cursor-not-allowed" : ""}`}
        >
          {checkboxElement}
          <div className="flex-1 pt-0.5">
            <span className="select-none text-label-primary text-ios-body dark:text-label-primary-dark">
              {label}
              {required && (
                <span className="ml-1 text-systemRed-500" aria-label="required">
                  *
                </span>
              )}
            </span>
          </div>
        </label>

        {error && errorMessage && (
          <p id={errorId} className="text-systemRed-500 text-ios-footnote dark:text-systemRed-400" role="alert">
            {errorMessage}
          </p>
        )}

        {helperText && !error && (
          <p id={helperId} className="text-label-tertiary text-ios-footnote dark:text-label-tertiary-dark">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Checkbox.displayName = "Checkbox"
