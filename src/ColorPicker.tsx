import React from "react"

export interface ColorPickerProps {
  /** Selected color */
  value?: string
  /** Default selected color */
  defaultValue?: string
  /** Predefined color palette */
  colors?: string[]
  /** Is the color picker disabled? */
  disabled?: boolean
  /** Color picker size */
  size?: "small" | "medium" | "large"
  /** Label text */
  label?: string
  /** Helper text */
  helperText?: string
  /** Full width color picker */
  fullWidth?: boolean
  /** Change handler */
  onChange?: (color: string) => void
  /** Additional CSS classes */
  className?: string
  /** Test ID for testing */
  testId?: string
}

/** iOS-inspired color picker component */
export const ColorPicker = React.forwardRef<HTMLDivElement, ColorPickerProps>(
  (
    {
      value,
      defaultValue = "#007AFF",
      colors = [
        "#007AFF",
        "#34C759",
        "#FF9500",
        "#FF3B30",
        "#AF52DE",
        "#5856D6",
        "#FF2D92",
        "#00C7BE",
        "#8E8E93",
        "#000000",
      ],
      disabled = false,
      size = "medium",
      label,
      helperText,
      fullWidth = false,
      onChange,
      testId,
      ...props
    },
    ref
  ) => {
    const [selectedColor, setSelectedColor] = React.useState(value || defaultValue)
    const [isOpen, setIsOpen] = React.useState(false)
    const [customColor, setCustomColor] = React.useState(selectedColor)

    React.useEffect(() => {
      if (value !== undefined) {
        setSelectedColor(value)
        setCustomColor(value)
      }
    }, [value])

    const handleColorSelect = (color: string) => {
      if (value === undefined) {
        setSelectedColor(color)
      }
      setCustomColor(color)
      onChange?.(color)
      setIsOpen(false)
    }

    const handleCustomColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newColor = e.target.value
      setCustomColor(newColor)
      handleColorSelect(newColor)
    }

    const sizeStyles = {
      small: "w-8 h-8",
      medium: "w-10 h-10",
      large: "w-12 h-12",
    }

    const colorSwatchSize = {
      small: "w-6 h-6",
      medium: "w-8 h-8",
      large: "w-10 h-10",
    }

    return (
      <div className={`${fullWidth ? "w-full" : ""} relative space-y-1`} ref={ref} data-testid={testId} {...props}>
        {label && (
          <label className="block font-medium text-label-primary text-ios-subhead dark:text-label-primary-dark">
            {label}
          </label>
        )}

        <button
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          className={` ${
            sizeStyles[size]
          } cursor-pointer rounded-ios border-2 border-separator-opaque transition-all duration-200 ease-ios dark:border-separator-opaque-dark ${
            disabled ? "cursor-not-allowed opacity-50" : "hover:scale-105 active:scale-95"
          } `}
          style={{ backgroundColor: selectedColor }}
          aria-label={`Selected color: ${selectedColor}`}
        />

        {isOpen && (
          <div className="absolute left-0 top-full z-popover mt-2 min-w-[280px] rounded-ios-lg border border-separator-opaque bg-background-primary p-4 shadow-modal dark:border-separator-opaque-dark dark:bg-background-secondary-dark">
            <div className="space-y-4">
              <h3 className="font-semibold text-label-primary text-ios-headline dark:text-label-primary-dark">
                Choose Color
              </h3>

              {/* Predefined Colors */}
              <div>
                <h4 className="mb-2 font-medium text-label-secondary text-ios-subhead dark:text-label-secondary-dark">
                  Presets
                </h4>
                <div className="grid grid-cols-5 gap-2">
                  {colors.map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => handleColorSelect(color)}
                      className={` ${colorSwatchSize[size]} rounded-ios border-2 transition-all duration-200 ease-ios ${
                        selectedColor === color
                          ? "scale-110 border-systemBlue-500"
                          : "border-separator-opaque hover:scale-105 dark:border-separator-opaque-dark"
                      } `}
                      style={{ backgroundColor: color }}
                      aria-label={`Select color ${color}`}
                    />
                  ))}
                </div>
              </div>

              {/* Custom Color */}
              <div>
                <h4 className="mb-2 font-medium text-label-secondary text-ios-subhead dark:text-label-secondary-dark">
                  Custom
                </h4>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={customColor}
                    onChange={handleCustomColorChange}
                    className="h-8 w-12 cursor-pointer rounded-ios border border-separator-opaque dark:border-separator-opaque-dark"
                  />
                  <input
                    type="text"
                    value={customColor}
                    onChange={(e) => setCustomColor(e.target.value)}
                    onBlur={() => handleColorSelect(customColor)}
                    className="flex-1 rounded-ios border border-separator-opaque bg-fill-secondary px-3 py-2 text-label-primary text-ios-footnote dark:border-separator-opaque-dark dark:bg-fill-secondary-dark dark:text-label-primary-dark"
                    placeholder="#000000"
                  />
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 rounded-ios px-4 py-2 text-label-secondary transition-colors text-ios-body hover:bg-fill-quaternary dark:text-label-secondary-dark dark:hover:bg-fill-quaternary-dark"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => handleColorSelect(customColor)}
                  className="flex-1 rounded-ios px-4 py-2 text-systemBlue-500 transition-colors text-ios-body hover:bg-systemBlue-50 dark:text-systemBlue-400 dark:hover:bg-systemBlue-900/20"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}

        {helperText && (
          <p className="text-label-tertiary text-ios-footnote dark:text-label-tertiary-dark">{helperText}</p>
        )}
      </div>
    )
  }
)

ColorPicker.displayName = "ColorPicker"
