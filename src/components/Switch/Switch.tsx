import React, { forwardRef } from "react"
// import { useCore } from "../../core"; // unused
import { cn } from "../../utils/cn"

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string
  size?: "sm" | "md" | "lg"
  intent?: "primary" | "secondary" | "success" | "danger" | "warning"
}

/**
 * Switch component for toggling between two states.
 * Supports various sizes and intents.
 *
 * @example
 * <Switch label="Airplane Mode" checked={isOn} onChange={toggle} />
 *
 * @example
 * <Switch size="lg" intent="success" />
 */
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, size = "md", intent = "primary", disabled, id, ...props }, ref) => {
    // const { theme } = useCore(); // theme unused
    const generatedId = React.useId()
    const inputId = id || generatedId

    const sizeClasses = {
      sm: { track: "w-8 h-4 peer-checked:[&>div]:translate-x-4.5", thumb: "h-3 w-3 translate-x-0.5" },
      md: { track: "w-11 h-6 peer-checked:[&>div]:translate-x-5.5", thumb: "h-5 w-5 translate-x-0.5" },
      lg: { track: "w-14 h-8 peer-checked:[&>div]:translate-x-6.5", thumb: "h-7 w-7 translate-x-0.5" },
    }

    const intentClasses = {
      primary: "peer-checked:bg-primary peer-focus:ring-primary",
      secondary: "peer-checked:bg-secondary peer-focus:ring-secondary",
      success: "peer-checked:bg-green-600 peer-focus:ring-green-500",
      danger: "peer-checked:bg-destructive peer-focus:ring-destructive",
      warning: "peer-checked:bg-amber-600 peer-focus:ring-amber-500",
    }

    return (
      <div className={cn("flex items-center space-x-3", disabled && "pointer-events-none")}>
        <label htmlFor={inputId} className="relative inline-flex cursor-pointer items-center">
          <input
            ref={ref}
            type="checkbox"
            role="switch"
            id={inputId}
            className={cn("peer sr-only", disabled && "pointer-events-none")}
            disabled={disabled}
            onClick={(e) => disabled && e.preventDefault()}
            {...props}
          />
          <div
            className={cn(
              "rounded-full bg-input transition-colors duration-200 peer-focus:ring-2 peer-focus:ring-offset-2 peer-focus:outline-none",
              sizeClasses[size].track,
              intentClasses[intent],
              disabled && "cursor-not-allowed opacity-50",
              className
            )}
          >
            <div
              className={cn(
                "absolute top-0.5 rounded-full bg-background shadow ring-0 transition-all duration-200",
                sizeClasses[size].thumb
              )}
            />
          </div>
        </label>

        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              "cursor-pointer text-sm font-medium text-foreground select-none",
              disabled && "pointer-events-none cursor-not-allowed opacity-50",
              size === "lg" && "text-base",
              size === "sm" && "text-xs"
            )}
          >
            {label}
          </label>
        )}
      </div>
    )
  }
)
Switch.displayName = "Switch"
