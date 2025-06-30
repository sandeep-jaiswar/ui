import React from "react"
import { Icon } from "./Icon"

export interface TabBarItem {
  id: string
  label: string
  icon?: string
  badge?: number
  disabled?: boolean
}

export interface TabBarProps {
  /** Tab items */
  items: TabBarItem[]
  /** Active tab ID */
  activeTab?: string
  /** Default active tab ID */
  defaultActiveTab?: string
  /** Tab change handler */
  onChange?: (tabId: string) => void
  /** Additional CSS classes */
  className?: string
  /** Test ID for testing */
  testId?: string
}

/** iOS-inspired tab bar component for bottom navigation */
export const TabBar = React.forwardRef<HTMLDivElement, TabBarProps>(
  ({ items, activeTab, defaultActiveTab, onChange, className = "", testId, ...props }, ref) => {
    const [selectedTab, setSelectedTab] = React.useState(activeTab ?? defaultActiveTab ?? items[0]?.id ?? "")

    React.useEffect(() => {
      if (activeTab !== undefined) {
        setSelectedTab(activeTab)
      }
    }, [activeTab])

    const handleTabChange = (tabId: string) => {
      if (activeTab === undefined) {
        setSelectedTab(tabId)
      }
      onChange?.(tabId)
    }

    return (
      <div
        ref={ref}
        className={`flex items-center justify-around border-t border-separator-nonOpaque bg-background-primary bg-opacity-95 px-2 py-1 backdrop-blur-sm safe-bottom dark:border-separator-nonOpaque-dark dark:bg-background-primary-dark dark:bg-opacity-95 ${className} `.trim()}
        role="tablist"
        data-testid={testId}
        {...props}
      >
        {items.map((item) => {
          const isActive = selectedTab === item.id
          const isDisabled = item.disabled

          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-disabled={isDisabled}
              disabled={isDisabled}
              onClick={() => !isDisabled && handleTabChange(item.id)}
              className={`flex min-w-0 flex-1 flex-col items-center justify-center px-2 py-2 transition-colors duration-200 ease-ios ${
                isActive
                  ? "text-systemBlue-500 dark:text-systemBlue-400"
                  : "text-label-tertiary dark:text-label-tertiary-dark"
              } ${
                isDisabled
                  ? "cursor-not-allowed opacity-50"
                  : "hover:text-systemBlue-600 dark:hover:text-systemBlue-300"
              } `.trim()}
            >
              <div className="relative mb-1">
                {item.icon && (
                  <Icon name={item.icon} size="medium" className="transition-transform duration-200 ease-ios" />
                )}

                {item.badge && item.badge > 0 && (
                  <div className="absolute -right-1 -top-1 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-systemRed-500 px-1 font-medium text-white text-ios-caption-2">
                    {item.badge > 99 ? "99+" : item.badge}
                  </div>
                )}
              </div>

              <span className="max-w-full truncate font-medium text-ios-caption-2">{item.label}</span>
            </button>
          )
        })}
      </div>
    )
  }
)

TabBar.displayName = "TabBar"
