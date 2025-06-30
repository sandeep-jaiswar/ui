import React from "react"
import { Icon } from "./Icon"

export interface AccordionItemProps {
  /** Item title */
  title: string
  /** Item content */
  children: React.ReactNode
  /** Is the item expanded? */
  expanded?: boolean
  /** Default expanded state */
  defaultExpanded?: boolean
  /** Is the item disabled? */
  disabled?: boolean
  /** Expand/collapse handler */
  onToggle?: (expanded: boolean) => void
  /** Additional CSS classes */
  className?: string
  /** Test ID for testing */
  testId?: string
}

export interface AccordionProps {
  /** Accordion items */
  children: React.ReactNode
  /** Allow multiple items to be expanded */
  allowMultiple?: boolean
  /** Accordion variant */
  variant?: "grouped" | "separated"
  /** Additional CSS classes */
  className?: string
  /** Test ID for testing */
  testId?: string
}

/** iOS-inspired accordion item component */
export const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  (
    {
      title,
      children,
      expanded,
      defaultExpanded = false,
      disabled = false,
      onToggle,
      className = "",
      testId,
      ...props
    },
    ref
  ) => {
    const [isExpanded, setIsExpanded] = React.useState(expanded ?? defaultExpanded)

    React.useEffect(() => {
      if (expanded !== undefined) {
        setIsExpanded(expanded)
      }
    }, [expanded])

    const handleToggle = () => {
      if (disabled) return

      const newExpanded = !isExpanded
      if (expanded === undefined) {
        setIsExpanded(newExpanded)
      }
      onToggle?.(newExpanded)
    }

    return (
      <div
        ref={ref}
        className={`border-b border-separator-nonOpaque last:border-b-0 dark:border-separator-nonOpaque-dark ${className}`}
        data-testid={testId}
        {...props}
      >
        <button
          type="button"
          onClick={handleToggle}
          disabled={disabled}
          className={`flex w-full items-center justify-between bg-background-primary px-4 py-3 text-left transition-colors duration-200 ease-ios dark:bg-background-secondary-dark ${
            disabled ? "cursor-not-allowed opacity-50" : "hover:bg-fill-quaternary dark:hover:bg-fill-quaternary-dark"
          } `.trim()}
          aria-expanded={isExpanded}
        >
          <span className="font-medium text-label-primary text-ios-body dark:text-label-primary-dark">{title}</span>

          <Icon
            name="chevron"
            size="medium"
            color="tertiary"
            className={`transition-transform duration-200 ease-ios ${isExpanded ? "rotate-90" : ""}`}
          />
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ease-ios ${
            isExpanded ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } `}
        >
          <div className="bg-background-secondary px-4 py-3 dark:bg-background-tertiary-dark">{children}</div>
        </div>
      </div>
    )
  }
)

AccordionItem.displayName = "AccordionItem"

/** iOS-inspired accordion container component */
export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, variant = "grouped", className = "", testId, ...props }, ref) => {
    const variantStyles = {
      grouped: "bg-background-secondary dark:bg-background-secondary-dark rounded-ios-lg overflow-hidden",
      separated: "space-y-2",
    }

    return (
      <div ref={ref} className={`${variantStyles[variant]} ${className}`.trim()} data-testid={testId} {...props}>
        {children}
      </div>
    )
  }
)

Accordion.displayName = "Accordion"
