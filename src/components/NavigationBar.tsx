import React from 'react';
import { Icon } from './Icon';

export interface NavigationBarProps {
  /** Navigation title */
  title?: string;
  /** Left side content */
  leftContent?: React.ReactNode;
  /** Right side content */
  rightContent?: React.ReactNode;
  /** Show back button */
  showBack?: boolean;
  /** Back button handler */
  onBack?: () => void;
  /** Navigation bar variant */
  variant?: 'default' | 'large' | 'transparent';
  /** Additional CSS classes */
  className?: string;
  /** Test ID for testing */
  testId?: string;
}

/** iOS-inspired navigation bar component */
export const NavigationBar = React.forwardRef<HTMLElement, NavigationBarProps>(
  ({
    title,
    leftContent,
    rightContent,
    showBack = false,
    onBack,
    variant = 'default',
    className = '',
    testId,
    ...props
  }, ref) => {
    const variantStyles = {
      default: 'bg-background-primary dark:bg-background-primary-dark border-b border-separator-nonOpaque dark:border-separator-nonOpaque-dark',
      large: 'bg-background-primary dark:bg-background-primary-dark border-b border-separator-nonOpaque dark:border-separator-nonOpaque-dark pb-2',
      transparent: 'bg-transparent'
    };

    const titleStyles = {
      default: 'text-ios-headline',
      large: 'text-ios-large-title',
      transparent: 'text-ios-headline'
    };

    return (
      <nav
        ref={ref}
        className={`
          ${variantStyles[variant]}
          px-4 py-3 flex items-center justify-between
          backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95
          ${className}
        `.trim()}
        data-testid={testId}
        {...props}
      >
        {/* Left Side */}
        <div className="flex items-center min-w-0 flex-1">
          {showBack && (
            <button
              type="button"
              onClick={onBack}
              className="mr-3 p-1 text-systemBlue-500 dark:text-systemBlue-400 hover:text-systemBlue-600 dark:hover:text-systemBlue-300 transition-colors"
              aria-label="Go back"
            >
              <Icon name="chevron" size="medium" className="rotate-180" />
            </button>
          )}
          {leftContent}
        </div>

        {/* Title */}
        {title && (
          <div className="flex-1 text-center px-4">
            <h1 className={`${titleStyles[variant]} font-semibold text-label-primary dark:text-label-primary-dark truncate`}>
              {title}
            </h1>
          </div>
        )}

        {/* Right Side */}
        <div className="flex items-center min-w-0 flex-1 justify-end">
          {rightContent}
        </div>
      </nav>
    );
  }
);

NavigationBar.displayName = 'NavigationBar';