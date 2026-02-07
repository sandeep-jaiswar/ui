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
  return <div ref={ref} className={cn("bg-muted animate-pulse rounded-md", className)} {...props} />
})
Skeleton.displayName = "Skeleton"
