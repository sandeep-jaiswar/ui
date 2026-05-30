import React from "react"
import { cn } from "../../utils/cn"
import "./alert.css"

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "destructive" | "success" | "warning" | "info"
}

/**
 * Alert component for displaying important messages.
 * Supports various severity variants. Zero external dependencies.
 *
 * @example
 * <Alert variant="destructive">
 *   <AlertTitle>Error</AlertTitle>
 *   <AlertDescription>Something went wrong.</AlertDescription>
 * </Alert>
 */
export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <div ref={ref} role="alert" data-variant={variant} className={cn("alert", className)} {...props} />
  )
)
Alert.displayName = "Alert"

export const AlertTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => (
    <h5 ref={ref} className={cn("alert-title", className)} {...props}>
      {children}
    </h5>
  )
)
AlertTitle.displayName = "AlertTitle"

export const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => <p ref={ref} className={cn("alert-description", className)} {...props} />
)
AlertDescription.displayName = "AlertDescription"
