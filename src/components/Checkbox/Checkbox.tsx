import React, { forwardRef } from "react"
import { cn } from "../../utils/cn"
import "./checkbox.css"

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string
  size?: "sm" | "md" | "lg"
  intent?: "primary" | "secondary" | "success" | "danger" | "warning"
}

/**
 * Checkbox component for boolean selection.
 * Supports various sizes and intents (colors). Zero external dependencies.
 *
 * @example
 * <Checkbox label="Accept terms" checked={isChecked} onChange={handleChange} />
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, size = "md", intent = "primary", disabled, id, ...props }, ref) => {
    const generatedId = React.useId()
    const inputId = id ?? generatedId

    const iconSize = size === "sm" ? 12 : size === "md" ? 14 : 16

    return (
      <div
        className="checkbox-wrapper"
        data-disabled={disabled ? "true" : undefined}
      >
        <div className="checkbox-control">
          <input
            ref={ref}
            type="checkbox"
            id={inputId}
            disabled={disabled}
            data-size={size}
            data-intent={intent}
            className={cn("checkbox", className)}
            {...props}
          />
          <svg
            className="checkbox-check"
            width={iconSize}
            height={iconSize}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        {label && (
          <label
            htmlFor={inputId}
            className="checkbox-label"
            data-size={size}
          >
            {label}
          </label>
        )}
      </div>
    )
  }
)
Checkbox.displayName = "Checkbox"
