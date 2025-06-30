import React from "react"

/**
 * Props for the Avatar component
 */
export interface AvatarProps {
  /** Size variant of the avatar */
  size?: "small" | "medium" | "large" | "xlarge"
  /** Image source URL */
  src?: string
  /** Alt text for the image (important for accessibility) */
  alt?: string
  /** Fallback initials when no image is available */
  initials?: string
  /** Shape variant of the avatar */
  shape?: "circle" | "rounded" | "square"
  /** Background color for initials display */
  backgroundColor?: string
  /** Text color for initials */
  textColor?: string
  /** Whether to show online status indicator */
  online?: boolean
  /** Additional CSS classes to apply */
  className?: string
  /** Test identifier for automated testing */
  testId?: string
}

/**
 * iOS-inspired avatar component for displaying user profile pictures with fallback options.
 * 
 * Features:
 * - Multiple size variants following iOS design guidelines
 * - Graceful fallback from image → initials → default icon
 * - Online status indicator with proper positioning
 * - Accessible image handling with proper alt text
 * - Support for different shapes (circle, rounded, square)
 * 
 * @example
 * ```tsx
 * <Avatar
 *   src="https://example.com/avatar.jpg"
 *   alt="John Doe's profile picture"
 *   initials="JD"
 *   online={true}
 *   size="large"
 * />
 * ```
 */
export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      size = "medium",
      src,
      alt = "Avatar",
      initials,
      shape = "circle",
      backgroundColor = "#007AFF",
      textColor = "#FFFFFF",
      online = false,
      className = "",
      testId,
      ...props
    },
    ref
  ) => {
    const [imageError, setImageError] = React.useState(false)
    const [imageLoading, setImageLoading] = React.useState(!!src)

    const sizeStyles = {
      small: "w-8 h-8 text-ios-caption-1",
      medium: "w-10 h-10 text-ios-footnote",
      large: "w-12 h-12 text-ios-subhead",
      xlarge: "w-16 h-16 text-ios-body",
    }

    const shapeStyles = {
      circle: "rounded-full",
      rounded: "rounded-ios",
      square: "rounded-none",
    }

    const baseStyles =
      "relative inline-flex items-center justify-center font-semibold overflow-hidden bg-fill-secondary dark:bg-fill-secondary-dark"

    /**
     * Handles image load error by showing fallback content
     */
    const handleImageError = () => {
      setImageError(true)
      setImageLoading(false)
    }

    /**
     * Handles successful image load
     */
    const handleImageLoad = () => {
      setImageLoading(false)
    }

    /**
     * Renders the appropriate content based on available props and state
     */
    const renderContent = () => {
      // Show loading state
      if (imageLoading && !imageError) {
        return (
          <div className="h-full w-full animate-pulse bg-fill-tertiary dark:bg-fill-tertiary-dark" />
        )
      }

      // Show image if available and not errored
      if (src && !imageError) {
        return (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="h-full w-full object-cover"
            onError={handleImageError}
            onLoad={handleImageLoad}
          />
        )
      }

      // Show initials if available
      if (initials) {
        return (
          <span className="select-none" style={{ color: textColor }}>
            {initials.slice(0, 2).toUpperCase()}
          </span>
        )
      }

      // Default user icon
      return (
        <svg
          className="h-1/2 w-1/2 text-label-tertiary dark:text-label-tertiary-dark"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      )
    }

    const onlineIndicatorSize = {
      small: "w-2 h-2",
      medium: "w-2.5 h-2.5",
      large: "w-3 h-3",
      xlarge: "w-4 h-4",
    }

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${sizeStyles[size]} ${shapeStyles[shape]} ${className}`.trim()}
        style={!src && initials && !imageError ? { backgroundColor } : undefined}
        data-testid={testId}
        role="img"
        aria-label={alt}
        {...props}
      >
        {renderContent()}

        {online && (
          <div
            className={`absolute bottom-0 right-0 ${onlineIndicatorSize[size]} rounded-full border-2 border-background-primary bg-systemGreen-500 dark:border-background-primary-dark`}
            aria-label="Online"
            role="status"
          />
        )}
      </div>
    )
  }
)

Avatar.displayName = "Avatar"