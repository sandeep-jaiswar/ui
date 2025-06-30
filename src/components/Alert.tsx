import React from 'react';
import { Button } from './Button';

export interface AlertAction {
  label: string;
  style?: 'default' | 'destructive' | 'cancel';
  onPress: () => void;
}

export interface AlertProps {
  /** Is the alert visible? */
  visible: boolean;
  /** Alert title */
  title?: string;
  /** Alert message */
  message?: string;
  /** Alert actions */
  actions?: AlertAction[];
  /** Alert type */
  type?: 'alert' | 'actionSheet';
  /** Close handler */
  onClose?: () => void;
  /** Additional CSS classes */
  className?: string;
  /** Test ID for testing */
  testId?: string;
}

/** iOS-inspired alert component following Apple's alert design patterns */
export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({
    visible,
    title,
    message,
    actions = [],
    type = 'alert',
    onClose,
    className = '',
    testId,
    ...props
  }, ref) => {
    React.useEffect(() => {
      if (!visible) return;

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose?.();
        }
      };

      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }, [visible, onClose]);

    React.useEffect(() => {
      if (visible) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }

      return () => {
        document.body.style.overflow = '';
      };
    }, [visible]);

    const handleBackdropClick = (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        onClose?.();
      }
    };

    const handleActionPress = (action: AlertAction) => {
      action.onPress();
      if (action.style === 'cancel') {
        onClose?.();
      }
    };

    if (!visible) return null;

    const isActionSheet = type === 'actionSheet';

    return (
      <div
        className="fixed inset-0 z-modal flex items-center justify-center p-4"
        onClick={handleBackdropClick}
        data-testid={testId}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in" />
        
        {/* Alert */}
        <div
          ref={ref}
          className={`
            relative bg-background-primary dark:bg-background-secondary-dark 
            rounded-ios-xl shadow-modal max-w-sm w-full
            animate-scale-in overflow-hidden
            ${isActionSheet ? 'mb-4' : ''}
            ${className}
          `.trim()}
          role="alertdialog"
          aria-modal="true"
          aria-labelledby={title ? 'alert-title' : undefined}
          aria-describedby={message ? 'alert-message' : undefined}
          {...props}
        >
          {/* Content */}
          <div className={`p-6 text-center ${isActionSheet ? 'pb-4' : ''}`}>
            {title && (
              <h2 
                id="alert-title"
                className="text-ios-headline font-semibold text-label-primary dark:text-label-primary-dark mb-2"
              >
                {title}
              </h2>
            )}
            {message && (
              <p 
                id="alert-message"
                className="text-ios-subhead text-label-secondary dark:text-label-secondary-dark"
              >
                {message}
              </p>
            )}
          </div>
          
          {/* Actions */}
          {actions.length > 0 && (
            <div className={`
              ${isActionSheet ? 'space-y-1 p-2' : 'border-t border-separator-nonOpaque dark:border-separator-nonOpaque-dark'}
              ${!isActionSheet && actions.length === 2 ? 'flex' : ''}
            `}>
              {actions.map((action, index) => {
                const isDestructive = action.style === 'destructive';
                const isCancel = action.style === 'cancel';
                
                if (isActionSheet) {
                  return (
                    <Button
                      key={index}
                      variant={isDestructive ? 'destructive' : isCancel ? 'secondary' : 'ghost'}
                      fullWidth
                      onClick={() => handleActionPress(action)}
                      className="justify-center"
                    >
                      {action.label}
                    </Button>
                  );
                }
                
                return (
                  <button
                    key={index}
                    onClick={() => handleActionPress(action)}
                    className={`
                      flex-1 py-3 px-4 text-ios-body font-medium transition-colors
                      ${isDestructive 
                        ? 'text-systemRed-500 dark:text-systemRed-400' 
                        : isCancel
                        ? 'text-label-secondary dark:text-label-secondary-dark'
                        : 'text-systemBlue-500 dark:text-systemBlue-400'
                      }
                      hover:bg-fill-quaternary dark:hover:bg-fill-quaternary-dark
                      ${actions.length === 2 && index === 0 ? 'border-r border-separator-nonOpaque dark:border-separator-nonOpaque-dark' : ''}
                      ${actions.length > 2 && index < actions.length - 1 ? 'border-b border-separator-nonOpaque dark:border-separator-nonOpaque-dark' : ''}
                    `}
                  >
                    {action.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
);

Alert.displayName = 'Alert';