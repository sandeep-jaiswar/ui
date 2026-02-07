import React, { useState } from "react"
import { cn } from "../../utils/cn"

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  fallback?: string
  size?: "sm" | "md" | "lg"
}

/**
 * Avatar component for displaying user images or fallbacks.
 * Handles image loading errors gracefully.
 *
 * @example
 * <Avatar src="url.jpg" alt="User Name" fallback="UN" />
 */
export const Avatar = ({ src, alt, fallback, size = "md", className, ...props }: AvatarProps) => {
  const [imageError, setImageError] = useState(false)

  React.useEffect(() => {
    setImageError(false)
  }, [src])

  const sizeClasses = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-14 w-14 text-base",
  }

  return (
    <div
      className={cn(
        "relative flex shrink-0 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {src && !imageError ? (
        <img
          src={src}
          alt={alt}
          className="aspect-square h-full w-full object-cover"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center font-medium text-gray-500 dark:text-gray-400">
          {fallback || alt?.slice(0, 2).toUpperCase() || "??"}
        </div>
      )}
    </div>
  )
}
