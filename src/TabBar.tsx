import React from "react"
import { Icon } from "./Icon"
import { transitions } from "./utils/animations"

/**
 * Configuration for a tab bar item
 */
export interface TabBarItem {
  /** Unique identifier for the tab */
  id: string
  /** Display label for the tab */
  label: string
  /** Icon name to display */
  icon?: string
  /** Badge count to show (optional) */
  badge?: number
  /** Whether the tab is disabled */
  disabled?: boolean
  /** Accessible label for the tab */
  "aria-label"?: string
}

/**
 * Props for the TabBar component
 */
export interface TabBarProps {
  /** Array of tab items to display */
  items: TabBarItem[]
  /** Currently active tab ID */
  activeTab?: string
  /** Default active tab ID for uncontrolled usage */
  defaultActiveTab?: string
  /** Callback fired when tab selection changes */
  onChange?: (tabId: string) => void
  /** Whether to show swipe indicators on mobile */
  showSwipeIndicators?: boolean
  /** Additional CSS classes to apply */
  className?: string
  /** Test identifier for automated testing */
  testId?: string
}

/**
 * iOS-inspired tab bar component for bottom navigation with comprehensive accessibility.
 *
 * Features:
 * - Horizontal scrolling for overflow tabs
 * - Badge support with proper accessibility
 * - Keyboard navigation (Arrow keys, Home, End)
 * - Touch-friendly 44px minimum touch targets
 * - Smooth animations with reduced motion support
 * - Screen reader announcements for tab changes
 *
 * @example
 * ```tsx
 * <TabBar
 *   items={[
 *     { id: 'home', label: 'Home', icon: 'home' },
 *     { id: 'search', label: 'Search', icon: 'search', badge: 3 },
 *     { id: 'profile', label: 'Profile', icon: 'settings' }
 *   ]}
 *   activeTab={currentTab}
 *   onChange={setCurrentTab}
 * />
 * ```
 */
export const TabBar = React.forwardRef<HTMLDivElement, TabBarProps>(
  ({ items, activeTab, defaultActiveTab, onChange, showSwipeIndicators = true, className = "", testId, ...props }, ref) => {
    const [selectedTab, setSelectedTab] = React.useState(activeTab ?? defaultActiveTab ?? items[0]?.id ?? "")
    const tabBarRef = React.useRef<HTMLDivElement>(null)
    const tabRefs = React.useRef<Map<string, HTMLButtonElement>>(new Map())

    React.useEffect(() => {
      if (activeTab !== undefined) {
        setSelectedTab(activeTab)
      }
    }, [activeTab])

    /**
     * Handles tab selection with accessibility announcements
     */
    const handleTabChange = (tabId: string) => {
      const tab = items.find((item) => item.id === tabId)
      if (!tab || tab.disabled) return

      if (activeTab === undefined) {
        setSelectedTab(tabId)
      }
      onChange?.(tabId)

      // Announce tab change to screen readers
      const announcement = `${tab.label} tab selected${tab.badge ? `, ${tab.badge} notifications` : ""}`
      const announcer = document.createElement("div")
      announcer.setAttribute("aria-live", "polite")
      announcer.setAttribute("aria-atomic", "true")
      announcer.className = "sr-only"
      announcer.textContent = announcement
      document.body.appendChild(announcer)
      setTimeout(() => document.body.removeChild(announcer), 1000)
    }

    /**
     * Handles keyboard navigation
     */
    const handleKeyDown = (event: React.KeyboardEvent, currentTabId: string) => {
      const currentIndex = items.findIndex((item) => item.id === currentTabId)
      let targetIndex = currentIndex

      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault()
          targetIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1
          break
        case "ArrowRight":
          event.preventDefault()
          targetIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0
          break
        case "Home":
          event.preventDefault()
          targetIndex = 0
          break
        case "End":
          event.preventDefault()
          targetIndex = items.length - 1
          break
        default:
          return
      }

      // Skip disabled tabs
      let attempts = 0
      while (items[targetIndex]?.disabled && attempts < items.length) {
        targetIndex =
          event.key === "ArrowLeft" || event.key === "End"
            ? targetIndex > 0
              ? targetIndex - 1
              : items.length - 1
            : targetIndex < items.length - 1
            ? targetIndex + 1
            : 0
        attempts++
      }

      const targetTab = items[targetIndex]
      if (targetTab && !targetTab.disabled) {
        const tabElement = tabRefs.current.get(targetTab.id)
        if (tabElement) {
          tabElement.focus()
          handleTabChange(targetTab.id)
        }
      }
    }

    /**
     * Checks if tabs overflow and need scrolling
     */
    const hasOverflow = items.length > 5

    return (
      <div
        ref={(node) => {
          tabBarRef.current = node
          if (typeof ref === "function") {
            ref(node)
          } else if (ref) {
            ref.current = node
          }
        }}
        className={`flex items-center border-t border-separator-nonOpaque bg-background-primary bg-opacity-95 backdrop-blur-sm safe-bottom dark:border-separator-nonOpaque-dark dark:bg-background-primary-dark dark:bg-opacity-95 ${
          hasOverflow ? "scrollbar-hide overflow-x-auto" : "justify-around"
        } px-2 py-1 ${className}`.trim()}
        role="tablist"
        aria-label="Main navigation"
        data-testid={testId}
        {...props}
      >
        {items.map((item, index) => {
          const isActive = selectedTab === item.id
          const isDisabled = item.disabled

          return (
            <button
              key={item.id}
              ref={(node) => {
                if (node) {
                  tabRefs.current.set(item.id, node)
                } else {
                  tabRefs.current.delete(item.id)
                }
              }}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-disabled={isDisabled}
              aria-label={item["aria-label"] || `${item.label}${item.badge ? `, ${item.badge} notifications` : ""}`}
              disabled={isDisabled}
              onClick={() => handleTabChange(item.id)}
              onKeyDown={(e) => handleKeyDown(e, item.id)}
              className={`flex min-w-0 ${
                hasOverflow ? "min-w-[80px]" : "flex-1"
              } min-h-[44px] flex-col items-center justify-center px-2 py-2 ${transitions.default} ${
                isActive
                  ? "text-systemBlue-500 dark:text-systemBlue-400"
                  : "text-label-tertiary dark:text-label-tertiary-dark"
              } ${
                isDisabled
                  ? "cursor-not-allowed opacity-50"
                  : "hover:text-systemBlue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-systemBlue-500 focus-visible:ring-offset-2 dark:hover:text-systemBlue-300"
              }`.trim()}
              tabIndex={isActive ? 0 : -1}
            >
              <div className="relative mb-1">
                {item.icon && (
                  <Icon
                    name={item.icon}
                    size="medium"
                    className={`${transitions.default} ${isActive ? "scale-110" : ""}`}
                  />
                )}

                {item.badge && item.badge > 0 && (
                  <div
                    className="absolute -right-1 -top-1 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-systemRed-500 px-1 font-medium text-white text-ios-caption-2"
                    aria-hidden="true"
                  >
                    {item.badge > 99 ? "99+" : item.badge}
                  </div>
                )}
              </div>

              <span className="max-w-full truncate font-medium text-ios-caption-2">{item.label}</span>
            </button>
          )
        })}

        {/* Swipe indicators for overflow */}
        {hasOverflow && showSwipeIndicators && (
          <>
            <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-4 bg-gradient-to-r from-background-primary to-transparent dark:from-background-primary-dark" />
            <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-4 bg-gradient-to-l from-background-primary to-transparent dark:from-background-primary-dark" />
          </>
        )}
      </div>
    )
  }
)

TabBar.displayName = "TabBar"