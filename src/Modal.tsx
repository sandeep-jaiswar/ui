import React from "react"

export interface ModalProps {
  /** Is the modal open? */
  open: boolean
  /** Close handler */
  onClose: () => void
  /** Modal title */
  title?: string
  /** Modal content */
  children: React.ReactNode
  /** Modal size */
  size?: "small" | "medium" | "large" | "fullscreen"
  /** Show close button */
  showCloseButton?: boolean
  /** Close on backdrop click */
  closeOnBackdrop?: boolean
  /** Close on escape key */
  closeOnEscape?: boolean
  /** Additional CSS classes */
  className?: string
  /** Test ID for testing */
  testId?: string
}

/** iOS-inspired modal component with backdrop and animations */
export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      open,
      onClose,
      title,
      children,
      size = "medium",
      showCloseButton = true,
      closeOnBackdrop = true,
      closeOnEscape = true,
      className = "",
      testId,
      ...props
    },
    ref
  ) => {
    const modalRef = React.useRef<HTMLDivElement>(null)

    // Handle escape key
    React.useEffect(() => {
      if (!open || !closeOnEscape) return

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose()
        }
      }

      document.addEventListener("keydown", handleEscape)
      return () => document.removeEventListener("keydown", handleEscape)
    }, [open, closeOnEscape, onClose])

    // Focus management
    React.useEffect(() => {
      if (!open) return

      const previousActiveElement = document.activeElement as HTMLElement

      // Focus the modal
      if (modalRef.current) {
        modalRef.current.focus()
      }

      return () => {
        // Restore focus
        if (previousActiveElement) {
          previousActiveElement.focus()
        }
      }
    }, [open])

    // Prevent body scroll when modal is open
    React.useEffect(() => {
      if (open) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = ""
      }

      return () => {
        document.body.style.overflow = ""
      }
    }, [open])

    const handleBackdropClick = (e: React.MouseEvent) => {
      if (closeOnBackdrop && e.target === e.currentTarget) {
        onClose()
      }
    }

    const sizeStyles = {
      small: "max-w-sm",
      medium: "max-w-md",
      large: "max-w-2xl",
      fullscreen: "max-w-none w-full h-full m-0 rounded-none",
    }

    if (!open) return null

    return (
      <div
        className="fixed inset-0 z-modal flex items-center justify-center p-4"
        onClick={handleBackdropClick}
        data-testid={testId}
      >
        {/* Backdrop */}
        <div className="animate-fade-in absolute inset-0 bg-black/50 backdrop-blur-sm" />

        {/* Modal */}
        <div
          ref={modalRef}
          className={`animate-scale-in relative max-h-full overflow-hidden rounded-ios-xl bg-background-primary shadow-modal focus:outline-none dark:bg-background-secondary-dark ${sizeStyles[size]} ${className} `.trim()}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? "modal-title" : undefined}
          tabIndex={-1}
          {...props}
        >
          {/* Header */}
          {(title || showCloseButton) && (
            <div className="flex items-center justify-between border-b border-separator-nonOpaque p-6 dark:border-separator-nonOpaque-dark">
              {title && (
                <h2
                  id="modal-title"
                  className="font-semibold text-label-primary text-ios-headline dark:text-label-primary-dark"
                >
                  {title}
                </h2>
              )}
              {showCloseButton && (
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-ios p-1 text-label-tertiary transition-colors hover:bg-fill-quaternary hover:text-label-primary dark:text-label-tertiary-dark dark:hover:bg-fill-quaternary-dark dark:hover:text-label-primary-dark"
                  aria-label="Close modal"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
                  </svg>
                </button>
              )}
            </div>
          )}

          {/* Content */}
          <div className={`${size === "fullscreen" ? "flex-1 overflow-auto" : ""} p-6`}>{children}</div>
        </div>
      </div>
    )
  }
)

Modal.displayName = "Modal"
