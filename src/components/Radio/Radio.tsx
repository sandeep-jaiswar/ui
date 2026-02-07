import React, { createContext, useContext, forwardRef } from "react"
// import { useCore } from "../../core"; // unused
import { cn } from "../../utils/cn"

// --- Radio Group Context ---
interface RadioGroupContextType {
  name?: string
  value?: string
  onChange?: (value: string) => void
  disabled?: boolean
  intent?: "primary" | "secondary" | "success" | "danger" | "warning"
}

const RadioGroupContext = createContext<RadioGroupContextType | undefined>(undefined)

// --- Radio Group Component ---
export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  disabled?: boolean
  name?: string
  intent?: RadioGroupContextType["intent"]
}

/**
 * RadioGroup component for exclusive selection.
 * Manages the state of its Radio children.
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
      if (controlledValue === undefined) {
        setUncontrolledValue(newValue)
      }
      onValueChange?.(newValue)
    }

    return (
      <RadioGroupContext.Provider value={{ name, value, onChange: handleChange, disabled, intent }}>
        <div ref={ref} className={cn("grid gap-2", className)} role="radiogroup" {...props}>
          {children}
        </div>
      </RadioGroupContext.Provider>
    )
  }
)
RadioGroup.displayName = "RadioGroup"

// --- Radio Item Component ---
export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string
  label?: string
}

/**
 * Radio component representing a single option.
 * Must be used within a RadioGroup.
 */
export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, value, label, disabled, id, ...props }, ref) => {
    const context = useContext(RadioGroupContext)
    const generatedId = React.useId()
    const inputId = id || generatedId

    // Merge context props
    const isChecked = context?.value === value
    const isDisabled = disabled || context?.disabled
    const name = context?.name
    const intent = context?.intent || "primary"

    const intentClasses = {
      primary: "text-primary focus:ring-primary border-input",
      secondary: "text-secondary-foreground focus:ring-secondary border-input",
      success: "text-green-600 focus:ring-green-500 border-input",
      danger: "text-destructive focus:ring-destructive border-input",
      warning: "text-amber-600 focus:ring-amber-500 border-input",
    }

    return (
      <div className="flex items-center space-x-2">
        <div className="relative flex items-center">
          <input
            ref={ref}
            type="radio"
            id={inputId}
            name={name}
            value={value}
            checked={isChecked}
            disabled={isDisabled}
            onChange={() => context?.onChange?.(value)}
            className={cn(
              "peer bg-background h-4 w-4 appearance-none rounded-full border transition-all duration-200 checked:border-transparent checked:bg-current focus:ring-2 focus:ring-offset-1 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
              intentClasses[intent],
              className
            )}
            {...props}
          />
          {/* Custom dot for checked state */}
          <span className="bg-background pointer-events-none absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 transition-opacity peer-checked:opacity-100"></span>
        </div>

        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              "text-foreground cursor-pointer text-sm font-medium select-none",
              isDisabled && "cursor-not-allowed opacity-50"
            )}
          >
            {label}
          </label>
        )}
      </div>
    )
  }
)
Radio.displayName = "Radio"
