import React, { createContext, useContext, useState, forwardRef, useId, type ReactNode } from "react"
import { useEscapeKey } from "../../hooks/use-escape-key"
import { useFocusTrap } from "../../primitives/FocusTrap"
import { Portal } from "../../primitives/Portal"
import { cn } from "../../utils/cn"
import "./dialog.css"

interface DialogContextType {
  open: boolean
  setOpen: (open: boolean) => void
  titleId: string
  descriptionId: string
}

const DialogContext = createContext<DialogContextType | undefined>(undefined)

const useDialog = () => {
  const context = useContext(DialogContext)
  if (!context) throw new Error("useDialog must be used within a Dialog")
  return context
}

interface DialogProps {
  children: ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

/**
 * Accessible modal dialog with focus trap and animations.
 * Zero external dependencies — built on native HTML + ARIA.
 *
 * @example
 * <Dialog>
 *   <DialogTrigger>Open</DialogTrigger>
 *   <DialogPortal>
 *     <DialogOverlay />
 *     <DialogContent>
 *       <DialogTitle>Title</DialogTitle>
 *       <DialogDescription>Description</DialogDescription>
 *     </DialogContent>
 *   </DialogPortal>
 * </Dialog>
 */
const Dialog = ({ children, open: controlledOpen, onOpenChange }: DialogProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false)
  const uniqueId = useId()

  const open = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen
  const setOpen = onOpenChange ?? setUncontrolledOpen

  return (
    <DialogContext.Provider
      value={{
        open,
        setOpen,
        titleId: `dialog-title-${uniqueId}`,
        descriptionId: `dialog-description-${uniqueId}`,
      }}
    >
      {children}
    </DialogContext.Provider>
  )
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
  if (!open) return null
  return <Portal>{children}</Portal>
}

const DialogOverlay = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { setOpen } = useDialog()
    return (
      <div
        ref={ref}
        className={cn("dialog-overlay", className)}
        onClick={() => setOpen(false)}
        aria-hidden="true"
        {...props}
      />
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
      <div
        ref={(node) => {
          ;(trapRef as React.MutableRefObject<HTMLElement | null>).current = node
          if (typeof ref === "function") ref(node)
          else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        tabIndex={-1}
        className={cn("dialog-content", className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
DialogContent.displayName = "DialogContent"

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("dialog-header", className)} {...props} />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("dialog-footer", className)} {...props} />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => {
    const { titleId } = useDialog()
    return (
      <h2 ref={ref} id={titleId} className={cn("dialog-title", className)} {...props}>
        {children}
      </h2>
    )
  }
)
DialogTitle.displayName = "DialogTitle"

const DialogDescription = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    const { descriptionId } = useDialog()
    return <p ref={ref} id={descriptionId} className={cn("dialog-description", className)} {...props} />
  }
)
DialogDescription.displayName = "DialogDescription"

export {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
