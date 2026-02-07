import React, { createContext, useContext, useState, ReactNode, forwardRef, useId } from "react"
import { createPortal } from "react-dom"
import { useEscapeKey } from "../../hooks/use-escape-key"
import { useFocusTrap } from "../../hooks/use-focus-trap"
import { mergeRefs } from "../../hooks/use-merge-refs"
import { cn } from "../../utils/cn"
import { MotionPrimitive } from "../../ux"

interface DialogContextType {
  open: boolean
  setOpen: (open: boolean) => void
  titleId: string
  descriptionId: string
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
 * Fully accessible with unique IDs for labelling.
 */
const Dialog = ({ children, open: controlledOpen, onOpenChange }: DialogProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false)
  const uniqueId = useId()
  const titleId = `dialog-title-${uniqueId}`
  const descriptionId = `dialog-description-${uniqueId}`

  const open = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen
  const setOpen = onOpenChange || setUncontrolledOpen

  return <DialogContext.Provider value={{ open, setOpen, titleId, descriptionId }}>{children}</DialogContext.Provider>
}

const DialogTrigger = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, onClick, children, ...props }, ref) => {
    const { open, setOpen } = useDialog()
    return (
      <button
        ref={ref}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
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
          className={cn(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80 backdrop-blur-sm",
            className
          )}
          onClick={() => setOpen(false)}
          aria-hidden="true"
          {...props}
        />
      </MotionPrimitive>
    )
  }
)
DialogOverlay.displayName = "DialogOverlay"

const DialogContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const { setOpen, titleId, descriptionId } = useDialog()
    const trapRef = useFocusTrap(true)
    useEscapeKey(() => setOpen(false))

    return (
      <MotionPrimitive animation="slide-up">
        <div
          ref={mergeRefs(ref, trapRef)}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={descriptionId}
          className={cn(
            "bg-background fixed top-[50%] left-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg duration-200 sm:rounded-lg",
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

const DialogTitle = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => {
    const { titleId } = useDialog()
    return (
      <h2
        ref={ref}
        id={titleId}
        className={cn("text-lg leading-none font-semibold tracking-tight", className)}
        {...props}
      >
        {children}
      </h2>
    )
  }
)
DialogTitle.displayName = "DialogTitle"

const DialogDescription = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    const { descriptionId } = useDialog()
    return <p ref={ref} id={descriptionId} className={cn("text-muted-foreground text-sm", className)} {...props} />
  }
)
DialogDescription.displayName = "DialogDescription"

export { Dialog, DialogTrigger, DialogPortal, DialogOverlay, DialogContent, DialogTitle, DialogDescription }
