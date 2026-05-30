import React, { createContext, useContext, useState, type ReactNode } from "react"
import { cn } from "../../utils/cn"
import "./tabs.css"

interface TabsContextType {
  value: string
  onValueChange: (value: string) => void
  orientation: "horizontal" | "vertical"
}

const TabsContext = createContext<TabsContextType | undefined>(undefined)

const useTabs = () => {
  const ctx = useContext(TabsContext)
  if (!ctx) throw new Error("useTabs must be used within a Tabs component")
  return ctx
}

interface TabsProps {
  children: ReactNode
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  orientation?: "horizontal" | "vertical"
  className?: string
}

/**
 * Tabs component for organizing content into switchable panels.
 * Fully accessible with keyboard navigation. Zero external dependencies.
 *
 * @example
 * <Tabs defaultValue="account">
 *   <TabsList>
 *     <TabsTrigger value="account">Account</TabsTrigger>
 *     <TabsTrigger value="password">Password</TabsTrigger>
 *   </TabsList>
 *   <TabsContent value="account">Account info</TabsContent>
 *   <TabsContent value="password">Password inputs</TabsContent>
 * </Tabs>
 */
export const Tabs = ({
  children,
  value: controlledValue,
  defaultValue = "",
  onValueChange,
  orientation = "horizontal",
  className,
}: TabsProps) => {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue)
  const value = controlledValue !== undefined ? controlledValue : uncontrolledValue

  const handleValueChange = (newValue: string) => {
    if (controlledValue === undefined) setUncontrolledValue(newValue)
    onValueChange?.(newValue)
  }

  return (
    <TabsContext.Provider value={{ value, onValueChange: handleValueChange, orientation }}>
      <div className={cn("tabs", className)} data-orientation={orientation}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

export const TabsList = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => {
    const { orientation } = useTabs()
    return (
      <div ref={ref} role="tablist" aria-orientation={orientation} className={cn("tabs-list", className)} {...props}>
        {children}
      </div>
    )
  }
)
TabsList.displayName = "TabsList"

interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}

export const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ children, className, value, ...props }, ref) => {
    const { value: selectedValue, onValueChange } = useTabs()
    const isSelected = selectedValue === value

    return (
      <button
        ref={ref}
        type="button"
        role="tab"
        aria-selected={isSelected}
        aria-controls={`tabpanel-${value}`}
        data-state={isSelected ? "active" : "inactive"}
        onClick={() => onValueChange(value)}
        className={cn("tabs-trigger", className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)
TabsTrigger.displayName = "TabsTrigger"

interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

export const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ children, className, value, ...props }, ref) => {
    const { value: selectedValue } = useTabs()
    if (selectedValue !== value) return null

    return (
      <div
        ref={ref}
        role="tabpanel"
        id={`tabpanel-${value}`}
        tabIndex={0}
        className={cn("tabs-content", className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
TabsContent.displayName = "TabsContent"
