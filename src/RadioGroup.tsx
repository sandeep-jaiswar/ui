import React from "react"
import { Radio, RadioProps } from "./Radio"

/**
 * Props for the RadioGroup component
 */
export interface RadioGroupProps {
  /** Selected value */
  value?: string
  /** Default selected value for uncontrolled component */
  defaultValue?: string
  /** Radio group name */
  name: string
  /** Change handler */
  onChange?: (value: string) => void
  /** Radio options */
  options: Array<{
    value: string
    label: string
    disabled?: boolean
  }>
  /** Radio size */
  size?: RadioProps["size"]
  /** Radio color */
  color?: RadioProps["color"]
  /** Layout direction */
  direction?: "horizontal" | "vertical"
  /** Is the entire group disabled? */
  disabled?: boolean
  /** Additional CSS classes */
  className?: string
  /** Test ID for testing */
  testId?: string
}

/**
 * iOS-inspired radio group component for managing multiple radio buttons.
 * 
 * Features:
 * - Controlled and uncontrolled modes
 * - Horizontal or vertical layout
 * - Consistent styling across radio buttons
 * - Group-level disabled state
 * - Proper accessibility with role="radiogroup"
 * 
 * @example
 * ```tsx
 * <RadioGroup
 *   name="fruits"
 *   value={selectedFruit}
 *   onChange={setSelectedFruit}
 *   options={[
 *     { value: "apple", label: "Apple" },
 *     { value: "banana", label: "Banana" },
 *     { value: "orange", label: "Orange" }
 *   ]}
 * />
 * ```
 */
export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      value,
      defaultValue,
      name,
      onChange,
      options,
      size = "medium",
      color = "blue",
      direction = "vertical",
      disabled = false,
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
     * Handles radio selection change
     */
    const handleChange = (newValue: string) => {
      if (disabled) return

      if (value === undefined) {
        setSelectedValue(newValue)
      }
      onChange?.(newValue)
    }

    const directionStyles = {
      horizontal: "flex flex-row gap-6",
      vertical: "flex flex-col gap-3",
    }

    return (
      <div
        ref={ref}
        className={`${directionStyles[direction]} ${className}`}
        role="radiogroup"
        data-testid={testId}
        {...props}
      >
        {options.map((option) => (
          <Radio
            key={option.value}
            value={option.value}
            name={name}
            checked={selectedValue === option.value}
            disabled={disabled || option.disabled}
            size={size}
            color={color}
            label={option.label}
            onChange={handleChange}
          />
        ))}
      </div>
    )
  }
)

RadioGroup.displayName = "RadioGroup"