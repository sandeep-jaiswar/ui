import React from "react"
import { Icon } from "./Icon"

/**
 * Props for an individual accordion item
 */
export interface AccordionItemProps {
  /** Item title displayed in the header */
  title: string
  /** Item content that expands/collapses */
  children: React.ReactNode
  /** Controlled expanded state */
  expanded?: boolean
  /** Default expanded state for uncontrolled usage */
  defaultExpanded?: boolean
  /** Whether the item is disabled and cannot be toggled */
  disabled?: boolean
  /** Callback fired when the item is toggled */
  onToggle?: (expanded: boolean) => void
  /** Additional CSS classes to apply */
  className?: string
  /** Test identifier for automated testing */
  testId?: string
}

/**
 * Props for the accordion container
 */
export interface AccordionProps {
  /** Accordion items to render */
  children: React.ReactNode
  /** Whether multiple items can be expanded simultaneously */
  allowMultiple?: boolean
  /** Visual style variant */
  variant?: "grouped" | "separated"
  /** Additional CSS classes to apply */
  className?: string
  /** Test identifier for automated testing */
  testId?: string
}

/**
 * iOS-inspired accordion item component with smooth expand/collapse animations.
 * Supports both controlled and uncontrolled usage patterns.
 *
 * @example
 * ```tsx
 * <AccordionItem title="Settings" onToggle={(expanded) => console.log(expanded)}>
 *   <p>Configuration options here</p>
 * </AccordionItem>
 * ```
 */
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

    /**
     * Handles the toggle action for the accordion item
     */
    const handleToggle = () => {
      if (disabled) return

      const newExpanded = !isExpanded
      if (expanded === undefined) {
        setIsExpanded(newExpanded)
      }
      onToggle?.(newExpanded)
    }

    /**
     * Handles keyboard navigation for accessibility
     */
    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault()
        handleToggle()
      }
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
          onKeyDown={handleKeyDown}
          disabled={disabled}
          className={`flex w-full items-center justify-between bg-background-primary px-4 py-3 text-left transition-colors duration-200 ease-ios focus:outline-none focus-visible:ring-2 focus-visible:ring-systemBlue-500 focus-visible:ring-offset-2 dark:bg-background-secondary-dark ${
            disabled ? "cursor-not-allowed opacity-50" : "hover:bg-fill-quaternary dark:hover:bg-fill-quaternary-dark"
          } `.trim()}
          aria-expanded={isExpanded}
          aria-controls={`accordion-content-${testId}`}
          aria-disabled={disabled}
        >
          <span className="font-medium text-label-primary text-ios-body dark:text-label-primary-dark">{title}</span>

          <Icon
            name="chevron"
            size="medium"
            color="tertiary"
            className={`transition-transform duration-300 ease-ios ${isExpanded ? "rotate-90" : ""}`}
          />
        </button>

        <div
          id={`accordion-content-${testId}`}
          className={`overflow-hidden transition-all duration-300 ease-ios ${
            isExpanded ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } `}
          role="region"
          aria-labelledby={`accordion-header-${testId}`}
        >
          <div className="bg-background-secondary px-4 py-3 dark:bg-background-tertiary-dark">{children}</div>
        </div>
      </div>
    )
  }
)

AccordionItem.displayName = "AccordionItem"

/**
 * iOS-inspired accordion container component that groups multiple accordion items.
 * Provides consistent styling and layout for accordion interfaces.
 *
 * @example
 * ```tsx
 * <Accordion variant="grouped">
 *   <AccordionItem title="Section 1">Content 1</AccordionItem>
 *   <AccordionItem title="Section 2">Content 2</AccordionItem>
 * </Accordion>
 * ```
 */
export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, variant = "grouped", className = "", testId, ...props }, ref) => {
    const variantStyles = {
      grouped: "bg-background-secondary dark:bg-background-secondary-dark rounded-ios-lg overflow-hidden",
      separated: "space-y-2",
    }

    return (
      <div
        ref={ref}
        className={`${variantStyles[variant]} ${className}`.trim()}
        data-testid={testId}
        role="group"
        aria-label="Accordion"
        {...props}
      >
        {children}
      </div>
    )
  }
)

Accordion.displayName = "Accordion"
