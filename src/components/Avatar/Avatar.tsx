import React, { useState } from "react"
import { cn } from "../../utils/cn"
import "./avatar.css"

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  fallback?: string
  size?: "sm" | "md" | "lg"
}

/**
 * Avatar component for displaying user images or fallbacks.
 * Handles image loading errors gracefully. Zero external dependencies.
 *
 * @example
 * <Avatar src="url.jpg" alt="User Name" fallback="UN" />
 */
export const Avatar = ({ src, alt, fallback, size = "md", className, ...props }: AvatarProps) => {
  const [imageError, setImageError] = useState(false)

  React.useEffect(() => {
    setImageError(false)
  }, [src])

  return (
    <div data-size={size} className={cn("avatar", className)} {...props}>
      {src && !imageError ? (
        <img src={src} alt={alt} className="avatar__image" onError={() => setImageError(true)} />
      ) : (
        <div className="avatar__fallback">{fallback || alt?.slice(0, 2).toUpperCase() || "??"}</div>
      )}
    </div>
  )
}
