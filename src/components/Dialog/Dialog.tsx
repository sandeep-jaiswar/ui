import React, { createContext, useContext, useState, ReactNode, forwardRef } from "react"
import { createPortal } from "react-dom"
import { cn } from "../../utils/cn"
import { MotionPrimitive } from "../../ux"

interface DialogContextType {
  open: boolean
  setOpen: (open: boolean) => void
}

const DialogContext = createContext<DialogContextType | undefined>(undefined)

const useDialog = () => {
  const context = useContext(DialogContext)
  if (!context) {
    throw new Error("useDialog must be used within a DialogRoot")
  }
  return context
}

interface DialogProps {
  children: ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

/**
 * Dialog component for modal content.
 * Manages focus, overlay, and animations.
 *
 * @example
 * <Dialog>
 *   <DialogTrigger>Open Modal</DialogTrigger>
 *   <DialogPortal>
 *     <DialogOverlay />
 *     <DialogContent>My Modal Content</DialogContent>
 *   </DialogPortal>
 * </Dialog>
 */
const Dialog = ({ children, open: controlledOpen, onOpenChange }: DialogProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false)

  const open = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen
  const setOpen = onOpenChange || setUncontrolledOpen

  return <DialogContext.Provider value={{ open, setOpen }}>{children}</DialogContext.Provider>
}

const DialogTrigger = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, onClick, children, ...props }, ref) => {
    const { setOpen } = useDialog()
    return (
      <button
        ref={ref}
        type="button"
        className={className}
        onClick={(e) => {
          setOpen(true)
          onClick?.(e)
        }}
        {...props}
      >
        {children}
      </button>
    )
  }
)
DialogTrigger.displayName = "DialogTrigger"

const DialogPortal = ({ children }: { children: ReactNode }) => {
  const { open } = useDialog()

  // In a real generic library, we might need to handle SSR safely (e.g., check for window/document)
  if (typeof document === "undefined") return null

  return open ? createPortal(children, document.body) : null
}

const DialogOverlay = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { setOpen } = useDialog()
    return (
      <MotionPrimitive animation="fade">
        <div
          ref={ref}
          className={cn("fixed inset-0 z-50 bg-black/50 backdrop-blur-sm", className)}
          onClick={() => setOpen(false)}
          {...props}
        />
      </MotionPrimitive>
    )
  }
)
DialogOverlay.displayName = "DialogOverlay"

const DialogContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <MotionPrimitive animation="slide-up">
        <div
          ref={ref}
          className={cn(
            "fixed top-[50%] left-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg duration-200 sm:rounded-lg",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </MotionPrimitive>
    )
  }
)
DialogContent.displayName = "DialogContent"

export { Dialog, DialogTrigger, DialogPortal, DialogOverlay, DialogContent }
