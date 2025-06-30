import React from 'react';

export interface ButtonProps {
  /** Button variant following iOS design patterns */
  variant?: 'primary' | 'secondary' | 'destructive' | 'ghost' | 'plain';
  /** Button size */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  children: React.ReactNode;
  /** Is the button disabled? */
  disabled?: boolean;
  /** Is the button in loading state? */
  loading?: boolean;
  /** Full width button */
  fullWidth?: boolean;
  /** Icon to display before text */
  startIcon?: React.ReactNode;
  /** Icon to display after text */
  endIcon?: React.ReactNode;
  /** Optional click handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Button type */
  type?: 'button' | 'submit' | 'reset';
  /** Additional CSS classes */
  className?: string;
  /** Test ID for testing */
  testId?: string;
}

/** iOS-inspired button component following Apple's Human Interface Guidelines */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    variant = 'primary',
    size = 'medium',
    children,
    disabled = false,
    loading = false,
    fullWidth = false,
    startIcon,
    endIcon,
    onClick,
    type = 'button',
    className = '',
    testId,
    ...props
  }, ref) => {
    const baseStyles = 'btn-ios inline-flex items-center justify-center font-sf-pro font-semibold transition-all duration-200 ease-ios focus:outline-none focus-visible:ring-2 focus-visible:ring-systemBlue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none';
    
    const variantStyles = {
      primary: 'btn-primary',
      secondary: 'btn-secondary', 
      destructive: 'btn-destructive',
      ghost: 'btn-ghost',
      plain: 'bg-transparent text-systemBlue-500 hover:bg-fill-quaternary active:bg-fill-tertiary dark:text-systemBlue-400 dark:hover:bg-fill-quaternary-dark dark:active:bg-fill-tertiary-dark p-0 min-h-0'
    };

    const sizeStyles = {
      small: 'px-3 py-1.5 text-ios-footnote min-h-[32px] gap-1',
      medium: 'px-4 py-2.5 text-ios-body min-h-[44px] gap-2',
      large: 'px-6 py-3.5 text-ios-headline min-h-[52px] gap-2'
    };

    const widthStyles = fullWidth ? 'w-full' : '';

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled || loading) {
        event.preventDefault();
        return;
      }
      onClick?.(event);
    };

    const renderContent = () => {
      if (loading) {
        return (
          <>
            <div className="spinner-ios w-4 h-4" />
            <span className="ml-2">Loading...</span>
          </>
        );
      }

      return (
        <>
          {startIcon && <span className="flex-shrink-0">{startIcon}</span>}
          <span>{children}</span>
          {endIcon && <span className="flex-shrink-0">{endIcon}</span>}
        </>
      );
    };

    return (
      <button
        ref={ref}
        type={type}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`.trim()}
        disabled={disabled || loading}
        onClick={handleClick}
        data-testid={testId}
        {...props}
      >
        {renderContent()}
      </button>
    );
  }
);

Button.displayName = 'Button';