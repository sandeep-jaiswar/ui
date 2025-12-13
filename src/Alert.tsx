import React from "react"
import { Button } from "./Button"

/**
 * Configuration for an alert action button
 */
export interface AlertAction {
  /** Text displayed on the button */
  label: string
  /** Visual style of the button */
  style?: "default" | "destructive" | "cancel"
  /** Callback fired when the action is pressed */
  onPress: () => void
}

/**
 * Props for the Alert component
 */
export interface AlertProps {
  /** Whether the alert is currently visible */
  visible: boolean
  /** Alert title (optional) */
  title?: string
  /** Alert message content */
  message?: string
  /** Array of action buttons to display */
  actions?: AlertAction[]
  /** Alert presentation style */
  type?: "alert" | "actionSheet"
  /** Callback fired when the alert should be closed */
  onClose?: () => void
  /** Additional CSS classes to apply */
  className?: string
  /** Test identifier for automated testing */
  testId?: string
}

/**
 * iOS-inspired alert component following Apple's alert design patterns.
 * Supports both modal alerts and action sheets with proper accessibility features.
 *
 * Features:
 * - Focus management and keyboard navigation
 * - Screen reader support with proper ARIA attributes
 * - Backdrop click and escape key handling
 * - Smooth animations and transitions
 *
 * @example
 * ```tsx
 * <Alert
 *   visible={showAlert}
 *   title="Delete Item"
 *   message="Are you sure you want to delete this item?"
 *   actions={[
 *     { label: "Cancel", style: "cancel", onPress: () => setShowAlert(false) },
 *     { label: "Delete", style: "destructive", onPress: handleDelete }
 *   ]}
 *   onClose={() => setShowAlert(false)}
 * />
 * ```
 */
export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ visible, title, message, actions = [], type = "alert", onClose, className = "", testId, ...props }, ref) => {
    const alertRef = React.useRef<HTMLDivElement>(null)
    const firstActionRef = React.useRef<HTMLButtonElement>(null)

    // Handle escape key press
    React.useEffect(() => {
      if (!visible) return

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose?.()
        }
      }

      document.addEventListener("keydown", handleEscape)
      return () => document.removeEventListener("keydown", handleEscape)
    }, [visible, onClose])

    // Manage body scroll and focus
    React.useEffect(() => {
      if (visible) {
        // Prevent body scroll
        document.body.style.overflow = "hidden"

        // Focus management - focus first action button or alert itself
        const focusTarget = firstActionRef.current || alertRef.current
        if (focusTarget) {
          focusTarget.focus()
        }
      } else {
        document.body.style.overflow = ""
      }

      return () => {
        document.body.style.overflow = ""
      }
    }, [visible])

    /**
     * Handles backdrop click events
     */
    const handleBackdropClick = (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        onClose?.()
      }
    }

    /**
     * Handles action button press
     */
    const handleActionPress = (action: AlertAction) => {
      action.onPress()
      if (action.style === "cancel") {
        onClose?.()
      }
    }

    /**
     * Handles keyboard navigation within the alert
     */
    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "Tab") {
        // Implement focus trap here if needed
        // For now, let default tab behavior work within the alert
      }
    }

    if (!visible) return null

    const isActionSheet = type === "actionSheet"

    return (
      <div
        className="fixed inset-0 z-modal flex items-center justify-center p-4"
        onClick={handleBackdropClick}
        data-testid={testId}
        role="presentation"
      >
        {/* Backdrop */}
        <div className="animate-fade-in absolute inset-0 bg-black/50 backdrop-blur-sm" />

        {/* Alert */}
        <div
          ref={(node) => {
            alertRef.current = node
            if (typeof ref === "function") {
              ref(node)
            } else if (ref) {
              ref.current = node
            }
          }}
          className={`animate-scale-in relative w-full max-w-sm overflow-hidden rounded-ios-xl bg-background-primary shadow-modal focus:outline-none dark:bg-background-secondary-dark ${
            isActionSheet ? "mb-4" : ""
          } ${className} `.trim()}
          role="alertdialog"
          aria-modal="true"
          aria-labelledby={title ? "alert-title" : undefined}
          aria-describedby={message ? "alert-message" : undefined}
          tabIndex={-1}
          onKeyDown={handleKeyDown}
          {...props}
        >
          {/* Content */}
          <div className={`p-6 text-center ${isActionSheet ? "pb-4" : ""}`}>
            {title && (
              <h2
                id="alert-title"
                className="mb-2 font-semibold text-label-primary text-ios-headline dark:text-label-primary-dark"
              >
                {title}
              </h2>
            )}
            {message && (
              <p id="alert-message" className="text-label-secondary text-ios-subhead dark:text-label-secondary-dark">
                {message}
              </p>
            )}
          </div>

          {/* Actions */}
          {actions.length > 0 && (
            <div
              className={` ${
                isActionSheet
                  ? "space-y-1 p-2"
                  : "border-t border-separator-nonOpaque dark:border-separator-nonOpaque-dark"
              } ${!isActionSheet && actions.length === 2 ? "flex" : ""} `}
              role="group"
              aria-label="Alert actions"
            >
              {actions.map((action, index) => {
                const isDestructive = action.style === "destructive"
                const isCancel = action.style === "cancel"
                const isFirst = index === 0

                if (isActionSheet) {
                  return (
                    <Button
                      key={index}
                      ref={isFirst ? firstActionRef : undefined}
                      variant={isDestructive ? "destructive" : isCancel ? "secondary" : "ghost"}
                      fullWidth
                      onClick={() => handleActionPress(action)}
                      className="justify-center"
                    >
                      {action.label}
                    </Button>
                  )
                }

                return (
                  <button
                    key={index}
                    ref={isFirst ? firstActionRef : undefined}
                    onClick={() => handleActionPress(action)}
                    className={`flex-1 px-4 py-3 font-medium transition-colors text-ios-body focus:outline-none focus-visible:ring-2 focus-visible:ring-systemBlue-500 focus-visible:ring-offset-2 ${
                      isDestructive
                        ? "text-systemRed-500 dark:text-systemRed-400"
                        : isCancel
                        ? "text-label-secondary dark:text-label-secondary-dark"
                        : "text-systemBlue-500 dark:text-systemBlue-400"
                    } hover:bg-fill-quaternary dark:hover:bg-fill-quaternary-dark ${
                      actions.length === 2 && index === 0
                        ? "border-r border-separator-nonOpaque dark:border-separator-nonOpaque-dark"
                        : ""
                    } ${
                      actions.length > 2 && index < actions.length - 1
                        ? "border-b border-separator-nonOpaque dark:border-separator-nonOpaque-dark"
                        : ""
                    } `}
                  >
                    {action.label}
                  </button>
                )
              })}
            </div>
          )}
        </div>
      </div>
    )
  }
)

Alert.displayName = "Alert"
