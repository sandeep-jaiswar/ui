import React from 'react';
import { Icon } from './Icon';

export interface TabBarItem {
  id: string;
  label: string;
  icon?: string;
  badge?: number;
  disabled?: boolean;
}

export interface TabBarProps {
  /** Tab items */
  items: TabBarItem[];
  /** Active tab ID */
  activeTab?: string;
  /** Default active tab ID */
  defaultActiveTab?: string;
  /** Tab change handler */
  onChange?: (tabId: string) => void;
  /** Additional CSS classes */
  className?: string;
  /** Test ID for testing */
  testId?: string;
}

/** iOS-inspired tab bar component for bottom navigation */
export const TabBar = React.forwardRef<HTMLDivElement, TabBarProps>(
  ({
    items,
    activeTab,
    defaultActiveTab,
    onChange,
    className = '',
    testId,
    ...props
  }, ref) => {
    const [selectedTab, setSelectedTab] = React.useState(
      activeTab ?? defaultActiveTab ?? items[0]?.id ?? ''
    );

    React.useEffect(() => {
      if (activeTab !== undefined) {
        setSelectedTab(activeTab);
      }
    }, [activeTab]);

    const handleTabChange = (tabId: string) => {
      if (activeTab === undefined) {
        setSelectedTab(tabId);
      }
      onChange?.(tabId);
    };

    return (
      <div
        ref={ref}
        className={`
          bg-background-primary dark:bg-background-primary-dark
          border-t border-separator-nonOpaque dark:border-separator-nonOpaque-dark
          px-2 py-1 flex items-center justify-around
          backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95
          safe-bottom ${className}
        `.trim()}
        role="tablist"
        data-testid={testId}
        {...props}
      >
        {items.map((item) => {
          const isActive = selectedTab === item.id;
          const isDisabled = item.disabled;

          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-disabled={isDisabled}
              disabled={isDisabled}
              onClick={() => !isDisabled && handleTabChange(item.id)}
              className={`
                flex flex-col items-center justify-center px-2 py-2 min-w-0 flex-1
                transition-colors duration-200 ease-ios
                ${isActive 
                  ? 'text-systemBlue-500 dark:text-systemBlue-400' 
                  : 'text-label-tertiary dark:text-label-tertiary-dark'
                }
                ${isDisabled 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:text-systemBlue-600 dark:hover:text-systemBlue-300'
                }
              `.trim()}
            >
              <div className="relative mb-1">
                {item.icon && (
                  <Icon 
                    name={item.icon} 
                    size="medium"
                    className="transition-transform duration-200 ease-ios"
                  />
                )}
                
                {item.badge && item.badge > 0 && (
                  <div className="absolute -top-1 -right-1 min-w-[16px] h-4 bg-systemRed-500 text-white text-ios-caption-2 font-medium rounded-full flex items-center justify-center px-1">
                    {item.badge > 99 ? '99+' : item.badge}
                  </div>
                )}
              </div>
              
              <span className="text-ios-caption-2 font-medium truncate max-w-full">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    );
  }
);

TabBar.displayName = 'TabBar';