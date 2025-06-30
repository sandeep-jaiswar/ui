import React from 'react';

export interface BadgeProps {
  /** Badge variant */
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  /** Badge size */
  size?: 'small' | 'medium' | 'large';
  /** Badge content */
  children: React.ReactNode;
  /** Badge shape */
  shape?: 'rounded' | 'pill';
  /** Show dot indicator instead of content */
  dot?: boolean;
  /** Maximum number to display (shows 99+ if exceeded) */
  max?: number;
  /** Additional CSS classes */
  className?: string;
  /** Test ID for testing */
  testId?: string;
}

/** iOS-inspired badge component for notifications and status indicators */
export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({
    variant = 'primary',
    size = 'medium',
    children,
    shape = 'pill',
    dot = false,
    max = 99,
    className = '',
    testId,
    ...props
  }, ref) => {
    const baseStyles = 'badge-ios inline-flex items-center justify-center font-medium select-none';
    
    const variantStyles = {
      primary: 'bg-systemRed-500 text-white dark:bg-systemRed-600',
      secondary: 'bg-fill-secondary text-label-primary border border-separator-opaque dark:bg-fill-secondary-dark dark:text-label-primary-dark dark:border-separator-opaque-dark',
      success: 'bg-systemGreen-500 text-white dark:bg-systemGreen-600',
      warning: 'bg-systemOrange-500 text-white dark:bg-systemOrange-600',
      error: 'bg-systemRed-500 text-white dark:bg-systemRed-600',
      info: 'bg-systemBlue-500 text-white dark:bg-systemBlue-600'
    };

    const sizeStyles = {
      small: dot ? 'w-2 h-2' : 'px-1.5 py-0.5 text-ios-caption-2 min-w-[16px] h-4',
      medium: dot ? 'w-2.5 h-2.5' : 'px-2 py-0.5 text-ios-caption-1 min-w-[20px] h-5',
      large: dot ? 'w-3 h-3' : 'px-2.5 py-1 text-ios-footnote min-w-[24px] h-6'
    };

    const shapeStyles = {
      rounded: 'rounded-ios-sm',
      pill: 'rounded-full'
    };

    const formatContent = (content: React.ReactNode): React.ReactNode => {
      if (typeof content === 'number' && content > max) {
        return `${max}+`;
      }
      return content;
    };

    if (dot) {
      return (
        <span
          ref={ref}
          className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${shapeStyles[shape]} ${className}`.trim()}
          data-testid={testId}
          {...props}
        />
      );
    }

    return (
      <span
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${shapeStyles[shape]} ${className}`.trim()}
        data-testid={testId}
        {...props}
      >
        {formatContent(children)}
      </span>
    );
  }
);

Badge.displayName = 'Badge';