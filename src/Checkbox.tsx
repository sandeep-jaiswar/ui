import React from "react"

export interface CheckboxProps {
  /** Is the checkbox checked? */
  checked?: boolean
  /** Default checked state for uncontrolled component */
  defaultChecked?: boolean
  /** Is the checkbox indeterminate? */
  indeterminate?: boolean
  /** Checkbox size */
  size?: "small" | "medium" | "large"
  /** Is the checkbox disabled? */
  disabled?: boolean
  /** Checkbox color when checked */
  color?: "blue" | "green" | "orange" | "red" | "purple"
  /** Change handler */
  onChange?: (checked: boolean) => void
  /** Checkbox label */
  label?: string
  /** Label position */
  labelPosition?: "left" | "right"
  /** Additional CSS classes */
  className?: string
  /** Test ID for testing */
  testId?: string
}

/** iOS-inspired checkbox component following Apple's design patterns */
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
      className = "",
      testId,
      ...props
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = React.useState(checked ?? defaultChecked)
    const inputRef = React.useRef<HTMLInputElement>(null)

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return

      const newChecked = e.target.checked
      if (checked === undefined) {
        setIsChecked(newChecked)
      }
      onChange?.(newChecked)
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
      transition-all duration-200 ease-ios cursor-pointer
      focus:outline-none focus-visible:ring-2 focus-visible:ring-systemBlue-500 focus-visible:ring-offset-2
      checked:bg-systemBlue-500 checked:border-systemBlue-500
      relative
    `

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
          type="checkbox"
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
          className={`${baseStyles} ${sizeStyles[size]} ${colorStyles[color]} ${disabledStyles} ${className}`.trim()}
          data-testid={testId}
          {...props}
        />
        {(isChecked || indeterminate) && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            {indeterminate ? (
              <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
              </svg>
            ) : (
              <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
              </svg>
            )}
          </div>
        )}
      </div>
    )

    if (!label) {
      return checkboxElement
    }

    return (
      <label
        className={`flex cursor-pointer items-center gap-3 ${labelPosition === "left" ? "flex-row-reverse" : ""} ${
          disabled ? "cursor-not-allowed" : ""
        }`}
      >
        {checkboxElement}
        <span className="select-none text-label-primary text-ios-body dark:text-label-primary-dark">{label}</span>
      </label>
    )
  }
)

Checkbox.displayName = "Checkbox"
