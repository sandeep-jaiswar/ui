import React, { createContext, useContext, useState, useRef, type ReactNode } from "react"
import { useEscapeKey } from "../../hooks/use-escape-key"
import { mergeRefs } from "../../hooks/use-merge-refs"
import { cn } from "../../utils/cn"
import "./navigation-menu.css"

interface NavigationMenuContextType {
  value?: string
  onValueChange: (value: string) => void
  listRef: React.RefObject<HTMLUListElement | null>
}

const NavigationMenuContext = createContext<NavigationMenuContextType | undefined>(undefined)

const useNavigationMenu = () => {
  const ctx = useContext(NavigationMenuContext)
  if (!ctx) throw new Error("useNavigationMenu must be used within a NavigationMenu")
  return ctx
}

interface NavigationMenuProps {
  children: ReactNode
  className?: string
}

/**
 * NavigationMenu for complex site navigation with dropdowns.
 * Fully accessible with keyboard navigation. Zero external dependencies.
 *
 * @example
 * <NavigationMenu>
 *   <NavigationMenuList>
 *     <NavigationMenuItem>
 *       <NavigationMenuTrigger value="products">Products</NavigationMenuTrigger>
 *       <NavigationMenuContent value="products">...</NavigationMenuContent>
 *     </NavigationMenuItem>
 *   </NavigationMenuList>
 * </NavigationMenu>
 */
export const NavigationMenu = ({ children, className }: NavigationMenuProps) => {
  const [value, setValue] = useState("")
  const listRef = useRef<HTMLUListElement>(null)

  return (
    <NavigationMenuContext.Provider value={{ value, onValueChange: setValue, listRef }}>
      <nav
        className={cn("nav-menu", className)}
        onMouseLeave={() => setValue("")}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node)) setValue("")
        }}
      >
        {children}
      </nav>
    </NavigationMenuContext.Provider>
  )
}

export const NavigationMenuList = React.forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>(
  ({ children, className, ...props }, ref) => {
    const { listRef } = useNavigationMenu()
    return (
      <ul
        ref={mergeRefs(ref, listRef)}
        className={cn("nav-menu__list", className)}
        {...props}
      >
        {children}
      </ul>
    )
  }
)
NavigationMenuList.displayName = "NavigationMenuList"

export const NavigationMenuItem = React.forwardRef<HTMLLIElement, React.LiHTMLAttributes<HTMLLIElement>>(
  ({ children, className, ...props }, ref) => (
    <li ref={ref} className={cn("nav-menu__item", className)} {...props}>
      {children}
    </li>
  )
)
NavigationMenuItem.displayName = "NavigationMenuItem"

interface NavigationMenuTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}

export const NavigationMenuTrigger = React.forwardRef<HTMLButtonElement, NavigationMenuTriggerProps>(
  ({ children, className, value, ...props }, ref) => {
    const { onValueChange, value: activeValue, listRef } = useNavigationMenu()
    const isActive = activeValue === value

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (!listRef.current) return
      if (["ArrowLeft", "ArrowRight"].includes(e.key)) {
        e.preventDefault()
        const triggers = Array.from(
          listRef.current.querySelectorAll<HTMLElement>("[data-nav-trigger]")
        )
        const idx = triggers.indexOf(e.currentTarget)
        const next = e.key === "ArrowLeft"
          ? (idx - 1 + triggers.length) % triggers.length
          : (idx + 1) % triggers.length
        triggers[next]?.focus()
      }
      if (["ArrowDown", "Enter", " "].includes(e.key) && !isActive) {
        e.preventDefault()
        onValueChange(value)
      }
    }

    return (
      <button
        ref={ref}
        type="button"
        onMouseEnter={() => onValueChange(value)}
        onClick={() => onValueChange(isActive ? "" : value)}
        onKeyDown={handleKeyDown}
        aria-expanded={isActive}
        data-state={isActive ? "open" : "closed"}
        data-nav-trigger
        className={cn("nav-menu__trigger", className)}
        {...props}
      >
        {children}
        <svg
          className="nav-menu__chevron"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    )
  }
)
NavigationMenuTrigger.displayName = "NavigationMenuTrigger"

interface NavigationMenuContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

export const NavigationMenuContent = React.forwardRef<HTMLDivElement, NavigationMenuContentProps>(
  ({ children, className, value, ...props }, ref) => {
    const { value: activeValue, onValueChange } = useNavigationMenu()
    const isActive = activeValue === value
    useEscapeKey(() => onValueChange(""))

    if (!isActive) return null

    return (
      <div
        ref={ref}
        tabIndex={-1}
        className={cn("nav-menu__content", className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
NavigationMenuContent.displayName = "NavigationMenuContent"

export const NavigationMenuLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ children, className, ...props }, ref) => (
  <a ref={ref} className={cn("nav-menu__link", className)} {...props}>
    {children}
  </a>
))
NavigationMenuLink.displayName = "NavigationMenuLink"
