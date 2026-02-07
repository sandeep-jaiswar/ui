import React, { createContext, useContext, useState, ReactNode } from "react"
import { cn } from "../../utils/cn"

// --- NavigationMenu Context ---
interface NavigationMenuContextType {
  value?: string
  onValueChange: (value: string) => void
}

const NavigationMenuContext = createContext<NavigationMenuContextType | undefined>(undefined)

// --- NavigationMenu Root ---
interface NavigationMenuProps {
  children: ReactNode
  className?: string
  delayDuration?: number
}

/**
 * NavigationMenu component for complex site navigation.
 * Manages hover/focus states for dropdown content.
 *
 * @example
 * <NavigationMenu>
 *   <NavigationMenuList>
 *     <NavigationMenuItem>
 *       <NavigationMenuTrigger value="item1">Item 1</NavigationMenuTrigger>
 *       <NavigationMenuContent value="item1">Content 1</NavigationMenuContent>
 *     </NavigationMenuItem>
 *   </NavigationMenuList>
 * </NavigationMenu>
 */
export const NavigationMenu = ({
  children,
  className,
} // delayDuration = 200 // unused
: NavigationMenuProps) => {
  const [value, setValue] = useState<string>("")
  // const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined); // unused

  const handleValueChange = (newValue: string) => {
    if (newValue === "") {
      // Close
      setValue("")
    } else {
      setValue(newValue)
    }
  }

  return (
    <NavigationMenuContext.Provider value={{ value, onValueChange: handleValueChange }}>
      <nav
        className={cn("relative z-10 flex max-w-max items-center justify-center", className)}
        onMouseLeave={() => {
          handleValueChange("")
        }}
      >
        {children}
      </nav>
    </NavigationMenuContext.Provider>
  )
}

// --- NavigationMenu List ---
export const NavigationMenuList = React.forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>(
  ({ children, className, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn("group flex flex-1 list-none items-center justify-center space-x-1", className)}
      {...props}
    >
      {children}
    </ul>
  )
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
// We need to know the 'value' this trigger controls.
// Ideally, Item passes it down, or Trigger defines it.
// Let's have Trigger define it, but Item logic is usually simpler if it wraps.
// Actually, `NavigationMenu` typically works by `NavigationMenuItem` containing `Trigger` and `Content`.
// But to link them, we can use a generated ID or require a `value` prop on Item/Trigger.
// Let's require `value` on Trigger/Content connection? Or just Item index?
// A `value` prop is explicit and robust.
// But widely used accessible patterns usually just rely on structure.
// Let's try explicit `value` context on Item? No, let's keep it simple.
// Trigger will take a `value`. Content will match that `value`.

// Better: Item doesn't have value. Trigger toggles a value. Content shows if value matches.
// But simpler API: Trigger automatically toggles the content next to it?
// Let's use `value` prop on Trigger and Content? No, that's verbose.
// Let's use `uuid` or simple string.
// Actually, Radix UI uses explicit structure.
// Let's try: ItemContext.

interface NavigationMenuItemContextType {
  value: string
}
const NavigationMenuItemContext = createContext<NavigationMenuItemContextType | undefined>(undefined)

export const NavigationMenuItemWithValue = ({
  children,
  value,
  ...props
}: React.ComponentProps<typeof NavigationMenuItem> & { value: string }) => {
  // This helper is not standardized.
  // Let's stick to: Trigger and Content must explicitly share a value?
  // Or, simpler: Just use `value` on Item?
  return (
    <NavigationMenuItemContext.Provider value={{ value }}>
      <NavigationMenuItem {...props}>{children}</NavigationMenuItem>
    </NavigationMenuItemContext.Provider>
  )
}

// Re-export standard Item, but we assume user might manage state or we need a way to link.
// Let's simpler approach: Trigger has `onClick` / `onMouseEnter` that sets root value.
// Content renders if root value text content of Trigger? No.
// Let's just pass `trigger` string to `NavigationMenuTrigger`.
interface NavigationMenuTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string // Required to link
}

export const NavigationMenuTrigger = React.forwardRef<HTMLButtonElement, NavigationMenuTriggerProps>(
  ({ children, className, value, ...props }, ref) => {
    const { onValueChange, value: activeValue } = useContext(NavigationMenuContext)!
    const isActive = activeValue === value

    return (
      <button
        ref={ref}
        onMouseEnter={() => onValueChange(value)}
        // onMouseLeave is handled by Root or specific logic?
        // Actually root handles leave.
        onClick={() => onValueChange(isActive ? "" : value)} // Toggle on click for support
        className={cn(
          "group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:data-[state=open]:bg-gray-800/50",
          className
        )}
        data-state={isActive ? "open" : "closed"}
        aria-expanded={isActive}
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
    const { value: activeValue } = useContext(NavigationMenuContext)!
    const isActive = activeValue === value

    if (!isActive) return null

    return (
      <div
        ref={ref}
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
