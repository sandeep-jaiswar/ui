import React, { useEffect, useState } from "react"
import { Icon } from "./Icon"

/**
 * Props for the Rating component
 */
export interface RatingProps {
  /**
   * The current rating value
   */
  value?: number
  /**
   * Maximum number of stars
   */
  max?: number
  /**
   * Size of the rating stars
   */
  size?: "small" | "medium" | "large"
  /**
   * Color theme for active stars
   */
  color?: "yellow" | "red" | "blue" | "green"
  /**
   * Whether the rating is read-only
   */
  readonly?: boolean
  /**
   * Whether to allow half-star ratings
   */
  allowHalf?: boolean
  /**
   * Callback when rating changes
   */
  onChange?: (value: number) => void
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * Test identifier
   */
  "data-testid"?: string
}

/**
 * iOS-inspired rating component for displaying and collecting star ratings.
 * 
 * Features:
 * - Configurable maximum rating (default: 5)
 * - Half-star rating support
 * - Multiple color themes
 * - Read-only mode for display only
 * - Different size options
 * - Hover effects for interactive feedback
 * 
 * @example
 * ```tsx
 * // Basic rating display
 * <Rating value={4.5} readonly />
 * 
 * // Interactive rating with half-stars
 * <Rating 
 *   value={rating}
 *   onChange={setRating}
 *   allowHalf
 *   color="blue"
 * />
 * ```
 */
export const Rating: React.FC<RatingProps> = ({
  value = 0,
  max = 5,
  size = "medium",
  color = "yellow",
  readonly = false,
  allowHalf = false,
  onChange,
  className = "",
  "data-testid": testId,
}) => {
  const [hoverValue, setHoverValue] = useState<number | null>(null)
  const [internalValue, setInternalValue] = useState(value)

  useEffect(() => {
    setInternalValue(value)
  }, [value])

  /**
   * Handles star click for rating selection
   */
  const handleStarClick = (starIndex: number, isHalf: boolean = false) => {
    if (readonly) return

    const newValue = starIndex + (isHalf && allowHalf ? 0.5 : 1)
    setInternalValue(newValue)
    onChange?.(newValue)
    setHoverValue(null)
  }

  /**
   * Handles star hover for visual feedback
   */
  const handleStarHover = (starIndex: number, isHalf: boolean = false) => {
    if (readonly) return

    const newValue = starIndex + (isHalf && allowHalf ? 0.5 : 1)
    setHoverValue(newValue)
  }

  /**
   * Handles mouse leave to reset hover state
   */
  const handleMouseLeave = () => {
    if (readonly) return
    setHoverValue(null)
  }

  /**
   * Determines the state of a star (empty, half, or full)
   */
  const getStarState = (starIndex: number) => {
    const currentValue = hoverValue !== null ? hoverValue : internalValue
    const starValue = starIndex + 1

    if (currentValue >= starValue) {
      return "full"
    } else if (allowHalf && currentValue >= starValue - 0.5) {
      return "half"
    }
    return "empty"
  }

  const sizeStyles = {
    small: "w-4 h-4",
    medium: "w-5 h-5",
    large: "w-6 h-6",
  }

  const colorHexMap = {
    yellow: "#FFCC02",
    red: "#FF3B30",
    blue: "#007AFF",
    green: "#34C759",
  }

  return (
    <div className={`flex items-center gap-1 ${className}`} onMouseLeave={handleMouseLeave} data-testid={testId}>
      {Array.from({ length: max }, (_, index) => {
        const starState = getStarState(index)
        const isActive = starState === "full"
        const isHalfActive = starState === "half"

        return (
          <div
            key={index}
            className={`relative ${readonly ? "" : "cursor-pointer"}`}
            onClick={() => handleStarClick(index)}
            onMouseEnter={() => handleStarHover(index)}
          >
            {/* Background star */}
            <Icon
              name="star"
              size={size}
              className={`${sizeStyles[size]} text-fill-tertiary dark:text-fill-tertiary-dark`}
            />

            {/* Active star overlay */}
            {(isActive || isHalfActive) && (
              <div
                className={`absolute inset-0 ${isHalfActive ? "overflow-hidden" : ""}`}
                style={isHalfActive ? { clipPath: "inset(0 50% 0 0)" } : undefined}
              >
                <Icon
                  name="star"
                  size={size}
                  color="custom"
                  customColor={colorHexMap[color]}
                  className={`${sizeStyles[size]} absolute inset-0`}
                />
              </div>
            )}

            {/* Half star hover area */}
            {allowHalf && !readonly && (
              <>
                <div
                  className="absolute inset-0 z-10 w-1/2"
                  onMouseEnter={() => handleStarHover(index, true)}
                  onClick={(e) => {
                    e.stopPropagation()
                    handleStarClick(index, true)
                  }}
                />
                <div
                  className="absolute inset-0 left-1/2 z-10 w-1/2"
                  onMouseEnter={() => handleStarHover(index, false)}
                  onClick={(e) => {
                    e.stopPropagation()
                    handleStarClick(index, false)
                  }}
                />
              </>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Rating