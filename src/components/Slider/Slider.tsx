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
}

/**
 * Slider component for selecting a numeric value from a range.
 * Supports min, max, step, and disabled states.
 *
 * @example
 * <Slider min={0} max={100} value={[50]} onValueChange={handleChange} />
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
      ...props
    },
    ref
  ) => {
    // const { theme } = useCore(); // theme unused
    const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue)
    const value = controlledValue !== undefined ? controlledValue : uncontrolledValue
    const trackRef = useRef<HTMLDivElement>(null)

    // Only supporting single thumb for now for simplicity, array structure allows expansion
    const currentValue = value[0]

    const handlePointerDown = (event: React.PointerEvent) => {
      if (disabled) return
      event.preventDefault()
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

      const newValue = [clampedValue]

      if (controlledValue === undefined) {
        setUncontrolledValue(newValue)
      }
      onValueChange?.(newValue)
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
          className="relative h-2 w-full grow cursor-pointer overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800"
          onPointerDown={handlePointerDown}
        >
          <div className="absolute h-full bg-blue-600 dark:bg-blue-500" style={{ width: `${percentage}%` }} />
        </div>

        {/* Thumb */}
        <div
          className="border-primary ring-offset-background focus-visible:ring-ring absolute h-5 w-5 cursor-grab rounded-full border-2 bg-white shadow-md transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none active:cursor-grabbing disabled:pointer-events-none disabled:opacity-50"
          style={{ left: `calc(${percentage}% - 10px)` }} // Center the thumb
          onPointerDown={handlePointerDown}
        />
      </div>
    )
  }
)
Slider.displayName = "Slider"
