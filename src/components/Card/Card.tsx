import React, { forwardRef } from "react"
import { cn } from "../../utils/cn"
import { InteractiveContainer } from "../../ux"
import { CardProps } from "./types"

/**
 * Card component for containing content and actions.
 * Built on InteractiveContainer for hover effects and variants.
 *
 * @example
 * <Card>
 *   <CardHeader><CardTitle>Title</CardTitle></CardHeader>
 *   <CardContent>Content</CardContent>
 * </Card>
 */
const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "surface", hoverEffect = "none", children, ...props }, ref) => {
    return (
      <InteractiveContainer
        ref={ref}
        variant={variant}
        hoverEffect={hoverEffect}
        className={cn("overflow-hidden text-left", className)}
        {...props}
      >
        {children}
      </InteractiveContainer>
    )
  }
)
Card.displayName = "Card"

const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
))
CardHeader.displayName = "CardHeader"

const CardTitle = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-2xl leading-none font-semibold tracking-tight", className)} {...props}>
      {children}
    </h3>
  )
)
CardTitle.displayName = "CardTitle"

const CardDescription = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
)
CardDescription.displayName = "CardDescription"

const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
