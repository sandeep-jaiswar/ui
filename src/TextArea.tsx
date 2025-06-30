import React from "react"

export interface TextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> {
  /** TextArea variant */
  variant?: "filled" | "outlined" | "plain"
  /** TextArea size */
  size?: "small" | "medium" | "large"
  /** TextArea state */
  state?: "default" | "error" | "success"
  /** Label text */
  label?: string
  /** Helper text */
  helperText?: string
  /** Error text (overrides helperText when state is error) */
  errorText?: string
  /** Show character count */
  showCount?: boolean
  /** Maximum character count */
  maxLength?: number
  /** Auto resize height */
  autoResize?: boolean
  /** Full width textarea */
  fullWidth?: boolean
  /** Additional CSS classes */
  className?: string
  /** Test ID for testing */
  testId?: string
}

/** iOS-inspired textarea component with auto-resize and character count */
export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      variant = "filled",
      size = "medium",
      state = "default",
      label,
      helperText,
      errorText,
      showCount = false,
      maxLength,
      autoResize = false,
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
    const textareaRef = React.useRef<HTMLTextAreaElement>(null)

    React.useEffect(() => {
      if (value !== undefined) {
        setInternalValue(value)
      }
    }, [value])

    React.useEffect(() => {
      if (autoResize && textareaRef.current) {
        const textarea = textareaRef.current
        textarea.style.height = "auto"
        textarea.style.height = `${textarea.scrollHeight}px`
      }
    }, [internalValue, autoResize])

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value
      if (value === undefined) {
        setInternalValue(newValue)
      }
      onChange?.(e)
    }

    const currentValue = value !== undefined ? value : internalValue
    const characterCount = typeof currentValue === "string" ? currentValue.length : 0
    const displayText = state === "error" && errorText ? errorText : helperText

    const baseStyles = "transition-all duration-200 ease-ios focus:outline-none resize-none"

    const variantStyles = {
      filled:
        "bg-fill-secondary dark:bg-fill-secondary-dark border border-transparent focus:border-systemBlue-500 focus:bg-background-primary dark:focus:bg-background-tertiary-dark",
      outlined:
        "bg-transparent border border-separator-opaque dark:border-separator-opaque-dark focus:border-systemBlue-500",
      plain: "bg-transparent border-none focus:bg-fill-quaternary dark:focus:bg-fill-quaternary-dark",
    }

    const sizeStyles = {
      small: "px-3 py-2 text-ios-footnote min-h-[80px]",
      medium: "px-4 py-3 text-ios-body min-h-[100px]",
      large: "px-5 py-4 text-ios-callout min-h-[120px]",
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

    const textareaClasses = [
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      stateStyles[state],
      disabledStyles,
      widthStyles,
      "rounded-ios",
      "text-label-primary dark:text-label-primary-dark",
      "placeholder:text-label-tertiary dark:placeholder:text-label-tertiary-dark",
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

        <textarea
          ref={(node) => {
            textareaRef.current = node
            if (typeof ref === "function") {
              ref(node)
            } else if (ref) {
              ref.current = node
            }
          }}
          className={textareaClasses}
          value={currentValue}
          onChange={handleChange}
          maxLength={maxLength}
          data-testid={testId}
          {...props}
        />

        <div className="flex items-center justify-between">
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

          {showCount && (
            <p
              className={`ml-auto text-ios-footnote ${
                maxLength && characterCount > maxLength
                  ? "text-systemRed-500 dark:text-systemRed-400"
                  : "text-label-tertiary dark:text-label-tertiary-dark"
              }`}
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

TextArea.displayName = "TextArea"
