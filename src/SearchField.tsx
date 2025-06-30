import React from "react"
import { Icon } from "./Icon"

export interface SearchFieldProps {
  /** Search value */
  value?: string
  /** Default search value */
  defaultValue?: string
  /** Placeholder text */
  placeholder?: string
  /** Is the search field disabled? */
  disabled?: boolean
  /** Search field size */
  size?: "small" | "medium" | "large"
  /** Show cancel button */
  showCancel?: boolean
  /** Full width search field */
  fullWidth?: boolean
  /** Change handler */
  onChange?: (value: string) => void
  /** Search handler */
  onSearch?: (value: string) => void
  /** Cancel handler */
  onCancel?: () => void
  /** Additional CSS classes */
  className?: string
  /** Test ID for testing */
  testId?: string
}

/** iOS-inspired search field component with search icon and cancel functionality */
export const SearchField = React.forwardRef<HTMLInputElement, SearchFieldProps>(
  (
    {
      value,
      defaultValue = "",
      placeholder = "Search",
      disabled = false,
      size = "medium",
      showCancel = false,
      fullWidth = false,
      onChange,
      onSearch,
      onCancel,
      className = "",
      testId,
      ...props
    },
    ref
  ) => {
    const [searchValue, setSearchValue] = React.useState(value ?? defaultValue)
    const [isFocused, setIsFocused] = React.useState(false)

    React.useEffect(() => {
      if (value !== undefined) {
        setSearchValue(value)
      }
    }, [value])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      if (value === undefined) {
        setSearchValue(newValue)
      }
      onChange?.(newValue)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        onSearch?.(searchValue)
      }
    }

    const handleClear = () => {
      const newValue = ""
      if (value === undefined) {
        setSearchValue(newValue)
      }
      onChange?.(newValue)
    }

    const handleCancel = () => {
      handleClear()
      onCancel?.()
    }

    const currentValue = value !== undefined ? value : searchValue
    const showClear = currentValue && !disabled
    const showCancelButton = showCancel && (isFocused || currentValue)

    const sizeStyles = {
      small: "px-8 py-2 text-ios-footnote min-h-[32px]",
      medium: "px-10 py-3 text-ios-body min-h-[44px]",
      large: "px-12 py-4 text-ios-callout min-h-[52px]",
    }

    const baseStyles =
      "bg-fill-secondary dark:bg-fill-secondary-dark border border-transparent focus:border-systemBlue-500 focus:bg-background-primary dark:focus:bg-background-tertiary-dark transition-all duration-200 ease-ios focus:outline-none rounded-ios text-label-primary dark:text-label-primary-dark placeholder:text-label-tertiary dark:placeholder:text-label-tertiary-dark"

    const disabledStyles = disabled
      ? "opacity-50 cursor-not-allowed bg-fill-quaternary dark:bg-fill-quaternary-dark"
      : ""

    const widthStyles = fullWidth ? "w-full" : ""

    const inputClasses = [baseStyles, sizeStyles[size], disabledStyles, widthStyles, showClear ? "pr-8" : "", className]
      .filter(Boolean)
      .join(" ")

    const iconSize = size === "small" ? 16 : size === "large" ? 24 : 20

    return (
      <div className={`flex items-center gap-2 ${fullWidth ? "w-full" : ""}`}>
        <div className="relative flex-1">
          {/* Search Icon */}
          <div className="absolute left-3 top-1/2 -translate-y-1/2 transform">
            <Icon name="search" size={iconSize} color="tertiary" />
          </div>

          <input
            ref={ref}
            type="text"
            className={inputClasses}
            value={currentValue}
            placeholder={placeholder}
            disabled={disabled}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            data-testid={testId}
            {...props}
          />

          {/* Clear Button */}
          {showClear && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-3 top-1/2 -translate-y-1/2 transform text-label-tertiary transition-colors hover:text-label-secondary dark:text-label-tertiary-dark dark:hover:text-label-secondary-dark"
              aria-label="Clear search"
            >
              <Icon name="close" size={iconSize} />
            </button>
          )}
        </div>

        {/* Cancel Button */}
        {showCancelButton && (
          <button
            type="button"
            onClick={handleCancel}
            className="px-2 text-systemBlue-500 transition-colors text-ios-body hover:text-systemBlue-600 dark:text-systemBlue-400 dark:hover:text-systemBlue-300"
          >
            Cancel
          </button>
        )}
      </div>
    )
  }
)

SearchField.displayName = "SearchField"
