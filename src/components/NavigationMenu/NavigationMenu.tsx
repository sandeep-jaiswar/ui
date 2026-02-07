import React, { createContext, useContext, useState, ReactNode, useRef } from "react"
import { useEscapeKey } from "../../hooks/use-escape-key"
import { mergeRefs } from "../../hooks/use-merge-refs"
import { cn } from "../../utils/cn"

// --- NavigationMenu Context ---
interface NavigationMenuContextType {
  value?: string
  onValueChange: (value: string) => void
  listRef: React.RefObject<HTMLUListElement | null>
}

const NavigationMenuContext = createContext<NavigationMenuContextType | undefined>(undefined)

const useNavigationMenu = () => {
  const context = useContext(NavigationMenuContext)
  if (!context) {
    throw new Error("useNavigationMenu must be used within a NavigationMenu")
  }
  return context
}

// --- NavigationMenu Root ---
interface NavigationMenuProps {
  children: ReactNode
  className?: string
  delayDuration?: number
}

/**
 * NavigationMenu component for complex site navigation.
 * Manages hover/focus states for dropdown content.
 * Fully accessible with keyboard navigation.
 */
export const NavigationMenu = ({ children, className }: NavigationMenuProps) => {
  const [value, setValue] = useState<string>("")
  const listRef = useRef<HTMLUListElement>(null)

  const handleValueChange = (newValue: string) => {
    setValue(newValue === "" ? "" : newValue)
  }

  return (
    <NavigationMenuContext.Provider value={{ value, onValueChange: handleValueChange, listRef }}>
      <nav
        className={cn("relative z-10 flex max-w-max items-center justify-center", className)}
        onMouseLeave={() => {
          handleValueChange("")
        }}
        onBlur={(e) => {
          // Close if focus leaves the navigation menu
          if (!e.currentTarget.contains(e.relatedTarget as Node)) {
            handleValueChange("")
          }
        }}
      >
        {children}
      </nav>
    </NavigationMenuContext.Provider>
  )
}

// --- NavigationMenu List ---
export const NavigationMenuList = React.forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>(
  ({ children, className, ...props }, ref) => {
    const { listRef } = useNavigationMenu()
    const mergedRef = mergeRefs(ref, listRef)

    return (
      <ul
        ref={mergedRef}
        className={cn("group flex flex-1 list-none items-center justify-center space-x-1", className)}
        {...props}
      >
        {children}
      </ul>
    )
  }
)
NavigationMenuList.displayName = "NavigationMenuList"

// --- NavigationMenu Item ---
export const NavigationMenuItem = React.forwardRef<HTMLLIElement, React.LiHTMLAttributes<HTMLLIElement>>(
  ({ children, className, ...props }, ref) => (
    <li ref={ref} className={cn("relative", className)} {...props}>
      {children}
    </li>
  )
)
NavigationMenuItem.displayName = "NavigationMenuItem"

// --- NavigationMenu Trigger ---
interface NavigationMenuTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string // Required to link
}

export const NavigationMenuTrigger = React.forwardRef<HTMLButtonElement, NavigationMenuTriggerProps>(
  ({ children, className, value, ...props }, ref) => {
    const { onValueChange, value: activeValue, listRef } = useNavigationMenu()
    const isActive = activeValue === value

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        e.preventDefault()
        if (!listRef.current) return

        const triggers = Array.from(listRef.current.querySelectorAll("[data-nav-trigger]")) as HTMLElement[]
        const index = triggers.indexOf(e.currentTarget)

        if (index === -1) return

        let nextIndex = index
        if (e.key === "ArrowLeft") {
          nextIndex = (index - 1 + triggers.length) % triggers.length
        } else {
          nextIndex = (index + 1) % triggers.length
        }

        triggers[nextIndex]?.focus()
      }

      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
        if (!isActive) {
          e.preventDefault()
          onValueChange(value)
        }
        // If already active, ArrowDown could move focus to content?
        // For now, simple open behavior.
      }
    }

    return (
      <button
        ref={ref}
        onMouseEnter={() => onValueChange(value)}
        onClick={() => onValueChange(isActive ? "" : value)}
        onKeyDown={handleKeyDown}
        className={cn(
          "group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:data-[state=open]:bg-gray-800/50",
          className
        )}
        data-state={isActive ? "open" : "closed"}
        aria-expanded={isActive}
        data-nav-trigger
        {...props}
      >
        {children}
        <svg
          className={cn("relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180")}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    )
  }
)
NavigationMenuTrigger.displayName = "NavigationMenuTrigger"

// --- NavigationMenu Content ---
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
        className={cn(
          "absolute top-full left-0 w-full md:absolute md:w-auto",
          "mt-1.5 overflow-hidden rounded-md border bg-white shadow-lg dark:border-gray-800 dark:bg-gray-950",
          "animate-in fade-in zoom-in-95",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
NavigationMenuContent.displayName = "NavigationMenuContent"

// --- NavigationMenu Link ---
export const NavigationMenuLink = React.forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement>>(
  ({ children, className, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(
        "block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50",
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
)
NavigationMenuLink.displayName = "NavigationMenuLink"
