import React from 'react';
import { Icon } from './Icon';

export interface MenuItem {
  id: string;
  label: string;
  icon?: string;
  disabled?: boolean;
  destructive?: boolean;
  separator?: boolean;
  onClick?: () => void;
}

export interface MenuProps {
  /** Menu items */
  items: MenuItem[];
  /** Is the menu open? */
  open: boolean;
  /** Close handler */
  onClose: () => void;
  /** Trigger element */
  trigger?: React.ReactNode;
  /** Menu position */
  position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
  /** Additional CSS classes */
  className?: string;
  /** Test ID for testing */
  testId?: string;
}

/** iOS-inspired context menu component */
export const Menu = React.forwardRef<HTMLDivElement, MenuProps>(
  ({
    items,
    open,
    onClose,
    trigger,
    position = 'bottom-left',
    className = '',
    testId,
    ...props
  }, ref) => {
    const menuRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      if (!open) return;

      const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
          onClose();
        }
      };

      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClose();
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleEscape);
      };
    }, [open, onClose]);

    const handleItemClick = (item: MenuItem) => {
      if (item.disabled) return;
      item.onClick?.();
      onClose();
    };

    const positionStyles = {
      'bottom-left': 'top-full left-0 mt-1',
      'bottom-right': 'top-full right-0 mt-1',
      'top-left': 'bottom-full left-0 mb-1',
      'top-right': 'bottom-full right-0 mb-1'
    };

    if (!open) return trigger || null;

    return (
      <div className="relative inline-block" ref={ref} data-testid={testId} {...props}>
        {trigger}
        
        <div
          ref={menuRef}
          className={`
            absolute ${positionStyles[position]} z-popover
            bg-background-primary dark:bg-background-secondary-dark
            border border-separator-opaque dark:border-separator-opaque-dark
            rounded-ios-lg shadow-modal min-w-[200px] py-2
            animate-scale-in ${className}
          `.trim()}
          role="menu"
        >
          {items.map((item, index) => {
            if (item.separator) {
              return (
                <div
                  key={`separator-${index}`}
                  className="my-1 border-t border-separator-nonOpaque dark:border-separator-nonOpaque-dark"
                />
              );
            }

            return (
              <button
                key={item.id}
                type="button"
                role="menuitem"
                disabled={item.disabled}
                onClick={() => handleItemClick(item)}
                className={`
                  w-full flex items-center px-4 py-2 text-left text-ios-body
                  transition-colors duration-150 ease-ios
                  ${item.disabled
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-fill-quaternary dark:hover:bg-fill-quaternary-dark cursor-pointer'
                  }
                  ${item.destructive
                    ? 'text-systemRed-500 dark:text-systemRed-400'
                    : 'text-label-primary dark:text-label-primary-dark'
                  }
                `.trim()}
              >
                {item.icon && (
                  <Icon 
                    name={item.icon} 
                    size="medium" 
                    className="mr-3 flex-shrink-0"
                    color={item.destructive ? 'error' : 'primary'}
                  />
                )}
                <span className="flex-1">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }
);

Menu.displayName = 'Menu';