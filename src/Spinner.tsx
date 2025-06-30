import React from 'react';

export interface SpinnerProps {
  /** Spinner size */
  size?: 'small' | 'medium' | 'large';
  /** Spinner color */
  color?: 'blue' | 'green' | 'orange' | 'red' | 'purple' | 'gray';
  /** Loading text */
  label?: string;
  /** Show label */
  showLabel?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Test ID for testing */
  testId?: string;
}

/** iOS-inspired spinner component for loading states */
export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({
    size = 'medium',
    color = 'blue',
    label = 'Loading...',
    showLabel = false,
    className = '',
    testId,
    ...props
  }, ref) => {
    const sizeStyles = {
      small: 'w-4 h-4',
      medium: 'w-6 h-6',
      large: 'w-8 h-8'
    };

    const colorStyles = {
      blue: 'border-systemBlue-500',
      green: 'border-systemGreen-500',
      orange: 'border-systemOrange-500',
      red: 'border-systemRed-500',
      purple: 'border-systemPurple-500',
      gray: 'border-systemGray-500'
    };

    const textSizeStyles = {
      small: 'text-ios-caption-1',
      medium: 'text-ios-footnote',
      large: 'text-ios-subhead'
    };

    return (
      <div
        ref={ref}
        className={`inline-flex items-center gap-3 ${className}`}
        data-testid={testId}
        {...props}
      >
        <div
          className={`
            ${sizeStyles[size]} 
            border-2 border-transparent border-t-current 
            rounded-full animate-spin
            ${colorStyles[color]}
          `}
          role="status"
          aria-label={label}
        />
        {showLabel && (
          <span className={`${textSizeStyles[size]} text-label-secondary dark:text-label-secondary-dark`}>
            {label}
          </span>
        )}
      </div>
    );
  }
);

Spinner.displayName = 'Spinner';