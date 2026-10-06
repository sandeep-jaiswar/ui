import React, { createContext, useContext, useState, type ReactNode, useRef } from "react"
import { cn } from "../../utils/cn"
import "./accordion.css"

// --- Context ---
interface AccordionContextType {
  activeItems: string[]
  toggleItem: (value: string) => void
  collapsible?: boolean
  type: "single" | "multiple"
  rootRef: React.RefObject<HTMLDivElement | null>
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined)

const useAccordion = () => {
  const context = useContext(AccordionContext)
  if (!context) throw new Error("useAccordion must be used within an Accordion")
  return context
}

const AccordionItemContext = createContext<{ value: string } | undefined>(undefined)

const useAccordionItem = () => {
  const context = useContext(AccordionItemContext)
  if (!context) throw new Error("useAccordionItem must be used within an AccordionItem")
  return context
}

// --- Root ---
interface AccordionProps {
  children: ReactNode
  type?: "single" | "multiple"
  collapsible?: boolean
  defaultValue?: string | string[]
  className?: string
}

/**
 * Accordion component for collapsible content sections.
 * Supports single or multiple open items.
 * Fully accessible with keyboard navigation (Arrow/Home/End).
 * Zero external dependencies.
 *
 * @example
 * <Accordion type="single" collapsible>
 *   <AccordionItem value="item-1">
 *     <AccordionTrigger>Is it accessible?</AccordionTrigger>
 *     <AccordionContent>Yes. It follows WAI-ARIA patterns.</AccordionContent>
 *   </AccordionItem>
 * </Accordion>
 */
export const Accordion = ({
  children,
  type = "single",
  collapsible = false,
  defaultValue,
  className,
}: AccordionProps) => {
  const [activeItems, setActiveItems] = useState<string[]>(
    Array.isArray(defaultValue) ? defaultValue : defaultValue ? [defaultValue] : []
  )
  const rootRef = useRef<HTMLDivElement>(null)

  const toggleItem = (value: string) => {
    if (type === "single") {
      if (activeItems.includes(value)) {
        if (collapsible) setActiveItems([])
      } else {
        setActiveItems([value])
      }
    } else {
      setActiveItems((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]))
    }
  }

  return (
    <AccordionContext.Provider value={{ activeItems, toggleItem, type, collapsible, rootRef }}>
      <div ref={rootRef} className={cn("accordion", className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

// --- Item ---
interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

export const AccordionItem = ({ children, className, value, ...props }: AccordionItemProps) => (
  <div className={cn("accordion-item", className)} data-value={value} {...props}>
    <AccordionItemContext.Provider value={{ value }}>{children}</AccordionItemContext.Provider>
  </div>
)

// --- Trigger ---
export const AccordionTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ children, className, ...props }, ref) => {
    const { toggleItem, activeItems, rootRef } = useAccordion()
    const { value } = useAccordionItem()
    const isOpen = activeItems.includes(value)
    const triggerId = `accordion-trigger-${value}`
    const contentId = `accordion-content-${value}`

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (!rootRef.current) return
      if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(e.key)) return

      e.preventDefault()
      const triggers = Array.from(rootRef.current.querySelectorAll<HTMLElement>("[data-accordion-trigger]"))
      const index = triggers.indexOf(e.currentTarget)
      let nextIndex = index

      if (e.key === "ArrowDown") nextIndex = (index + 1) % triggers.length
      else if (e.key === "ArrowUp") nextIndex = (index - 1 + triggers.length) % triggers.length
      else if (e.key === "Home") nextIndex = 0
      else if (e.key === "End") nextIndex = triggers.length - 1

      triggers[nextIndex]?.focus()
      props.onKeyDown?.(e)
    }

    return (
      <h3 className="accordion-trigger-wrapper">
        <button
          ref={ref}
          type="button"
          id={triggerId}
          aria-controls={contentId}
          aria-expanded={isOpen}
          data-accordion-trigger
          className={cn("accordion-trigger", className)}
          {...props}
          onClick={(e) => {
            toggleItem(value)
            props.onClick?.(e)
          }}
          onKeyDown={handleKeyDown}
        >
          {children}
          <svg
            className="accordion-chevron"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </h3>
    )
  }
)
AccordionTrigger.displayName = "AccordionTrigger"

// --- Content ---
export const AccordionContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => {
    const { activeItems } = useAccordion()
    const { value } = useAccordionItem()
    const isOpen = activeItems.includes(value)
    const triggerId = `accordion-trigger-${value}`
    const contentId = `accordion-content-${value}`

    return (
      <div className="accordion-content-wrapper" data-state={isOpen ? "open" : "closed"}>
        <div className="accordion-content-inner">
          <div
            ref={ref}
            id={contentId}
            role="region"
            aria-labelledby={triggerId}
            hidden={!isOpen ? true : undefined}
            className={cn("accordion-content", className)}
            {...props}
          >
            {children}
          </div>
        </div>
      </div>
    )
  }
)
AccordionContent.displayName = "AccordionContent"
