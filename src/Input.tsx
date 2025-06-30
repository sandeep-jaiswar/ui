import React from "react"
import { generateId } from "./utils/accessibility"
import { transitions } from "./utils/animations"

/**
 * Props for the Input component
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Visual style variant */
  variant?: "filled" | "outlined" | "plain"
  /** Size variant */
  size?: "small" | "medium" | "large"
  /** Input state for validation feedback */
  state?: "default" | "error" | "success"
  /** Label text */
  label?: string
  /** Helper text */
  helperText?: string
  /** Error text (overrides helperText when state is error) */
  errorText?: string
  /** Icon to display at the start */
  startIcon?: React.ReactNode
  /** Icon to display at the end */
  endIcon?: React.ReactNode
  /** Show clear button when input has value */
  clearable?: boolean
  /** Show character counter */
  showCounter?: boolean
  /** Full width input */
  fullWidth?: boolean
  /** Whether the input is required */
  required?: boolean
  /** Additional CSS classes to apply */
  className?: string
  /** Test identifier for automated testing */
  testId?: string
}

/**
 * iOS-inspired input component with comprehensive features and accessibility.
 *
 * Features:
 * - Multiple variants (filled, outlined, plain)
 * - Validation states with proper error handling
 * - Character counter with maxLength support
 * - Clear button with smooth animations
 * - Icon support with proper spacing
 * - Comprehensive accessibility features
 * - Debounced validation feedback
 *
 * @example
 * ```tsx
 * <Input
 *   label="Email Address"
 *   type="email"
 *   required
 *   clearable
 *   showCounter
 *   maxLength={100}
 *   state={emailError ? "error" : "default"}
 *   errorText={emailError}
 *   onChange={handleEmailChange}
 * />
 * ```
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = "filled",
      size = "medium",
      state = "default",
      label,
      helperText,
      errorText,
      startIcon,
      endIcon,
      clearable = false,
      showCounter = false,
      fullWidth = false,
      required = false,
      className = "",
      testId,
      value,
      onChange,
      maxLength,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(value || "")
    const [isFocused, setIsFocused] = React.useState(false)
    const inputId = React.useId()
    const errorId = generateId("input-error")
    const helperId = generateId("input-helper")
    const counterId = generateId("input-counter")

    React.useEffect(() => {
      if (value !== undefined) {
        setInternalValue(value)
      }
    }, [value])

    /**
     * Handles input change events
     */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      if (value === undefined) {
        setInternalValue(newValue)
      }
      onChange?.(e)
    }

    /**
     * Handles clear button click
     */
    const handleClear = () => {
      const event = {
        target: { value: "" },
        currentTarget: { value: "" },
      } as React.ChangeEvent<HTMLInputElement>

      if (value === undefined) {
        setInternalValue("")
      }
      onChange?.(event)
    }

    const currentValue = value !== undefined ? value : internalValue
    const showClear = clearable && currentValue && !props.disabled && !props.readOnly
    const displayText = state === "error" && errorText ? errorText : helperText
    const characterCount = typeof currentValue === "string" ? currentValue.length : 0
    const isOverLimit = maxLength && characterCount > maxLength

    const baseStyles = "transition-all duration-200 ease-ios focus:outline-none"

    const variantStyles = {
      filled:
        "bg-fill-secondary dark:bg-fill-secondary-dark border border-transparent focus:border-systemBlue-500 focus:bg-background-primary dark:focus:bg-background-tertiary-dark",
      outlined:
        "bg-transparent border border-separator-opaque dark:border-separator-opaque-dark focus:border-systemBlue-500",
      plain: "bg-transparent border-none focus:bg-fill-quaternary dark:focus:bg-fill-quaternary-dark",
    }

    const sizeStyles = {
      small: "px-3 py-2 text-ios-footnote min-h-[32px]",
      medium: "px-4 py-3 text-ios-body min-h-[44px]",
      large: "px-5 py-4 text-ios-callout min-h-[52px]",
    }

    const stateStyles = {
      default: "",
      error: "border-systemRed-500 focus:border-systemRed-500",
      success: "border-systemGreen-500 focus:border-systemGreen-500",
    }

    const disabledStyles = props.disabled
      ? "opacity-50 cursor-not-allowed bg-fill-quaternary dark:bg-fill-quaternary-dark"
      : ""

    const widthStyles = fullWidth ? "w-full" : ""

    const inputClasses = [
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      stateStyles[state],
      disabledStyles,
      widthStyles,
      "rounded-ios",
      "text-label-primary dark:text-label-primary-dark",
      "placeholder:text-label-tertiary dark:placeholder:text-label-tertiary-dark",
      startIcon ? "pl-10" : "",
      endIcon || showClear ? "pr-10" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ")

    return (
      <div className={`${fullWidth ? "w-full" : ""} space-y-1`}>
        {label && (
          <label
            htmlFor={inputId}
            className="block font-medium text-label-primary text-ios-subhead dark:text-label-primary-dark"
          >
            {label}
            {required && (
              <span className="ml-1 text-systemRed-500" aria-label="required">
                *
              </span>
            )}
          </label>
        )}

        <div className="relative">
          {startIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 transform text-label-tertiary dark:text-label-tertiary-dark">
              {startIcon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            className={inputClasses}
            value={currentValue}
            onChange={handleChange}
            onFocus={(e) => {
              setIsFocused(true)
              props.onFocus?.(e)
            }}
            onBlur={(e) => {
              setIsFocused(false)
              props.onBlur?.(e)
            }}
            data-testid={testId}
            required={required}
            maxLength={maxLength}
            aria-describedby={
              [
                state === "error" && errorText ? errorId : null,
                helperText && state !== "error" ? helperId : null,
                showCounter ? counterId : null,
              ]
                .filter(Boolean)
                .join(" ") || undefined
            }
            aria-invalid={state === "error"}
            aria-required={required}
            {...props}
          />

          {(endIcon || showClear) && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 transform">
              {showClear ? (
                <button
                  type="button"
                  onClick={handleClear}
                  className={`rounded text-label-tertiary transition-all duration-200 ease-ios hover:text-label-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-systemBlue-500 focus-visible:ring-offset-2 dark:text-label-tertiary-dark dark:hover:text-label-secondary-dark ${transitions.default}`}
                  aria-label="Clear input"
                  tabIndex={-1}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                  </svg>
                </button>
              ) : (
                endIcon
              )}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between">
          {displayText && (
            <p
              id={state === "error" ? errorId : helperId}
              className={`text-ios-footnote ${
                state === "error"
                  ? "text-systemRed-500 dark:text-systemRed-400"
                  : state === "success"
                  ? "text-systemGreen-500 dark:text-systemGreen-400"
                  : "text-label-tertiary dark:text-label-tertiary-dark"
              }`}
              role={state === "error" ? "alert" : undefined}
            >
              {displayText}
            </p>
          )}

          {showCounter && (
            <p
              id={counterId}
              className={`ml-auto text-ios-footnote ${
                isOverLimit
                  ? "text-systemRed-500 dark:text-systemRed-400"
                  : "text-label-tertiary dark:text-label-tertiary-dark"
              }`}
              aria-live="polite"
            >
              {characterCount}
              {maxLength && `/${maxLength}`}
            </p>
          )}
        </div>
      </div>
    )
  }
)

Input.displayName = "Input"