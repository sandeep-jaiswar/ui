import React from "react"

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Image source URL */
  src: string
  /** Alt text */
  alt: string
  /** Image aspect ratio */
  aspectRatio?: "square" | "16:9" | "4:3" | "3:2" | "auto"
  /** Object fit behavior */
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down"
  /** Loading state */
  loading?: "lazy" | "eager"
  /** Fallback content when image fails to load */
  fallback?: React.ReactNode
  /** Image border radius */
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full"
  /** Additional CSS classes */
  className?: string
  /** Test ID for testing */
  testId?: string
}

/** iOS-inspired image component with aspect ratio and fallback support */
export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      src,
      alt,
      aspectRatio = "auto",
      objectFit = "cover",
      loading = "lazy",
      fallback,
      rounded = "md",
      className = "",
      testId,
      onError,
      ...props
    },
    ref
  ) => {
    const [hasError, setHasError] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(true)

    const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      setHasError(true)
      setIsLoading(false)
      onError?.(e)
    }

    const handleLoad = () => {
      setIsLoading(false)
    }

    const aspectRatioStyles = {
      square: "aspect-square",
      "16:9": "aspect-video",
      "4:3": "aspect-[4/3]",
      "3:2": "aspect-[3/2]",
      auto: "",
    }

    const objectFitStyles = {
      cover: "object-cover",
      contain: "object-contain",
      fill: "object-fill",
      none: "object-none",
      "scale-down": "object-scale-down",
    }

    const roundedStyles = {
      none: "rounded-none",
      sm: "rounded-ios-sm",
      md: "rounded-ios",
      lg: "rounded-ios-lg",
      xl: "rounded-ios-xl",
      full: "rounded-full",
    }

    const containerClasses = [
      "relative overflow-hidden",
      aspectRatioStyles[aspectRatio],
      roundedStyles[rounded],
      className,
    ]
      .filter(Boolean)
      .join(" ")

    if (hasError && fallback) {
      return (
        <div className={containerClasses} data-testid={testId}>
          {fallback}
        </div>
      )
    }

    return (
      <div className={containerClasses} data-testid={testId}>
        {isLoading && <div className="absolute inset-0 animate-pulse bg-fill-tertiary dark:bg-fill-tertiary-dark" />}

        <img
          ref={ref}
          src={src}
          alt={alt}
          loading={loading}
          onError={handleError}
          onLoad={handleLoad}
          className={`h-full w-full ${objectFitStyles[objectFit]} transition-opacity duration-200 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          {...props}
        />
      </div>
    )
  }
)

Image.displayName = "Image"
