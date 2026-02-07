import React, { createContext, useContext, useState, useRef, useEffect, forwardRef, ReactNode } from "react"
import { createPortal } from "react-dom"
import { useEscapeKey } from "../../hooks/use-escape-key"
import { mergeRefs } from "../../hooks/use-merge-refs"
import { cn } from "../../utils/cn"
import { MotionPrimitive } from "../../ux"

// --- Select Context ---
interface SelectContextType {
  value?: string
  onValueChange?: (value: string) => void
  open: boolean
  setOpen: (open: boolean) => void
  triggerRef: React.RefObject<HTMLButtonElement | null>
}

const SelectContext = createContext<SelectContextType | undefined>(undefined)

const useSelect = () => {
  const context = useContext(SelectContext)
  if (!context) {
    throw new Error("useSelect must be used within a SelectRoot")
  }
  return context
}

// --- Select Root ---
export interface SelectProps {
  children: ReactNode
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

/**
 * Select component for picking a value from a list.
 * Composed of SelectTrigger, SelectContent, and SelectItem.
 * Fully accessible with keyboard navigation and ARIA support.
 */
export const Select = ({
  children,
  value: controlledValue,
  defaultValue,
  onValueChange,
  open: controlledOpen,
  onOpenChange,
}: SelectProps) => {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue)
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)

  const value = controlledValue !== undefined ? controlledValue : uncontrolledValue
  const open = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen

  const setOpen = (newOpen: boolean) => {
    if (onOpenChange) {
      onOpenChange(newOpen)
    } else {
      setUncontrolledOpen(newOpen)
    }
  }

  const handleValueChange = (newValue: string) => {
    if (controlledValue === undefined) {
      setUncontrolledValue(newValue)
    }
    onValueChange?.(newValue)
    setOpen(false) // Close on select
    // Return focus to trigger
    setTimeout(() => {
      triggerRef.current?.focus()
    }, 0)
  }

  return (
    <SelectContext.Provider value={{ value, onValueChange: handleValueChange, open, setOpen, triggerRef }}>
      {children}
    </SelectContext.Provider>
  )
}

// --- Select Trigger ---
export const SelectTrigger = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...props }, ref) => {
    const { open, setOpen, triggerRef } = useSelect()
    const mergedRef = mergeRefs(ref, triggerRef)

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        setOpen(true)
      }
    }

    return (
      <button
        ref={mergedRef}
        type="button"
        role="combobox"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls="select-content"
        onClick={() => setOpen(!open)}
        onKeyDown={handleKeyDown}
        className={cn(
          "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
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
          className={cn("h-4 w-4 opacity-50 transition-transform", open && "rotate-180")}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
    )
  }
)
SelectTrigger.displayName = "SelectTrigger"

export const SelectValue = ({ placeholder }: { placeholder?: string }) => {
  const { value } = useSelect()
  return <span>{value || placeholder}</span>
}

// --- Select Content ---
export const SelectContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const { open, setOpen, triggerRef } = useSelect()
    const contentRef = useRef<HTMLDivElement>(null)
    const [style, setStyle] = useState<React.CSSProperties>({})
    const searchRef = useRef("")
    const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null)

    useEscapeKey(() => {
      setOpen(false)
      triggerRef.current?.focus()
    }, open)

    // Positioning
    useEffect(() => {
      if (open && triggerRef.current) {
        const rect = triggerRef.current.getBoundingClientRect()
        setStyle({
          position: "absolute",
          top: rect.bottom + window.scrollY + 4 + "px",
          left: rect.left + window.scrollX + "px",
          width: rect.width + "px",
          zIndex: 50,
        })
      }
    }, [open, triggerRef])

    // Focus management on open
    useEffect(() => {
      if (open && contentRef.current) {
        // Find selected item or first item
        requestAnimationFrame(() => {
          const content = contentRef.current
          if (!content) return
          const options = Array.from(content.querySelectorAll('[role="option"]')) as HTMLElement[]
          const selectedOption = options.find((opt) => opt.getAttribute("aria-selected") === "true")
          const target = selectedOption || options[0]
          target?.focus()
        })
      }
    }, [open])

    // Click outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          contentRef.current &&
          !contentRef.current.contains(event.target as Node) &&
          triggerRef.current &&
          !triggerRef.current.contains(event.target as Node)
        ) {
          setOpen(false)
        }
      }
      if (open) {
        document.addEventListener("mousedown", handleClickOutside)
      }
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }, [open, setOpen, triggerRef])

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (!contentRef.current) return

      const options = Array.from(contentRef.current.querySelectorAll('[role="option"]')) as HTMLElement[]
      const currentIndex = options.indexOf(document.activeElement as HTMLElement)

      if (e.key === "ArrowDown") {
        e.preventDefault()
        const nextIndex = (currentIndex + 1) % options.length
        options[nextIndex]?.focus()
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        const prevIndex = (currentIndex - 1 + options.length) % options.length
        options[prevIndex]?.focus()
      } else if (e.key === "Home") {
        e.preventDefault()
        options[0]?.focus()
      } else if (e.key === "End") {
        e.preventDefault()
        options[options.length - 1]?.focus()
      } else if (e.key === "Tab") {
        e.preventDefault()
        setOpen(false)
        triggerRef.current?.focus()
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
          ; (document.activeElement as HTMLElement)?.click()
      } else if (e.key.length === 1) {
        // Typeahead
        if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current)
        searchRef.current += e.key.toLowerCase()

        const match = options.find((opt) => opt.textContent?.toLowerCase().startsWith(searchRef.current))
        if (match) match.focus()

        searchTimeoutRef.current = setTimeout(() => {
          searchRef.current = ""
        }, 500)
      }
    }

    if (!open) return null
    if (typeof document === "undefined") return null

    return createPortal(
      <MotionPrimitive animation="scale">
        <div
          ref={mergeRefs(contentRef, ref)}
          style={style}
          id="select-content"
          role="listbox"
          tabIndex={-1}
          onKeyDown={handleKeyDown}
          className={cn(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 relative z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover text-popover-foreground shadow-md",
            className
          )}
          {...props}
        >
          <div className="p-1">{children}</div>
        </div>
      </MotionPrimitive>,
      document.body
    )
  }
)
SelectContent.displayName = "SelectContent"

// --- Select Item ---
export interface SelectItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

export const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ className, children, value, ...props }, ref) => {
    const { onValueChange, value: selectedValue } = useSelect()
    const isSelected = selectedValue === value

    return (
      <div
        ref={ref}
        role="option"
        aria-selected={isSelected}
        tabIndex={-1}
        onClick={() => onValueChange?.(value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            e.stopPropagation()
            onValueChange?.(value)
          }
        }}
        onMouseEnter={(e) => e.currentTarget.focus()}
        className={cn(
          "relative flex w-full cursor-pointer items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
          className
        )}
        {...props}
      >
        {/* Checkmark */}
        {isSelected && (
          <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
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
              className="h-4 w-4"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
        )}
        {children}
      </div>
    )
  }
)
SelectItem.displayName = "SelectItem"
