import React from "react"

export interface ListItemProps {
  /** Item content */
  children: React.ReactNode
  /** Left side content */
  leftContent?: React.ReactNode
  /** Right side content */
  rightContent?: React.ReactNode
  /** Is the item disabled? */
  disabled?: boolean
  /** Click handler */
  onClick?: () => void
  /** Additional CSS classes */
  className?: string
  /** Test ID for testing */
  testId?: string
}

export interface ListProps {
  /** List items */
  children: React.ReactNode
  /** List variant */
  variant?: "grouped" | "inset" | "plain"
  /** Additional CSS classes */
  className?: string
  /** Test ID for testing */
  testId?: string
}

/** iOS-inspired list item component */
export const ListItem = React.forwardRef<HTMLDivElement, ListItemProps>(
  ({ children, leftContent, rightContent, disabled = false, onClick, className = "", testId, ...props }, ref) => {
    const isInteractive = !!onClick && !disabled

    return (
      <div
        ref={ref}
        className={`flex min-h-[44px] items-center border-b border-separator-nonOpaque bg-background-primary px-4 py-3 transition-colors duration-150 ease-ios last:border-b-0 dark:border-separator-nonOpaque-dark dark:bg-background-secondary-dark ${
          isInteractive
            ? "cursor-pointer hover:bg-fill-quaternary active:bg-fill-tertiary dark:hover:bg-fill-quaternary-dark dark:active:bg-fill-tertiary-dark"
            : ""
        } ${disabled ? "cursor-not-allowed opacity-50" : ""} ${className} `.trim()}
        onClick={isInteractive ? onClick : undefined}
        role={isInteractive ? "button" : undefined}
        tabIndex={isInteractive ? 0 : undefined}
        data-testid={testId}
        {...props}
      >
        {leftContent && <div className="mr-3 flex-shrink-0">{leftContent}</div>}

        <div className="min-w-0 flex-1">{children}</div>

        {rightContent && <div className="ml-3 flex-shrink-0">{rightContent}</div>}
      </div>
    )
  }
)

ListItem.displayName = "ListItem"

/** iOS-inspired list container component */
export const List = React.forwardRef<HTMLDivElement, ListProps>(
  ({ children, variant = "grouped", className = "", testId, ...props }, ref) => {
    const variantStyles = {
      grouped: "bg-background-secondary dark:bg-background-secondary-dark rounded-ios-lg overflow-hidden",
      inset: "bg-background-secondary dark:bg-background-secondary-dark rounded-ios-lg overflow-hidden mx-4",
      plain: "bg-transparent",
    }

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
    )
  }
)

List.displayName = "List"
