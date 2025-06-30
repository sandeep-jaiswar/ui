import React from "react"
import { Icon } from "./Icon"

/**
 * Props for the Drawer component
 */
export interface DrawerProps {
  /** Is the drawer open? */
  open: boolean
  /** Close handler */
  onClose: () => void
  /** Drawer position */
  position?: "left" | "right" | "top" | "bottom"
  /** Drawer size */
  size?: "small" | "medium" | "large" | "full"
  /** Drawer title */
  title?: string
  /** Drawer content */
  children: React.ReactNode
  /** Show close button */
  showClose?: boolean
  /** Close on backdrop click */
  closeOnBackdrop?: boolean
  /** Close on escape key */
  closeOnEscape?: boolean
  /** Additional CSS classes */
  className?: string
  /** Test ID for testing */
  testId?: string
}

/**
 * iOS-inspired drawer/sidebar component for displaying content or navigation.
 * 
 * Features:
 * - Multiple positions (left, right, top, bottom)
 * - Various size options
 * - Smooth animations
 * - Backdrop with blur effect
 * - Close button and escape key support
 * - Focus management
 * - Body scroll locking
 * 
 * @example
 * ```tsx
 * <Drawer
 *   open={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   position="right"
 *   title="Settings"
 * >
 *   <List variant="plain">
 *     <ListItem>Profile</ListItem>
 *     <ListItem>Notifications</ListItem>
 *     <ListItem>Privacy</ListItem>
 *   </List>
 * </Drawer>
 * ```
 */
export const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      open,
      onClose,
      position = "right",
      size = "medium",
      title,
      children,
      showClose = true,
      closeOnBackdrop = true,
      closeOnEscape = true,
      className = "",
      testId,
      ...props
    },
    ref
  ) => {
    /**
     * Handle escape key press to close drawer
     */
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

    /**
     * Manage body scroll lock when drawer is open
     */
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

    /**
     * Handles backdrop click to close drawer if enabled
     */
    const handleBackdropClick = (e: React.MouseEvent) => {
      if (closeOnBackdrop && e.target === e.currentTarget) {
        onClose()
      }
    }

    const sizeStyles = {
      small: {
        left: "w-64",
        right: "w-64",
        top: "h-48",
        bottom: "h-48",
      },
      medium: {
        left: "w-80",
        right: "w-80",
        top: "h-64",
        bottom: "h-64",
      },
      large: {
        left: "w-96",
        right: "w-96",
        top: "h-80",
        bottom: "h-80",
      },
      full: {
        left: "w-full",
        right: "w-full",
        top: "h-full",
        bottom: "h-full",
      },
    }

    const positionStyles = {
      left: "left-0 top-0 h-full",
      right: "right-0 top-0 h-full",
      top: "top-0 left-0 w-full",
      bottom: "bottom-0 left-0 w-full",
    }

    const transformStyles = {
      left: open ? "translate-x-0" : "-translate-x-full",
      right: open ? "translate-x-0" : "translate-x-full",
      top: open ? "translate-y-0" : "-translate-y-full",
      bottom: open ? "translate-y-0" : "translate-y-full",
    }

    if (!open) return null

    return (
      <div className="fixed inset-0 z-modal flex" onClick={handleBackdropClick} data-testid={testId}>
        {/* Backdrop */}
        <div className="animate-fade-in absolute inset-0 bg-black/50 backdrop-blur-sm" />

        {/* Drawer */}
        <div
          ref={ref}
          className={`absolute ${positionStyles[position]} ${sizeStyles[size][position]} transform bg-background-primary shadow-modal transition-transform duration-300 ease-ios dark:bg-background-secondary-dark ${transformStyles[position]} ${className} `.trim()}
          {...props}
        >
          {/* Header */}
          {(title || showClose) && (
            <div className="flex items-center justify-between border-b border-separator-nonOpaque p-4 dark:border-separator-nonOpaque-dark">
              {title && (
                <h2 className="font-semibold text-label-primary text-ios-headline dark:text-label-primary-dark">
                  {title}
                </h2>
              )}
              {showClose && (
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-ios p-1 text-label-tertiary transition-colors hover:bg-fill-quaternary hover:text-label-primary dark:text-label-tertiary-dark dark:hover:bg-fill-quaternary-dark dark:hover:text-label-primary-dark"
                  aria-label="Close drawer"
                >
                  <Icon name="close" size="medium" />
                </button>
              )}
            </div>
          )}

          {/* Content */}
          <div className="flex-1 overflow-auto p-4">{children}</div>
        </div>
      </div>
    )
  }
)

Drawer.displayName = "Drawer"