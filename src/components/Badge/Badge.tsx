import React, { forwardRef } from "react";
import { cn } from "../../utils/cn";
import { useCore } from "../../core";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    intent?: "primary" | "secondary" | "success" | "warning" | "danger" | "neutral";
    size?: "sm" | "md";
    shape?: "rounded" | "pill";
}

const getIntentClasses = (intent: NonNullable<BadgeProps["intent"]>) => {
    switch (intent) {
        case "primary":
            return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
        case "secondary":
            return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
        case "success":
            return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
        case "warning":
            return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
        case "danger":
            return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
        case "neutral":
        default:
            return "bg-gray-50 text-gray-600 dark:bg-gray-800 dark:text-gray-400";
    }
};

/**
 * Badge component for status indicators or labels.
 * Supports various intents (colors) and shapes.
 *
 * @example
 * <Badge intent="success">Completed</Badge>
 */
export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
    ({ className, intent = "neutral", size = "md", shape = "rounded", ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "inline-flex items-center font-medium transition-colors",
                    size === "sm" ? "px-2 py-0.5 text-xs" : "px-2.5 py-0.5 text-sm",
                    shape === "pill" ? "rounded-full" : "rounded-md",
                    getIntentClasses(intent),
                    className
                )}
                {...props}
            />
        );
    }
);
Badge.displayName = "Badge";
