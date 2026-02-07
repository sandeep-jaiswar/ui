import React, { forwardRef, useEffect, useRef, useState } from "react";
import { cn } from "../../utils/cn";
import { useCore } from "../../core";

export interface SliderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "defaultValue" | "onInput"> {
    min?: number;
    max?: number;
    step?: number;
    defaultValue?: number[];
    value?: number[];
    onValueChange?: (value: number[]) => void;
    disabled?: boolean;
}

/**
 * Slider component for selecting a numeric value from a range.
 * Supports min, max, step, and disabled states.
 *
 * @example
 * <Slider min={0} max={100} value={[50]} onValueChange={handleChange} />
 */
export const Slider = forwardRef<HTMLDivElement, SliderProps>(
    ({ className, min = 0, max = 100, step = 1, defaultValue = [0], value: controlledValue, onValueChange, disabled, ...props }, ref) => {
        const { theme } = useCore();
        const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
        const value = controlledValue !== undefined ? controlledValue : uncontrolledValue;
        const trackRef = useRef<HTMLDivElement>(null);

        // Only supporting single thumb for now for simplicity, array structure allows expansion
        const currentValue = value[0];

        const handlePointerDown = (event: React.PointerEvent) => {
            if (disabled) return;
            event.preventDefault();
            window.addEventListener("pointermove", handlePointerMove);
            window.addEventListener("pointerup", handlePointerUp);
            updateValueFromPointer(event);
        };

        const handlePointerMove = (event: PointerEvent) => {
            updateValueFromPointer(event);
        };

        const handlePointerUp = () => {
            window.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("pointerup", handlePointerUp);
        };

        const updateValueFromPointer = (event: PointerEvent | React.PointerEvent) => {
            if (!trackRef.current) return;
            const rect = trackRef.current.getBoundingClientRect();
            const percentage = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1);
            const rawValue = min + percentage * (max - min);
            // Step logic
            const steppedValue = Math.round((rawValue - min) / step) * step + min;
            const clampedValue = Math.min(Math.max(steppedValue, min), max); // Safety clamp

            const newValue = [clampedValue];

            if (controlledValue === undefined) {
                setUncontrolledValue(newValue);
            }
            onValueChange?.(newValue);
        };

        const percentage = ((currentValue - min) / (max - min)) * 100;

        return (
            <div
                ref={ref}
                className={cn(
                    "relative flex w-full touch-none select-none items-center",
                    disabled && "opacity-50 pointer-events-none cursor-not-allowed",
                    className
                )}
                {...props}
            >
                <div
                    ref={trackRef}
                    className="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800 cursor-pointer"
                    onPointerDown={handlePointerDown}
                >
                    <div
                        className="absolute h-full bg-blue-600 dark:bg-blue-500"
                        style={{ width: `${percentage}%` }}
                    />
                </div>

                {/* Thumb */}
                <div
                    className="absolute h-5 w-5 rounded-full border-2 border-primary bg-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-md cursor-grab active:cursor-grabbing"
                    style={{ left: `calc(${percentage}% - 10px)` }} // Center the thumb
                    onPointerDown={handlePointerDown}
                />
            </div>
        );
    }
);
Slider.displayName = "Slider";
