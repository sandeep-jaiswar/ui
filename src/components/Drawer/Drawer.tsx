import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react"
import { Portal } from "../../primitives/Portal"
import { useFocusTrap } from "../../primitives/FocusTrap"
import { useEscapeKey } from "../../hooks/use-escape-key"
import { mergeRefs } from "../../hooks/use-merge-refs"
import { cn } from "../../utils/cn"
import "./drawer.css"

interface DrawerContextType {
  open: boolean
  setOpen: (open: boolean) => void
}

const DrawerContext = createContext<DrawerContextType | undefined>(undefined)

const useDrawer = () => {
  const ctx = useContext(DrawerContext)
  if (!ctx) throw new Error("useDrawer must be used within a Drawer")
  return ctx
}

interface DrawerProps {
  children: ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

/**
 * Drawer for sliding panel overlays.
 * Supports left/right/top/bottom positioning.
 * Zero external dependencies.
 *
 * @example
 * <Drawer>
 *   <DrawerTrigger>Open</DrawerTrigger>
 *   <DrawerContent side="right">Content</DrawerContent>
 * </Drawer>
 */
export const Drawer = ({ children, open: controlledOpen, onOpenChange }: DrawerProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false)
  const isControlled = controlledOpen !== undefined
  const open = isControlled ? controlledOpen! : uncontrolledOpen
  const setOpen = isControlled ? onOpenChange! : setUncontrolledOpen

  return (
    <DrawerContext.Provider value={{ open, setOpen }}>
      {children}
    </DrawerContext.Provider>
  )
}

interface DrawerTriggerProps {
  children: ReactNode
  className?: string
}

export const DrawerTrigger = ({ children, className }: DrawerTriggerProps) => {
  const { open, setOpen } = useDrawer()
  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      aria-expanded={open}
      aria-haspopup="dialog"
      className={cn("drawer-trigger", className)}
    >
      {children}
    </button>
  )
}

interface DrawerContentProps extends React.HTMLAttributes<HTMLDivElement> {
  side?: "left" | "right" | "top" | "bottom"
}

export const DrawerContent = React.forwardRef<HTMLDivElement, DrawerContentProps>(
  ({ children, className, side = "right", ...props }, ref) => {
    const { open, setOpen } = useDrawer()
    const trapRef = useFocusTrap(open)
    useEscapeKey(() => setOpen(false), open)

    if (!open) return null

    return (
      <Portal>
        <div
          className="drawer-overlay"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
        <div
          ref={mergeRefs(ref, trapRef as React.Ref<HTMLDivElement>)}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          data-side={side}
          className={cn("drawer-content", className)}
          {...props}
        >
          {children}
        </div>
      </Portal>
    )
  }
)
DrawerContent.displayName = "DrawerContent"

export const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("drawer-header", className)} {...props} />
)
DrawerHeader.displayName = "DrawerHeader"

export const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("drawer-footer", className)} {...props} />
)
DrawerFooter.displayName = "DrawerFooter"

export const DrawerTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => (
    <h2 ref={ref} className={cn("drawer-title", className)} {...props}>
      {children}
    </h2>
  )
)
DrawerTitle.displayName = "DrawerTitle"

export const DrawerDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("drawer-description", className)} {...props} />
  )
)
DrawerDescription.displayName = "DrawerDescription"
