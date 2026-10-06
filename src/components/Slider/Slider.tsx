import React, { forwardRef, useRef, useState } from "react"
import { cn } from "../../utils/cn"
import "./slider.css"

export interface SliderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "defaultValue" | "onInput"> {
  min?: number
  max?: number
  step?: number
  defaultValue?: number[]
  value?: number[]
  onValueChange?: (value: number[]) => void
  disabled?: boolean
  name?: string
}

/**
 * Slider for selecting a numeric value from a range.
 * Supports keyboard navigation and pointer drag. Zero external dependencies.
 *
 * @example
 * <Slider defaultValue={[50]} min={0} max={100} />
 */
export const Slider = forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      className,
      min = 0,
      max = 100,
      step = 1,
      defaultValue = [0],
      value: controlledValue,
      onValueChange,
      disabled,
      name,
      ...props
    },
    ref
  ) => {
    const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue)
    const value = controlledValue !== undefined ? controlledValue : uncontrolledValue
    const trackRef = useRef<HTMLDivElement>(null)
    const currentValue = value[0]

    const updateValue = (newValue: number[]) => {
      if (controlledValue === undefined) setUncontrolledValue(newValue)
      onValueChange?.(newValue)
    }

    const valueFromPointer = (event: PointerEvent | React.PointerEvent) => {
      if (!trackRef.current) return
      const rect = trackRef.current.getBoundingClientRect()
      const pct = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1)
      const raw = min + pct * (max - min)
      const stepped = Math.round((raw - min) / step) * step + min
      return Math.min(Math.max(stepped, min), max)
    }

    const handlePointerDown = (event: React.PointerEvent) => {
      if (disabled) return
      event.preventDefault()
      const newVal = valueFromPointer(event)
      if (newVal !== undefined) updateValue([newVal])

      const onMove = (e: PointerEvent) => {
        const v = valueFromPointer(e)
        if (v !== undefined) updateValue([v])
      }
      const onUp = () => {
        window.removeEventListener("pointermove", onMove)
        window.removeEventListener("pointerup", onUp)
      }
      window.addEventListener("pointermove", onMove)
      window.addEventListener("pointerup", onUp)
    }

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (disabled) return
      let newVal = currentValue
      switch (event.key) {
        case "ArrowRight":
        case "ArrowUp":
          newVal = Math.min(currentValue + step, max)
          break
        case "ArrowLeft":
        case "ArrowDown":
          newVal = Math.max(currentValue - step, min)
          break
        case "Home":
          newVal = min
          break
        case "End":
          newVal = max
          break
        case "PageUp":
          newVal = Math.min(currentValue + step * 10, max)
          break
        case "PageDown":
          newVal = Math.max(currentValue - step * 10, min)
          break
        default:
          return
      }
      event.preventDefault()
      if (newVal !== currentValue) updateValue([newVal])
    }

    const percentage = ((currentValue - min) / (max - min)) * 100

    return (
      <div ref={ref} data-disabled={disabled ? "true" : undefined} className={cn("slider", className)} {...props}>
        <div ref={trackRef} className="slider__track" onPointerDown={handlePointerDown}>
          <div className="slider__range" style={{ width: `${percentage}%` }} />
        </div>

        <div
          role="slider"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={currentValue}
          aria-orientation="horizontal"
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : 0}
          onKeyDown={handleKeyDown}
          onPointerDown={handlePointerDown}
          className="slider__thumb"
          style={{ left: `calc(${percentage}% - 0.625rem)` }}
        />

        {name && <input type="hidden" name={name} value={currentValue} />}
      </div>
    )
  }
)
Slider.displayName = "Slider"
