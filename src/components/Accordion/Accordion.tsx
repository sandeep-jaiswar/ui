import React, { createContext, useContext, useState, ReactNode, useRef } from "react"
import { cn } from "../../utils/cn"
import { MotionPrimitive } from "../../ux"

// --- Accordion Context ---
interface AccordionContextType {
  activeItems: string[]
  toggleItem: (value: string) => void
  collapsible?: boolean
  type: "single" | "multiple"
  rootRef: React.RefObject<HTMLDivElement | null>
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined)

// --- Accordion Root ---
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
 * Fully accessible with keyboard navigation.
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
        if (collapsible) {
          setActiveItems([])
        }
      } else {
        setActiveItems([value])
      }
    } else {
      // multiple
      setActiveItems((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]))
    }
  }

  return (
    <AccordionContext.Provider
      value={{
        activeItems,
        toggleItem,
        type,
        collapsible,
        rootRef,
      }}
    >
      <div ref={rootRef} className={cn("space-y-1", className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

const useAccordion = () => {
  const context = useContext(AccordionContext)
  if (!context) {
    throw new Error("useAccordion must be used within an Accordion")
  }
  return context
}

// --- Accordion Item ---
interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

const AccordionItemContext = createContext<{ value: string } | undefined>(undefined)

const useAccordionItem = () => {
  const context = useContext(AccordionItemContext)
  if (!context) {
    throw new Error("useAccordionItem must be used within an AccordionItem")
  }
  return context
}

export const AccordionItem = ({ children, className, value, ...props }: AccordionItemProps) => {
  return (
    <div className={cn("border-border border-b", className)} {...props} data-state="closed" data-value={value}>
      <AccordionItemContext.Provider value={{ value }}>{children}</AccordionItemContext.Provider>
    </div>
  )
}

// --- Accordion Trigger ---
export const AccordionTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ children, className, ...props }, ref) => {
    const { toggleItem, activeItems, rootRef } = useAccordion()
    const { value } = useAccordionItem()
    const isOpen = activeItems.includes(value)
    const triggerId = `accordion-trigger-${value}`
    const contentId = `accordion-content-${value}`

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      // Standard Accordion Keyboard Interaction
      // Enter/Space is handled natively by button for onClick
      // We handle Arrows/Home/End

      if (!rootRef.current) return

      if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Home" || e.key === "End") {
        e.preventDefault()
        const triggers = Array.from(rootRef.current.querySelectorAll("[data-accordion-trigger]")) as HTMLElement[]
        const index = triggers.indexOf(e.currentTarget)

        let nextIndex = index

        if (e.key === "ArrowDown") {
          nextIndex = (index + 1) % triggers.length
        } else if (e.key === "ArrowUp") {
          nextIndex = (index - 1 + triggers.length) % triggers.length
        } else if (e.key === "Home") {
          nextIndex = 0
        } else if (e.key === "End") {
          nextIndex = triggers.length - 1
        }

        triggers[nextIndex]?.focus()
      }

      props.onKeyDown?.(e)
    }

    return (
      <h3 className="flex">
        <button
          ref={ref}
          type="button"
          id={triggerId}
          aria-controls={contentId}
          aria-expanded={isOpen}
          data-accordion-trigger
          onClick={() => toggleItem(value)}
          onKeyDown={handleKeyDown}
          className={cn(
            "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
            className
          )}
          data-state={isOpen ? "open" : "closed"}
          {...props}
        >
          {children}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 shrink-0 transition-transform duration-200"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </h3>
    )
  }
)
AccordionTrigger.displayName = "AccordionTrigger"

// --- Accordion Content ---
export const AccordionContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => {
    const { activeItems } = useAccordion()
    const { value } = useAccordionItem()
    const isOpen = activeItems.includes(value)
    const triggerId = `accordion-trigger-${value}`
    const contentId = `accordion-content-${value}`

    if (!isOpen) return null

    return (
      <MotionPrimitive animation="fade">
        <div
          ref={ref}
          id={contentId}
          role="region"
          aria-labelledby={triggerId}
          className={cn("overflow-hidden text-sm transition-all", className)}
          data-state={isOpen ? "open" : "closed"}
          {...props}
        >
          <div className="pt-0 pb-4">{children}</div>
        </div>
      </MotionPrimitive>
    )
  }
)
AccordionContent.displayName = "AccordionContent"
