import React from 'react';
import { Icon } from './Icon';

export interface ToastProps {
  /** Is the toast visible? */
  visible: boolean;
  /** Toast title */
  title?: string;
  /** Toast message */
  message: string;
  /** Toast type */
  type?: 'info' | 'success' | 'warning' | 'error';
  /** Toast position */
  position?: 'top' | 'bottom';
  /** Auto dismiss duration in ms (0 to disable) */
  duration?: number;
  /** Show close button */
  showClose?: boolean;
  /** Close handler */
  onClose?: () => void;
  /** Additional CSS classes */
  className?: string;
  /** Test ID for testing */
  testId?: string;
}

/** iOS-inspired toast notification component */
export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({
    visible,
    title,
    message,
    type = 'info',
    position = 'top',
    duration = 4000,
    showClose = true,
    onClose,
    className = '',
    testId,
    ...props
  }, ref) => {
    React.useEffect(() => {
      if (visible && duration > 0) {
        const timer = setTimeout(() => {
          onClose?.();
        }, duration);

        return () => clearTimeout(timer);
      }
    }, [visible, duration, onClose]);

    if (!visible) return null;

    const typeConfig = {
      info: {
        icon: 'settings',
        bgColor: 'bg-systemBlue-500 dark:bg-systemBlue-600',
        iconColor: 'text-white',
      },
      success: {
        icon: 'check',
        bgColor: 'bg-systemGreen-500 dark:bg-systemGreen-600',
        iconColor: 'text-white',
      },
      warning: {
        icon: 'settings',
        bgColor: 'bg-systemOrange-500 dark:bg-systemOrange-600',
        iconColor: 'text-white',
      },
      error: {
        icon: 'close',
        bgColor: 'bg-systemRed-500 dark:bg-systemRed-600',
        iconColor: 'text-white',
      },
    };

    const config = typeConfig[type];
    const positionStyles = position === 'top' 
      ? 'top-4 animate-slide-down' 
      : 'bottom-4 animate-slide-up';

    return (
      <div
        className={`fixed left-1/2 transform -translate-x-1/2 ${positionStyles} z-toast max-w-sm w-full mx-4`}
      >
        <div
          ref={ref}
          className={`
            ${config.bgColor} text-white rounded-ios-lg shadow-modal p-4
            backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95
            animate-fade-in ${className}
          `.trim()}
          role="alert"
          aria-live="polite"
          data-testid={testId}
          {...props}
        >
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-0.5">
              <Icon 
                name={config.icon} 
                size="small" 
                className={config.iconColor}
              />
            </div>
            
            <div className="flex-1 min-w-0">
              {title && (
                <h4 className="text-ios-subhead font-semibold mb-1">
                  {title}
                </h4>
              )}
              <p className="text-ios-footnote opacity-90">
                {message}
              </p>
            </div>
            
            {showClose && (
              <button
                type="button"
                onClick={onClose}
                className="flex-shrink-0 text-white opacity-70 hover:opacity-100 transition-opacity"
                aria-label="Close notification"
              >
                <Icon name="close" size="small" />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
);

Toast.displayName = 'Toast';