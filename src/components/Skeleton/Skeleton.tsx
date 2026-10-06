import React from "react"
import { cn } from "../../utils/cn"
import "./skeleton.css"

export type SkeletonProps = React.HTMLAttributes<HTMLDivElement>

/**
 * Skeleton component for loading placeholder states.
 * Uses a shimmer animation. Zero external dependencies.
 *
 * @example
 * <Skeleton style={{ height: "1rem", width: "250px" }} />
 */
export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(({ className, style, ...props }, ref) => (
  <div ref={ref} className={cn("skeleton", className)} style={style} aria-hidden="true" {...props} />
))
Skeleton.displayName = "Skeleton"
