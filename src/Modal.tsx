import React from "react"

/**
 * Props for the Modal component
 */
export interface ModalProps {
  /** Whether the modal is currently open/visible */
  open: boolean
  /** Callback fired when the modal should be closed */
  onClose: () => void
  /** Optional title displayed in the modal header */
  title?: string
  /** Modal content */
  children: React.ReactNode
  /** Size variant affecting modal dimensions */
  size?: "small" | "medium" | "large" | "fullscreen"
  /** Whether to show the close button in the header */
  showCloseButton?: boolean
  /** Whether clicking the backdrop should close the modal */
  closeOnBackdrop?: boolean
  /** Whether pressing Escape should close the modal */
  closeOnEscape?: boolean
  /** Additional CSS classes to apply */
  className?: string
  /** Test identifier for automated testing */
  testId?: string
}

/**
 * iOS-inspired modal component with backdrop, animations, and comprehensive accessibility features.
 *
 * Features:
 * - Focus management with focus trap
 * - Keyboard navigation (Escape to close, Tab cycling)
 * - Screen reader support with proper ARIA attributes
 * - Body scroll prevention when open
 * - Smooth animations for enter/exit
 * - Multiple size variants including fullscreen
 * - Configurable close behaviors
 *
 * @example
 * ```tsx
 * <Modal
 *   open={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   title="Settings"
 *   size="medium"
 *   closeOnBackdrop={true}
 * >
 *   <p>Modal content goes here</p>
 * </Modal>
 * ```
 */
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
    const previousActiveElement = React.useRef<HTMLElement | null>(null)

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

    // Focus management and body scroll prevention
    React.useEffect(() => {
      if (!open) return

      // Store the currently focused element
      previousActiveElement.current = document.activeElement as HTMLElement

      // Prevent body scroll
      document.body.style.overflow = "hidden"

      // Focus the modal
      if (modalRef.current) {
        modalRef.current.focus()
      }

      return () => {
        // Restore body scroll
        document.body.style.overflow = ""

        // Restore focus to the previously focused element
        if (previousActiveElement.current) {
          previousActiveElement.current.focus()
        }
      }
    }, [open])

    /**
     * Handles backdrop click events
     */
    const handleBackdropClick = (e: React.MouseEvent) => {
      if (closeOnBackdrop && e.target === e.currentTarget) {
        onClose()
      }
    }

    /**
     * Implements focus trap within the modal
     */
    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "Tab") {
        const modal = modalRef.current
        if (!modal) return

        const focusableElements = modal.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        const firstElement = focusableElements[0] as HTMLElement
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement?.focus()
          }
        } else {
          // Tab
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement?.focus()
          }
        }
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
        role="presentation"
      >
        {/* Backdrop */}
        <div className="animate-fade-in absolute inset-0 bg-black/50 backdrop-blur-sm" />

        {/* Modal */}
        <div
          ref={(node) => {
            modalRef.current = node
            if (typeof ref === "function") {
              ref(node)
            } else if (ref) {
              ref.current = node
            }
          }}
          className={`animate-scale-in relative max-h-full overflow-hidden rounded-ios-xl bg-background-primary shadow-modal focus:outline-none dark:bg-background-secondary-dark ${sizeStyles[size]} ${className} `.trim()}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? "modal-title" : undefined}
          tabIndex={-1}
          onKeyDown={handleKeyDown}
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
                  className="rounded-ios p-1 text-label-tertiary transition-colors hover:bg-fill-quaternary hover:text-label-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-systemBlue-500 focus-visible:ring-offset-2 dark:text-label-tertiary-dark dark:hover:bg-fill-quaternary-dark dark:hover:text-label-primary-dark"
                  aria-label="Close modal"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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