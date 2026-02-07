import React, { createContext, useContext, useState, ReactNode } from "react"
import { cn } from "../../utils/cn"
import { MotionPrimitive } from "../../ux"

// --- Accordion Context ---
interface AccordionContextType {
  activeItems: string[]
  toggleItem: (value: string) => void
  collapsible?: boolean
  type: "single" | "multiple"
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
 *
 * @example
 * <Accordion type="single" collapsible>
 *   <AccordionItem value="item-1">
 *     <AccordionTrigger>Is it accessible?</AccordionTrigger>
 *     <AccordionContent>Yes.</AccordionContent>
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
      }}
    >
      <div className={cn("space-y-1", className)}>{children}</div>
    </AccordionContext.Provider>
  )
}

// --- Accordion Item ---
interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

const AccordionItemContext = createContext<{ value: string } | undefined>(undefined)

export const AccordionItem = ({ children, className, value, ...props }: AccordionItemProps) => {
  return (
    <div className={cn("border-b", className)} {...props} data-state="closed" data-value={value}>
      <AccordionItemContext.Provider value={{ value }}>{children}</AccordionItemContext.Provider>
    </div>
  )
}

// --- Accordion Trigger ---
export const AccordionTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ children, className, ...props }, ref) => {
    const { toggleItem, activeItems } = useContext(AccordionContext)!
    const { value } = useContext(AccordionItemContext)!
    const isOpen = activeItems.includes(value)

    return (
      <h3 className="flex">
        <button
          ref={ref}
          type="button"
          onClick={() => toggleItem(value)}
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
    const { activeItems } = useContext(AccordionContext)!
    const { value } = useContext(AccordionItemContext)!
    const isOpen = activeItems.includes(value)

    if (!isOpen) return null

    return (
      <MotionPrimitive animation="fade">
        <div
          ref={ref}
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
