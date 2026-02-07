import React, { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { createPortal } from "react-dom"

import { useEscapeKey } from "../../hooks/use-escape-key"
import { useFocusTrap } from "../../hooks/use-focus-trap"
import { mergeRefs } from "../../hooks/use-merge-refs"
import { cn } from "../../utils/cn"

// --- Drawer Context ---
interface DrawerContextType {
  open: boolean
  setOpen: (open: boolean) => void
}

const DrawerContext = createContext<DrawerContextType | undefined>(undefined)

const useDrawer = () => {
  const context = useContext(DrawerContext)
  if (!context) {
    throw new Error("useDrawer must be used within a Drawer")
  }
  return context
}

// --- Drawer Root ---
interface DrawerProps {
  children: ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

/**
 * Drawer component for sliding panels.
 * Supports positioning on all four sides.
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
  const open = isControlled ? controlledOpen : uncontrolledOpen
  const setOpen = isControlled ? onOpenChange! : setUncontrolledOpen

  return <DrawerContext.Provider value={{ open, setOpen }}>{children}</DrawerContext.Provider>
}

// --- Drawer Trigger ---
interface DrawerTriggerProps {
  children: ReactNode
  className?: string
  asChild?: boolean
}

export const DrawerTrigger = ({ children, className, asChild = false }: DrawerTriggerProps) => {
  const { open, setOpen } = useDrawer()

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<React.HTMLAttributes<HTMLElement>>, {
      onClick: (e: React.MouseEvent) => {
        // preserve existing click handler if any
        ; (children as React.ReactElement<React.HTMLAttributes<HTMLElement>>).props.onClick?.(e)
        setOpen(true)
      },
      "aria-expanded": open,
      "aria-haspopup": "dialog",
      // Merge classNames if needed, or just let child control it.
      // Usually triggers don't start with classes unless passed.
    })
  }

  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      aria-expanded={open}
      aria-haspopup="dialog"
      className={cn("inline-flex cursor-pointer border-none bg-transparent p-0", className)}
    >
      {children}
    </button>
  )
}

// --- Drawer Content ---
interface DrawerContentProps extends React.HTMLAttributes<HTMLDivElement> {
  side?: "left" | "right" | "top" | "bottom"
}

export const DrawerContent = React.forwardRef<HTMLDivElement, DrawerContentProps>(
  ({ children, className, side = "right", ...props }, ref) => {
    const { open, setOpen } = useDrawer()
    const [isVisible, setIsVisible] = useState(false)
    const trapRef = useFocusTrap(open)
    useEscapeKey(() => setOpen(false), open)

    useEffect(() => {
      if (open) setIsVisible(true)
      // Delay unmounting for animation?
      // Simple approach: render if open or fading out.
      // Using MotionPrimitive handles entry/exit if configured.
    }, [open])

    if (!open && !isVisible) return null
    if (typeof document === "undefined") return null

    const sideClasses = {
      right:
        "inset-y-0 right-0 h-full w-3/4 border-l border-border sm:max-w-sm data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
      left: "inset-y-0 left-0 h-full w-3/4 border-r border-border sm:max-w-sm data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
      top: "inset-x-0 top-0 h-96 w-full border-b border-border data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
      bottom:
        "inset-x-0 bottom-0 h-96 w-full border-t border-border data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
    }

    return createPortal(
      <>
        {/* Overlay */}
        <div
          className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 cursor-pointer bg-black/80 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          data-state={open ? "open" : "closed"}
          aria-hidden="true"
        />
        {/* Drawer Content */}
        <div
          ref={mergeRefs(ref, trapRef)}
          role="dialog"
          aria-modal="true"
          className={cn(
            "data-[state=open]:animate-in data-[state=closed]:animate-out bg-background fixed z-50 grid gap-4 p-6 shadow-lg transition duration-300 ease-in-out sm:max-w-sm",
            sideClasses[side],
            className
          )}
          data-state={open ? "open" : "closed"}
          {...props}
          onAnimationEnd={() => {
            if (!open) setIsVisible(false)
          }}
        >
          {children}
        </div>
      </>,
      document.body
    )
  }
)
DrawerContent.displayName = "DrawerContent"

// --- Drawer Header/Footer/Title/Desc ---
export const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
)
DrawerHeader.displayName = "DrawerHeader"

export const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
)
DrawerFooter.displayName = "DrawerFooter"

export const DrawerTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => (
    <h2 ref={ref} className={cn("text-foreground text-lg font-semibold", className)} {...props}>
      {children}
    </h2>
  )
)
DrawerTitle.displayName = "DrawerTitle"

export const DrawerDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-muted-foreground text-sm", className)} {...props} />
  )
)
DrawerDescription.displayName = "DrawerDescription"
