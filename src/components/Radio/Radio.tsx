import React, { createContext, useContext, forwardRef } from "react"
import { cn } from "../../utils/cn"
import "./radio.css"

interface RadioGroupContextType {
  name?: string
  value?: string
  onChange?: (value: string) => void
  disabled?: boolean
  intent?: "primary" | "secondary" | "success" | "danger" | "warning"
}

const RadioGroupContext = createContext<RadioGroupContextType | undefined>(undefined)

export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  disabled?: boolean
  name?: string
  intent?: RadioGroupContextType["intent"]
}

/**
 * RadioGroup for exclusive selection.
 * Manages the shared state for its Radio children. Zero external dependencies.
 *
 * @example
 * <RadioGroup value={value} onValueChange={setValue}>
 *   <Radio value="a" label="Option A" />
 *   <Radio value="b" label="Option B" />
 * </RadioGroup>
 */
export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      className,
      onValueChange,
      defaultValue,
      value: controlledValue,
      name,
      disabled,
      intent = "primary",
      children,
      ...props
    },
    ref
  ) => {
    const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue)
    const value = controlledValue !== undefined ? controlledValue : uncontrolledValue

    const handleChange = (newValue: string) => {
      if (controlledValue === undefined) setUncontrolledValue(newValue)
      onValueChange?.(newValue)
    }

    return (
      <RadioGroupContext.Provider value={{ name, value, onChange: handleChange, disabled, intent }}>
        <div ref={ref} role="radiogroup" className={cn("radio-group", className)} {...props}>
          {children}
        </div>
      </RadioGroupContext.Provider>
    )
  }
)
RadioGroup.displayName = "RadioGroup"

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string
  label?: string
}

/**
 * Radio item. Must be used within a RadioGroup.
 */
export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, value, label, disabled, id, ...props }, ref) => {
    const ctx = useContext(RadioGroupContext)
    const generatedId = React.useId()
    const inputId = id ?? generatedId

    const isChecked = ctx?.value === value
    const isDisabled = disabled ?? ctx?.disabled
    const intent = ctx?.intent ?? "primary"

    return (
      <div className="radio-item">
        <div className="radio-control">
          <input
            ref={ref}
            type="radio"
            id={inputId}
            name={ctx?.name}
            value={value}
            checked={isChecked}
            disabled={isDisabled}
            data-intent={intent}
            onChange={() => ctx?.onChange?.(value)}
            className={cn("radio", className)}
            {...props}
          />
          <span className="radio-dot" aria-hidden="true" />
        </div>

        {label && (
          <label htmlFor={inputId} className="radio-label">
            {label}
          </label>
        )}
      </div>
    )
  }
)
Radio.displayName = "Radio"
