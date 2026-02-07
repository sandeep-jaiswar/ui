import React, { forwardRef, useRef, useState } from "react"
// import { useCore } from "../../core"; // unused
import { cn } from "../../utils/cn"

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
 * Slider component for selecting a numeric value from a range.
 * Supports min, max, step, and disabled states.
 * Fully accessible with keyboard navigation.
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
    // const { theme } = useCore(); // theme unused
    const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue)
    const value = controlledValue !== undefined ? controlledValue : uncontrolledValue
    const trackRef = useRef<HTMLDivElement>(null)
    const thumbRef = useRef<HTMLDivElement>(null)

    // Only supporting single thumb for now for simplicity, array structure allows expansion
    const currentValue = value[0]

    const updateValue = (newValue: number[]) => {
      if (controlledValue === undefined) {
        setUncontrolledValue(newValue)
      }
      onValueChange?.(newValue)
    }

    const handlePointerDown = (event: React.PointerEvent) => {
      if (disabled) return
      event.preventDefault()
      thumbRef.current?.focus()
      window.addEventListener("pointermove", handlePointerMove)
      window.addEventListener("pointerup", handlePointerUp)
      updateValueFromPointer(event)
    }

    const handlePointerMove = (event: PointerEvent) => {
      updateValueFromPointer(event)
    }

    const handlePointerUp = () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerup", handlePointerUp)
    }

    const updateValueFromPointer = (event: PointerEvent | React.PointerEvent) => {
      if (!trackRef.current) return
      const rect = trackRef.current.getBoundingClientRect()
      const percentage = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1)
      const rawValue = min + percentage * (max - min)
      // Step logic
      const steppedValue = Math.round((rawValue - min) / step) * step + min
      const clampedValue = Math.min(Math.max(steppedValue, min), max) // Safety clamp

      if (clampedValue !== currentValue) {
        updateValue([clampedValue])
      }
    }

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (disabled) return
      let newValue = currentValue

      switch (event.key) {
        case "ArrowRight":
        case "ArrowUp":
          newValue = Math.min(currentValue + step, max)
          break
        case "ArrowLeft":
        case "ArrowDown":
          newValue = Math.max(currentValue - step, min)
          break
        case "Home":
          newValue = min
          break
        case "End":
          newValue = max
          break
        case "PageUp":
          newValue = Math.min(currentValue + step * 10, max)
          break
        case "PageDown":
          newValue = Math.max(currentValue - step * 10, min)
          break
        default:
          return
      }

      event.preventDefault()
      if (newValue !== currentValue) {
        updateValue([newValue])
      }
    }

    const percentage = ((currentValue - min) / (max - min)) * 100

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex w-full touch-none items-center select-none",
          disabled && "pointer-events-none cursor-not-allowed opacity-50",
          className
        )}
        {...props}
      >
        <div
          ref={trackRef}
          className="bg-secondary relative h-2 w-full grow cursor-pointer overflow-hidden rounded-full"
          onPointerDown={handlePointerDown}
        >
          <div className="bg-primary absolute h-full" style={{ width: `${percentage}%` }} />
        </div>

        {/* Thumb */}
        <div
          ref={thumbRef}
          role="slider"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={currentValue}
          aria-orientation="horizontal"
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : 0}
          onKeyDown={handleKeyDown}
          className="border-primary ring-offset-background focus-visible:ring-ring bg-background absolute h-5 w-5 cursor-grab rounded-full border-2 shadow-md transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none active:cursor-grabbing disabled:pointer-events-none disabled:opacity-50"
          style={{ left: `calc(${percentage}% - 10px)` }} // Center the thumb
          onPointerDown={handlePointerDown}
        />
        {/* Hidden input for form submission if name is provided */}
        {name && <input type="hidden" name={name} value={currentValue} />}
      </div>
    )
  }
)
Slider.displayName = "Slider"
