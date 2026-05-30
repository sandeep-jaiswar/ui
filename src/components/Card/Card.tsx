import React, { forwardRef } from "react"
import { cn } from "../../utils/cn"
import "./card.css"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "surface" | "ghost" | "glass"
  hoverEffect?: "lift" | "glow" | "none"
}

/**
 * Card component for containing related content and actions.
 * Supports surface/ghost/glass variants and lift/glow hover effects.
 * Zero external dependencies.
 *
 * @example
 * <Card>
 *   <CardHeader><CardTitle>Title</CardTitle></CardHeader>
 *   <CardContent>Content</CardContent>
 * </Card>
 *
 * @example
 * <Card variant="glass" hoverEffect="lift">Glassmorphism card</Card>
 */
const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "surface", hoverEffect = "none", children, ...props }, ref) => (
    <div ref={ref} data-variant={variant} data-hover={hoverEffect} className={cn("card", className)} {...props}>
      {children}
    </div>
  )
)
Card.displayName = "Card"

const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("card__header", className)} {...props} />
))
CardHeader.displayName = "CardHeader"

const CardTitle = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => (
    <h3 ref={ref} className={cn("card__title", className)} {...props}>
      {children}
    </h3>
  )
)
CardTitle.displayName = "CardTitle"

const CardDescription = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => <p ref={ref} className={cn("card__description", className)} {...props} />
)
CardDescription.displayName = "CardDescription"

const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("card__content", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("card__footer", className)} {...props} />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
