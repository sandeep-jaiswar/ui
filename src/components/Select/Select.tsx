import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  forwardRef,
  type ReactNode,
} from "react"
import { Portal } from "../../primitives/Portal"
import { useEscapeKey } from "../../hooks/use-escape-key"
import { mergeRefs } from "../../hooks/use-merge-refs"
import { cn } from "../../utils/cn"
import "./select.css"

interface SelectContextType {
  value?: string
  onValueChange?: (value: string) => void
  open: boolean
  setOpen: (open: boolean) => void
  triggerRef: React.RefObject<HTMLButtonElement | null>
  contentId: string
}

const SelectContext = createContext<SelectContextType | undefined>(undefined)

const useSelect = () => {
  const ctx = useContext(SelectContext)
  if (!ctx) throw new Error("useSelect must be used within a Select")
  return ctx
}

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
 * Fully accessible with keyboard navigation and ARIA.
 * Zero external dependencies.
 *
 * @example
 * <Select defaultValue="apple" onValueChange={setValue}>
 *   <SelectTrigger><SelectValue placeholder="Pick a fruit" /></SelectTrigger>
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
  const contentId = React.useId()

  const value = controlledValue !== undefined ? controlledValue : uncontrolledValue
  const open = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen

  const setOpen = (newOpen: boolean) => {
    onOpenChange ? onOpenChange(newOpen) : setUncontrolledOpen(newOpen)
  }

  const handleValueChange = (newValue: string) => {
    if (controlledValue === undefined) setUncontrolledValue(newValue)
    onValueChange?.(newValue)
    setOpen(false)
    setTimeout(() => triggerRef.current?.focus(), 0)
  }

  return (
    <SelectContext.Provider
      value={{ value, onValueChange: handleValueChange, open, setOpen, triggerRef, contentId }}
    >
      <div className="select-wrapper">{children}</div>
    </SelectContext.Provider>
  )
}

export const SelectTrigger = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...props }, ref) => {
    const { open, setOpen, triggerRef, contentId } = useSelect()
    const mergedRef = mergeRefs(ref, triggerRef)

    return (
      <button
        ref={mergedRef}
        type="button"
        role="combobox"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={contentId}
        data-open={open ? "true" : undefined}
        onClick={() => setOpen(!open)}
        onKeyDown={(e) => {
          if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
            e.preventDefault()
            setOpen(true)
          }
        }}
        className={cn("select-trigger", className)}
        {...props}
      >
        {children}
        <svg
          className="select-trigger__chevron"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
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
  return (
    <span className={value ? undefined : "select-trigger__placeholder"}>
      {value ?? placeholder}
    </span>
  )
}

export const SelectContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const { open, setOpen, triggerRef, contentId } = useSelect()
    const contentRef = useRef<HTMLDivElement>(null)
    const searchRef = useRef("")
    const searchTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    useEscapeKey(() => {
      setOpen(false)
      triggerRef.current?.focus()
    }, open)

    // Focus first/selected item on open
    useEffect(() => {
      if (!open || !contentRef.current) return
      requestAnimationFrame(() => {
        const options = Array.from(
          contentRef.current!.querySelectorAll<HTMLElement>('[role="option"]')
        )
        const selected = options.find((o) => o.getAttribute("aria-selected") === "true")
        ;(selected ?? options[0])?.focus()
      })
    }, [open])

    // Click outside
    useEffect(() => {
      if (!open) return
      const handleClick = (e: MouseEvent) => {
        if (
          !contentRef.current?.contains(e.target as Node) &&
          !triggerRef.current?.contains(e.target as Node)
        ) {
          setOpen(false)
        }
      }
      document.addEventListener("mousedown", handleClick)
      return () => document.removeEventListener("mousedown", handleClick)
    }, [open, setOpen, triggerRef])

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (!contentRef.current) return
      const options = Array.from(
        contentRef.current.querySelectorAll<HTMLElement>('[role="option"]')
      )
      const idx = options.indexOf(document.activeElement as HTMLElement)

      switch (e.key) {
        case "ArrowDown": e.preventDefault(); options[(idx + 1) % options.length]?.focus(); break
        case "ArrowUp":   e.preventDefault(); options[(idx - 1 + options.length) % options.length]?.focus(); break
        case "Home":      e.preventDefault(); options[0]?.focus(); break
        case "End":       e.preventDefault(); options[options.length - 1]?.focus(); break
        case "Tab":       e.preventDefault(); setOpen(false); triggerRef.current?.focus(); break
        case "Enter":
        case " ":         e.preventDefault(); ;(document.activeElement as HTMLElement)?.click(); break
        default:
          if (e.key.length === 1) {
            if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current)
            searchRef.current += e.key.toLowerCase()
            const match = options.find((o) => o.textContent?.toLowerCase().startsWith(searchRef.current))
            match?.focus()
            searchTimeoutRef.current = setTimeout(() => { searchRef.current = "" }, 500)
          }
      }
    }

    if (!open) return null

    return (
      <Portal>
        <div
          ref={mergeRefs(contentRef, ref)}
          id={contentId}
          role="listbox"
          tabIndex={-1}
          onKeyDown={handleKeyDown}
          className={cn("select-content", className)}
          {...props}
        >
          {children}
        </div>
      </Portal>
    )
  }
)
SelectContent.displayName = "SelectContent"

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
        data-selected={isSelected ? "true" : undefined}
        tabIndex={-1}
        onClick={() => onValueChange?.(value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            onValueChange?.(value)
          }
        }}
        onMouseEnter={(e) => e.currentTarget.focus()}
        className={cn("select-item", className)}
        {...props}
      >
        {isSelected && (
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
        {children}
      </div>
    )
  }
)
SelectItem.displayName = "SelectItem"

export const SelectSeparator = ({ className }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("select-separator", className)} />
)

export const SelectLabel = ({ className, children }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("select-label", className)}>{children}</div>
)
