import React from "react"

/**
 * Props for the Slider component
 */
export interface SliderProps {
  /** Slider value */
  value?: number
  /** Default value for uncontrolled component */
  defaultValue?: number
  /** Minimum value */
  min?: number
  /** Maximum value */
  max?: number
  /** Step increment */
  step?: number
  /** Is the slider disabled? */
  disabled?: boolean
  /** Slider color */
  color?: "blue" | "green" | "orange" | "red" | "purple"
  /** Show value label */
  showValue?: boolean
  /** Custom value formatter */
  formatValue?: (value: number) => string
  /** Change handler */
  onChange?: (value: number) => void
  /** Slider label */
  label?: string
  /** Additional CSS classes */
  className?: string
  /** Test ID for testing */
  testId?: string
}

/**
 * iOS-inspired slider component for selecting numeric values.
 * 
 * Features:
 * - Min/max range with step control
 * - Multiple color options
 * - Value display with custom formatting
 * - Smooth thumb movement
 * - Proper accessibility attributes
 * - Controlled and uncontrolled modes
 * 
 * @example
 * ```tsx
 * // Basic slider
 * <Slider
 *   label="Volume"
 *   value={volume}
 *   onChange={setVolume}
 *   showValue
 * />
 * 
 * // Custom range and formatting
 * <Slider
 *   label="Temperature"
 *   min={-10}
 *   max={40}
 *   value={temperature}
 *   onChange={setTemperature}
 *   formatValue={(value) => `${value}°C`}
 *   color="orange"
 * />
 * ```
 */
export const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      value,
      defaultValue = 50,
      min = 0,
      max = 100,
      step = 1,
      disabled = false,
      color = "blue",
      showValue = false,
      formatValue,
      onChange,
      label,
      className = "",
      testId,
      ...props
    },
    ref
  ) => {
    const [sliderValue, setSliderValue] = React.useState(value ?? defaultValue)

    React.useEffect(() => {
      if (value !== undefined) {
        setSliderValue(value)
      }
    }, [value])

    /**
     * Handles slider value changes
     */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return

      const newValue = Number(e.target.value)
      if (value === undefined) {
        setSliderValue(newValue)
      }
      onChange?.(newValue)
    }

    const percentage = ((sliderValue - min) / (max - min)) * 100

    const colorStyles = {
      blue: "accent-systemBlue-500",
      green: "accent-systemGreen-500",
      orange: "accent-systemOrange-500",
      red: "accent-systemRed-500",
      purple: "accent-systemPurple-500",
    }

    const displayValue = formatValue ? formatValue(sliderValue) : sliderValue.toString()

    return (
      <div className={`space-y-2 ${className}`}>
        {(label || showValue) && (
          <div className="flex items-center justify-between">
            {label && (
              <label className="font-medium text-label-primary text-ios-subhead dark:text-label-primary-dark">
                {label}
              </label>
            )}
            {showValue && (
              <span className="text-label-secondary text-ios-subhead dark:text-label-secondary-dark">
                {displayValue}
              </span>
            )}
          </div>
        )}

        <div className="relative">
          <input
            ref={ref}
            type="range"
            min={min}
            max={max}
            step={step}
            value={sliderValue}
            disabled={disabled}
            onChange={handleChange}
            className={`h-2 w-full cursor-pointer appearance-none rounded-full bg-fill-tertiary focus:outline-none focus-visible:ring-2 focus-visible:ring-systemBlue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-fill-tertiary-dark ${colorStyles[color]} slider-thumb:appearance-none slider-thumb:w-5 slider-thumb:h-5 slider-thumb:rounded-full slider-thumb:bg-white slider-thumb:shadow-ios-2 slider-thumb:border-2 slider-thumb:border-white slider-thumb:cursor-pointer slider-thumb:transition-all slider-thumb:duration-200 hover:slider-thumb:scale-110 active:slider-thumb:scale-95`}
            style={
              {
                background: `linear-gradient(to right, var(--slider-color) 0%, var(--slider-color) ${percentage}%, rgb(var(--fill-tertiary)) ${percentage}%, rgb(var(--fill-tertiary)) 100%)`,
              } as React.CSSProperties
            }
            data-testid={testId}
            {...props}
          />
        </div>

        <div className="flex justify-between text-label-tertiary text-ios-caption-1 dark:text-label-tertiary-dark">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      </div>
    )
  }
)

Slider.displayName = "Slider"