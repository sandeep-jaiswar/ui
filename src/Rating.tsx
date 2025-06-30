import React from 'react';
import { Icon } from './Icon';

export interface RatingProps {
  /** Rating value (0-max) */
  value?: number;
  /** Default rating value */
  defaultValue?: number;
  /** Maximum rating value */
  max?: number;
  /** Is the rating read-only? */
  readOnly?: boolean;
  /** Is the rating disabled? */
  disabled?: boolean;
  /** Rating size */
  size?: 'small' | 'medium' | 'large';
  /** Rating color */
  color?: 'yellow' | 'red' | 'blue' | 'green';
  /** Show rating value as text */
  showValue?: boolean;
  /** Allow half ratings */
  allowHalf?: boolean;
  /** Change handler */
  onChange?: (rating: number) => void;
  /** Additional CSS classes */
  className?: string;
  /** Test ID for testing */
  testId?: string;
}

/** iOS-inspired rating component with star ratings */
export const Rating = React.forwardRef<HTMLDivElement, RatingProps>(
  ({
    value,
    defaultValue = 0,
    max = 5,
    readOnly = false,
    disabled = false,
    size = 'medium',
    color = 'yellow',
    showValue = false,
    allowHalf = false,
    onChange,
    className = '',
    testId,
    ...props
  }, ref) => {
    const [rating, setRating] = React.useState(value ?? defaultValue);
    const [hoverRating, setHoverRating] = React.useState<number | null>(null);

    React.useEffect(() => {
      if (value !== undefined) {
        setRating(value);
      }
    }, [value]);

    const handleRatingChange = (newRating: number) => {
      if (readOnly || disabled) return;

      if (value === undefined) {
        setRating(newRating);
      }
      onChange?.(newRating);
    };

    const handleMouseEnter = (starIndex: number, isHalf?: boolean) => {
      if (readOnly || disabled) return;
      const newRating = isHalf ? starIndex + 0.5 : starIndex + 1;
      setHoverRating(newRating);
    };

    const handleMouseLeave = () => {
      if (readOnly || disabled) return;
      setHoverRating(null);
    };

    const handleClick = (starIndex: number, isHalf?: boolean) => {
      if (readOnly || disabled) return;
      const newRating = isHalf ? starIndex + 0.5 : starIndex + 1;
      handleRatingChange(newRating);
    };

    const currentRating = hoverRating ?? rating;

    const sizeStyles = {
      small: 'w-4 h-4',
      medium: 'w-6 h-6',
      large: 'w-8 h-8'
    };

    const colorStyles = {
      yellow: 'text-systemYellow-500',
      red: 'text-systemRed-500',
      blue: 'text-systemBlue-500',
      green: 'text-systemGreen-500'
    };

    const textSizeStyles = {
      small: 'text-ios-caption-1',
      medium: 'text-ios-footnote',
      large: 'text-ios-subhead'
    };

    const renderStar = (index: number) => {
      const starValue = index + 1;
      const isActive = currentRating >= starValue;
      const isHalfActive = allowHalf && currentRating >= starValue - 0.5 && currentRating < starValue;

      return (
        <div
          key={index}
          className="relative cursor-pointer"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
        >
          {/* Background star */}
          <Icon
            name="star"
            className={`${sizeStyles[size]} text-fill-tertiary dark:text-fill-tertiary-dark`}
          />

          {/* Active star */}
          {(isActive || isHalfActive) && (
            <Icon
              name="star"
              className={`${sizeStyles[size]} ${colorStyles[color]} absolute inset-0`}
              style={isHalfActive ? { clipPath: 'inset(0 50% 0 0)' } : undefined}
            />
          )}

          {/* Half star overlay for hover/interaction */}
          {allowHalf && !readOnly && !disabled && (
            <div
              className="absolute inset-0 w-1/2"
              onMouseEnter={() => handleMouseEnter(index, true)}
              onClick={(e) => {
                e.stopPropagation();
                handleClick(index, true);
              }}
            />
          )}
        </div>
      );
    };

    return (
      <div
        ref={ref}
        className={`flex items-center gap-1 ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
        data-testid={testId}
        {...props}
      >
        <div className="flex items-center gap-0.5">
          {Array.from({ length: max }, (_, index) => renderStar(index))}
        </div>

        {showValue && (
          <span className={`ml-2 ${textSizeStyles[size]} text-label-secondary dark:text-label-secondary-dark`}>
            {rating.toFixed(allowHalf ? 1 : 0)} / {max}
          </span>
        )}
      </div>
    );
  }
);

Rating.displayName = 'Rating';