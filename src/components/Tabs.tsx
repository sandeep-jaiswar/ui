import React from 'react';

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  /** Tab items */
  items: TabItem[];
  /** Active tab ID */
  activeTab?: string;
  /** Default active tab ID */
  defaultActiveTab?: string;
  /** Tab change handler */
  onChange?: (tabId: string) => void;
  /** Tabs variant */
  variant?: 'default' | 'segmented';
  /** Additional CSS classes */
  className?: string;
  /** Test ID for testing */
  testId?: string;
}

/** iOS-inspired tabs component for content organization */
export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({
    items,
    activeTab,
    defaultActiveTab,
    onChange,
    variant = 'default',
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

    const activeItem = items.find(item => item.id === selectedTab);

    const tabListStyles = variant === 'segmented'
      ? 'bg-fill-secondary dark:bg-fill-secondary-dark rounded-ios p-1 flex'
      : 'flex border-b border-separator-nonOpaque dark:border-separator-nonOpaque-dark';

    const tabButtonStyles = variant === 'segmented'
      ? 'flex-1 text-center py-2 px-4 rounded-ios-sm text-ios-subhead font-medium transition-all duration-200 ease-ios'
      : 'px-4 py-3 text-ios-subhead font-medium border-b-2 transition-all duration-200 ease-ios';

    return (
      <div
        ref={ref}
        className={className}
        data-testid={testId}
        {...props}
      >
        {/* Tab List */}
        <div className={tabListStyles} role="tablist">
          {items.map((item) => {
            const isActive = selectedTab === item.id;
            const isDisabled = item.disabled;

            const activeStyles = variant === 'segmented'
              ? isActive 
                ? 'bg-background-primary dark:bg-background-tertiary-dark text-label-primary dark:text-label-primary-dark shadow-ios-1'
                : 'text-label-secondary dark:text-label-secondary-dark hover:text-label-primary dark:hover:text-label-primary-dark'
              : isActive
                ? 'border-systemBlue-500 text-systemBlue-500 dark:text-systemBlue-400'
                : 'border-transparent text-label-secondary dark:text-label-secondary-dark hover:text-label-primary dark:hover:text-label-primary-dark';

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
                  ${tabButtonStyles} ${activeStyles}
                  ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                `.trim()}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="mt-4" role="tabpanel">
          {activeItem?.content}
        </div>
      </div>
    );
  }
);

Tabs.displayName = 'Tabs';