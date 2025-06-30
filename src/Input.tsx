import React from "react"

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Input variant */
  variant?: "filled" | "outlined" | "plain"
  /** Input size */
  size?: "small" | "medium" | "large"
  /** Input state */
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
  /** Full width input */
  fullWidth?: boolean
  /** Additional CSS classes */
  className?: string
  /** Test ID for testing */
  testId?: string
}

/** iOS-inspired input component with various styles and states */
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
      fullWidth = false,
      className = "",
      testId,
      value,
      onChange,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(value || "")
    const [isFocused, setIsFocused] = React.useState(false)

    React.useEffect(() => {
      if (value !== undefined) {
        setInternalValue(value)
      }
    }, [value])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      if (value === undefined) {
        setInternalValue(newValue)
      }
      onChange?.(e)
    }

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
            htmlFor={props.id}
            className="block font-medium text-label-primary text-ios-subhead dark:text-label-primary-dark"
          >
            {label}
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
            {...props}
          />

          {(endIcon || showClear) && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 transform">
              {showClear ? (
                <button
                  type="button"
                  onClick={handleClear}
                  className="text-label-tertiary transition-colors hover:text-label-secondary dark:text-label-tertiary-dark dark:hover:text-label-secondary-dark"
                  aria-label="Clear input"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                  </svg>
                </button>
              ) : (
                endIcon
              )}
            </div>
          )}
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

Input.displayName = "Input"
