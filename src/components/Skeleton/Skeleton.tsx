import React from "react"
import { cn } from "../../utils/cn"

export type SkeletonProps = React.HTMLAttributes<HTMLDivElement>

/**
 * Skeleton component for loading states.
 * Uses a pulse animation to indicate loading.
 *
 * @example
 * <Skeleton className="h-4 w-[250px]" />
 */
export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn("animate-pulse rounded-md bg-gray-100 dark:bg-gray-800", className)} {...props} />
})
Skeleton.displayName = "Skeleton"
