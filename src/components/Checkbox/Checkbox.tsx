import React, { forwardRef } from "react"

import { cn } from "../../utils/cn"

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string
  size?: "sm" | "md" | "lg"
  intent?: "primary" | "secondary" | "success" | "danger" | "warning"
}

/**
 * Checkbox component for boolean selection.
 * Supports various sizes and intents (colors).
 *
 * @example
 * <Checkbox label="Accept terms" checked={isChecked} onChange={handleChange} />
 *
 * @example
 * <Checkbox intent="success" defaultChecked />
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, size = "md", intent = "primary", disabled, id, ...props }, ref) => {
    const generatedId = React.useId()
    const inputId = id || generatedId

    const sizeClasses = {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
    }

    const intentClasses = {
      primary: "text-primary focus:ring-primary border-input",
      secondary: "text-secondary-foreground focus:ring-secondary border-input",
      success: "text-green-600 focus:ring-green-500 border-input",
      danger: "text-destructive focus:ring-destructive border-input",
      warning: "text-amber-600 focus:ring-amber-500 border-input",
    }

    return (
      <div className={cn("flex items-center space-x-2", disabled && "pointer-events-none")}>
        <div className="relative flex items-center">
          <input
            ref={ref}
            type="checkbox"
            id={inputId}
            disabled={disabled}
            onClick={(e) => disabled && e.preventDefault()}
            className={cn(
              "peer bg-background appearance-none rounded border transition-all duration-200 checked:border-transparent checked:bg-current focus:ring-2 focus:ring-offset-1 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
              disabled && "pointer-events-none",
              sizeClasses[size],
              intentClasses[intent],
              className
            )}
            {...props}
          />
          {/* Custom Checkmark SVG driven by peer-checked */}
          <svg
            className={cn(
              "text-primary-foreground pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-200 peer-checked:opacity-100",
              size === "sm" ? "h-3 w-3" : size === "md" ? "h-3.5 w-3.5" : "h-4 w-4"
            )}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              "text-foreground cursor-pointer text-sm font-medium select-none",
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
Checkbox.displayName = "Checkbox"
