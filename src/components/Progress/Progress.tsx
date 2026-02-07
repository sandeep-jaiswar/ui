import React from "react";
import { cn } from "../../utils/cn";

// --- Progress Root ---
interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
    value?: number;
    max?: number;
}

/**
 * Progress component for visualizing completion of a task.
 *
 * @example
 * <Progress value={60} max={100} />
 */
export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
    ({ className, value, max = 100, ...props }, ref) => {
        const percent = Math.min(100, Math.max(0, ((value || 0) / max) * 100));

        return (
            <div
                ref={ref}
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={max}
                aria-valuenow={value}
                className={cn(
                    "relative h-4 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800",
                    className
                )}
                {...props}
            >
                <div
                    className="h-full w-full flex-1 bg-gray-900 transition-all dark:bg-gray-50"
                    style={{ transform: `translateX(-${100 - percent}%)` }}
                />
            </div>
        );
    }
);
Progress.displayName = "Progress";
