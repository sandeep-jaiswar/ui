import React, { forwardRef } from "react"
import { cn } from "../../utils/cn"
import "./switch.css"

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string
  size?: "sm" | "md" | "lg"
  intent?: "primary" | "secondary" | "success" | "danger" | "warning"
}

/**
 * Switch component for toggling between two states.
 * Uses a hidden native checkbox + styled track/thumb.
 * Zero external dependencies.
 *
 * @example
 * <Switch label="Airplane Mode" checked={isOn} onChange={toggle} />
 */
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, size = "md", intent = "primary", disabled, id, ...props }, ref) => {
    const generatedId = React.useId()
    const inputId = id ?? generatedId

    return (
      <div className={cn("switch-wrapper", className)} data-disabled={disabled ? "true" : undefined}>
        <label className="switch-label-el" htmlFor={inputId}>
          <input
            ref={ref}
            type="checkbox"
            role="switch"
            id={inputId}
            disabled={disabled}
            data-intent={intent}
            className="switch-input"
            {...props}
          />
          <div className="switch-track" data-size={size}>
            <span className="switch-thumb" />
          </div>
        </label>

        {label && (
          <label htmlFor={inputId} className="switch-text-label">
            {label}
          </label>
        )}
      </div>
    )
  }
)
Switch.displayName = "Switch"
