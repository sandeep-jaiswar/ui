import React, { createContext, useContext, useState, useRef, useEffect, forwardRef, ReactNode } from "react"
import { createPortal } from "react-dom"
// import { useCore } from "../../core"; // unused
import { cn } from "../../utils/cn"
import { MotionPrimitive } from "../../ux"
// import { InteractiveContainer } from "../../ux"; // unused

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
 *
 * @example
 * <Select value={val} onValueChange={setVal}>
 *   <SelectTrigger>{val}</SelectTrigger>
 *   <SelectContent>
 *     <SelectItem value="apple">Apple</SelectItem>
 *     <SelectItem value="banana">Banana</SelectItem>
 *   </SelectContent>
 * </Select>
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
    const mergedRef = (node: HTMLButtonElement | null) => {
      // Handle both refs
      if (typeof ref === "function") ref(node)
      else if (ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = node

      // Context ref
      if (triggerRef && "current" in triggerRef) {
        ;(triggerRef as React.MutableRefObject<HTMLButtonElement | null>).current = node
      }
    }

    return (
      <button
        ref={mergedRef}
        type="button"
        onClick={() => setOpen(!open)}
        className={cn(
          "flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50",
          className
        )}
        {...props}
      >
        {children}
        {/* Chevron Icon */}
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
  // In a real implementation we'd need a way to map value -> label.
  // For now, we just display the value or placeholder.
  // A robust version would register children items to look up labels.
  return <span>{value || placeholder}</span>
}

// --- Select Content ---
export const SelectContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const { open, setOpen, triggerRef } = useSelect()
    const contentRef = useRef<HTMLDivElement>(null)

    // Simple positioning logic (floating-ui would be better for production)
    const [style, setStyle] = useState<React.CSSProperties>({})

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

    // Click outside to close
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
    }, [open, setOpen])

    if (!open) return null
    if (typeof document === "undefined") return null

    return createPortal(
      <MotionPrimitive animation="scale">
        <div
          ref={(node) => {
            ;(contentRef as React.MutableRefObject<HTMLDivElement | null>).current = node
            if (typeof ref === "function") ref(node)
            else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node
          }}
          style={style}
          className={cn(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white text-gray-950 shadow-md dark:bg-gray-950 dark:text-gray-50",
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
        onClick={() => onValueChange?.(value)}
        className={cn(
          "relative flex w-full cursor-default cursor-pointer items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none select-none hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:hover:bg-gray-800 dark:focus:bg-gray-800 dark:focus:text-gray-50",
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
