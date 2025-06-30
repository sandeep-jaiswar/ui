import React from 'react';

export interface ListItemProps {
  /** Item content */
  children: React.ReactNode;
  /** Left side content */
  leftContent?: React.ReactNode;
  /** Right side content */
  rightContent?: React.ReactNode;
  /** Is the item disabled? */
  disabled?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
  /** Test ID for testing */
  testId?: string;
}

export interface ListProps {
  /** List items */
  children: React.ReactNode;
  /** List variant */
  variant?: 'grouped' | 'inset' | 'plain';
  /** Additional CSS classes */
  className?: string;
  /** Test ID for testing */
  testId?: string;
}

/** iOS-inspired list item component */
export const ListItem = React.forwardRef<HTMLDivElement, ListItemProps>(
  ({
    children,
    leftContent,
    rightContent,
    disabled = false,
    onClick,
    className = '',
    testId,
    ...props
  }, ref) => {
    const isInteractive = !!onClick && !disabled;

    return (
      <div
        ref={ref}
        className={`
          flex items-center px-4 py-3 min-h-[44px]
          bg-background-primary dark:bg-background-secondary-dark
          border-b border-separator-nonOpaque dark:border-separator-nonOpaque-dark last:border-b-0
          transition-colors duration-150 ease-ios
          ${isInteractive 
            ? 'cursor-pointer hover:bg-fill-quaternary dark:hover:bg-fill-quaternary-dark active:bg-fill-tertiary dark:active:bg-fill-tertiary-dark' 
            : ''
          }
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
          ${className}
        `.trim()}
        onClick={isInteractive ? onClick : undefined}
        role={isInteractive ? 'button' : undefined}
        tabIndex={isInteractive ? 0 : undefined}
        data-testid={testId}
        {...props}
      >
        {leftContent && (
          <div className="flex-shrink-0 mr-3">
            {leftContent}
          </div>
        )}
        
        <div className="flex-1 min-w-0">
          {children}
        </div>
        
        {rightContent && (
          <div className="flex-shrink-0 ml-3">
            {rightContent}
          </div>
        )}
      </div>
    );
  }
);

ListItem.displayName = 'ListItem';

/** iOS-inspired list container component */
export const List = React.forwardRef<HTMLDivElement, ListProps>(
  ({
    children,
    variant = 'grouped',
    className = '',
    testId,
    ...props
  }, ref) => {
    const variantStyles = {
      grouped: 'bg-background-secondary dark:bg-background-secondary-dark rounded-ios-lg overflow-hidden',
      inset: 'bg-background-secondary dark:bg-background-secondary-dark rounded-ios-lg overflow-hidden mx-4',
      plain: 'bg-transparent'
    };

    return (
      <div
        ref={ref}
        className={`${variantStyles[variant]} ${className}`.trim()}
        role="list"
        data-testid={testId}
        {...props}
      >
        {children}
      </div>
    );
  }
);

List.displayName = 'List';