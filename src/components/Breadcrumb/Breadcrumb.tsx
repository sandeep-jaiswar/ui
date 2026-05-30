import React, { type ReactNode } from "react"
import { cn } from "../../utils/cn"
import "./breadcrumb.css"

interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  separator?: ReactNode
}

/**
 * Breadcrumb for navigation hierarchy.
 * Automatically inserts separators. Zero external dependencies.
 *
 * @example
 * <Breadcrumb>
 *   <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
 *   <BreadcrumbItem><BreadcrumbPage>Current</BreadcrumbPage></BreadcrumbItem>
 * </Breadcrumb>
 */
export const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ children, className, separator = "/", ...props }, ref) => {
    const count = React.Children.count(children)
    return (
      <nav ref={ref} aria-label="breadcrumb" className={cn("breadcrumb", className)} {...props}>
        <ol className="breadcrumb__list">
          {React.Children.map(children, (child, index) => {
            if (!React.isValidElement(child)) return child
            return (
              <>
                {child}
                {index < count - 1 && (
                  <li className="breadcrumb__separator" aria-hidden="true">
                    {separator}
                  </li>
                )}
              </>
            )
          })}
        </ol>
      </nav>
    )
  }
)
Breadcrumb.displayName = "Breadcrumb"

export const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.LiHTMLAttributes<HTMLLIElement>>(
  ({ children, className, ...props }, ref) => (
    <li ref={ref} className={cn("breadcrumb__item", className)} {...props}>
      {children}
    </li>
  )
)
BreadcrumbItem.displayName = "BreadcrumbItem"

export const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ children, className, ...props }, ref) => (
  <a ref={ref} className={cn("breadcrumb__link", className)} {...props}>
    {children}
  </a>
))
BreadcrumbLink.displayName = "BreadcrumbLink"

export const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ children, className, ...props }, ref) => (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("breadcrumb__page", className)}
      {...props}
    >
      {children}
    </span>
  )
)
BreadcrumbPage.displayName = "BreadcrumbPage"

export const BreadcrumbSeparator = ({ children, className }: React.HTMLAttributes<HTMLLIElement>) => (
  <li role="presentation" aria-hidden="true" className={cn("breadcrumb__separator", className)}>
    {children ?? "/"}
  </li>
)
