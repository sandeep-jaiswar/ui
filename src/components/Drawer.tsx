import React from 'react';
import { Icon } from './Icon';

export interface DrawerProps {
  /** Is the drawer open? */
  open: boolean;
  /** Close handler */
  onClose: () => void;
  /** Drawer position */
  position?: 'left' | 'right' | 'top' | 'bottom';
  /** Drawer size */
  size?: 'small' | 'medium' | 'large' | 'full';
  /** Drawer title */
  title?: string;
  /** Drawer content */
  children: React.ReactNode;
  /** Show close button */
  showClose?: boolean;
  /** Close on backdrop click */
  closeOnBackdrop?: boolean;
  /** Close on escape key */
  closeOnEscape?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Test ID for testing */
  testId?: string;
}

/** iOS-inspired drawer/sidebar component */
export const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  ({
    open,
    onClose,
    position = 'right',
    size = 'medium',
    title,
    children,
    showClose = true,
    closeOnBackdrop = true,
    closeOnEscape = true,
    className = '',
    testId,
    ...props
  }, ref) => {
    React.useEffect(() => {
      if (!open || !closeOnEscape) return;

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }, [open, closeOnEscape, onClose]);

    React.useEffect(() => {
      if (open) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }

      return () => {
        document.body.style.overflow = '';
      };
    }, [open]);

    const handleBackdropClick = (e: React.MouseEvent) => {
      if (closeOnBackdrop && e.target === e.currentTarget) {
        onClose();
      }
    };

    const sizeStyles = {
      small: {
        left: 'w-64',
        right: 'w-64',
        top: 'h-48',
        bottom: 'h-48'
      },
      medium: {
        left: 'w-80',
        right: 'w-80',
        top: 'h-64',
        bottom: 'h-64'
      },
      large: {
        left: 'w-96',
        right: 'w-96',
        top: 'h-80',
        bottom: 'h-80'
      },
      full: {
        left: 'w-full',
        right: 'w-full',
        top: 'h-full',
        bottom: 'h-full'
      }
    };

    const positionStyles = {
      left: 'left-0 top-0 h-full',
      right: 'right-0 top-0 h-full',
      top: 'top-0 left-0 w-full',
      bottom: 'bottom-0 left-0 w-full'
    };

    const transformStyles = {
      left: open ? 'translate-x-0' : '-translate-x-full',
      right: open ? 'translate-x-0' : 'translate-x-full',
      top: open ? 'translate-y-0' : '-translate-y-full',
      bottom: open ? 'translate-y-0' : 'translate-y-full'
    };

    if (!open) return null;

    return (
      <div
        className="fixed inset-0 z-modal flex"
        onClick={handleBackdropClick}
        data-testid={testId}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in" />
        
        {/* Drawer */}
        <div
          ref={ref}
          className={`
            absolute ${positionStyles[position]} ${sizeStyles[size][position]}
            bg-background-primary dark:bg-background-secondary-dark
            shadow-modal transform transition-transform duration-300 ease-ios
            ${transformStyles[position]} ${className}
          `.trim()}
          {...props}
        >
          {/* Header */}
          {(title || showClose) && (
            <div className="flex items-center justify-between p-4 border-b border-separator-nonOpaque dark:border-separator-nonOpaque-dark">
              {title && (
                <h2 className="text-ios-headline font-semibold text-label-primary dark:text-label-primary-dark">
                  {title}
                </h2>
              )}
              {showClose && (
                <button
                  type="button"
                  onClick={onClose}
                  className="p-1 rounded-ios text-label-tertiary dark:text-label-tertiary-dark hover:text-label-primary dark:hover:text-label-primary-dark hover:bg-fill-quaternary dark:hover:bg-fill-quaternary-dark transition-colors"
                  aria-label="Close drawer"
                >
                  <Icon name="close" size="medium" />
                </button>
              )}
            </div>
          )}
          
          {/* Content */}
          <div className="flex-1 overflow-auto p-4">
            {children}
          </div>
        </div>
      </div>
    );
  }
);

Drawer.displayName = 'Drawer';