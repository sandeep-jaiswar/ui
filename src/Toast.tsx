import React from "react"
import { Icon } from "./Icon"

export interface ToastProps {
  /** Is the toast visible? */
  visible: boolean
  /** Toast title */
  title?: string
  /** Toast message */
  message: string
  /** Toast type */
  type?: "info" | "success" | "warning" | "error"
  /** Toast position */
  position?: "top" | "bottom"
  /** Auto dismiss duration in ms (0 to disable) */
  duration?: number
  /** Show close button */
  showClose?: boolean
  /** Close handler */
  onClose?: () => void
  /** Additional CSS classes */
  className?: string
  /** Test ID for testing */
  testId?: string
}

/** iOS-inspired toast notification component */
export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      visible,
      title,
      message,
      type = "info",
      position = "top",
      duration = 4000,
      showClose = true,
      onClose,
      className = "",
      testId,
      ...props
    },
    ref
  ) => {
    React.useEffect(() => {
      if (visible && duration > 0) {
        const timer = setTimeout(() => {
          onClose?.()
        }, duration)

        return () => clearTimeout(timer)
      }
    }, [visible, duration, onClose])

    if (!visible) return null

    const typeConfig = {
      info: {
        icon: "settings",
        bgColor: "bg-systemBlue-500 dark:bg-systemBlue-600",
        iconColor: "text-white",
      },
      success: {
        icon: "check",
        bgColor: "bg-systemGreen-500 dark:bg-systemGreen-600",
        iconColor: "text-white",
      },
      warning: {
        icon: "settings",
        bgColor: "bg-systemOrange-500 dark:bg-systemOrange-600",
        iconColor: "text-white",
      },
      error: {
        icon: "close",
        bgColor: "bg-systemRed-500 dark:bg-systemRed-600",
        iconColor: "text-white",
      },
    }

    const config = typeConfig[type]
    const positionStyles = position === "top" ? "top-4 animate-slide-down" : "bottom-4 animate-slide-up"

    return (
      <div className={`fixed left-1/2 -translate-x-1/2 transform ${positionStyles} z-toast mx-4 w-full max-w-sm`}>
        <div
          ref={ref}
          className={` ${config.bgColor} animate-fade-in rounded-ios-lg bg-opacity-95 p-4 text-white shadow-modal backdrop-blur-sm dark:bg-opacity-95 ${className} `.trim()}
          role="alert"
          aria-live="polite"
          data-testid={testId}
          {...props}
        >
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex-shrink-0">
              <Icon name={config.icon} size="small" className={config.iconColor} />
            </div>

            <div className="min-w-0 flex-1">
              {title && <h4 className="mb-1 font-semibold text-ios-subhead">{title}</h4>}
              <p className="opacity-90 text-ios-footnote">{message}</p>
            </div>

            {showClose && (
              <button
                type="button"
                onClick={onClose}
                className="flex-shrink-0 text-white opacity-70 transition-opacity hover:opacity-100"
                aria-label="Close notification"
              >
                <Icon name="close" size="small" />
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
)

Toast.displayName = "Toast"
