import React from 'react';
import { Icon } from './Icon';

export interface DatePickerProps {
  /** Selected date */
  value?: Date;
  /** Default selected date */
  defaultValue?: Date;
  /** Minimum selectable date */
  min?: Date;
  /** Maximum selectable date */
  max?: Date;
  /** Is the date picker disabled? */
  disabled?: boolean;
  /** Date picker size */
  size?: 'small' | 'medium' | 'large';
  /** Label text */
  label?: string;
  /** Helper text */
  helperText?: string;
  /** Error text */
  errorText?: string;
  /** Date picker state */
  state?: 'default' | 'error' | 'success';
  /** Full width date picker */
  fullWidth?: boolean;
  /** Change handler */
  onChange?: (date: Date | null) => void;
  /** Additional CSS classes */
  className?: string;
  /** Test ID for testing */
  testId?: string;
}

/** iOS-inspired date picker component */
export const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  ({
    value,
    defaultValue,
    min,
    max,
    disabled = false,
    size = 'medium',
    label,
    helperText,
    errorText,
    state = 'default',
    fullWidth = false,
    onChange,
    className = '',
    testId,
    ...props
  }, ref) => {
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(value || defaultValue || null);
    const [isOpen, setIsOpen] = React.useState(false);

    React.useEffect(() => {
      if (value !== undefined) {
        setSelectedDate(value);
      }
    }, [value]);

    const handleDateChange = (date: Date | null) => {
      if (value === undefined) {
        setSelectedDate(date);
      }
      onChange?.(date);
      setIsOpen(false);
    };

    const formatDate = (date: Date | null) => {
      if (!date) return '';
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    };

    const displayText = state === 'error' && errorText ? errorText : helperText;

    const sizeStyles = {
      small: 'px-3 py-2 text-ios-footnote min-h-[32px]',
      medium: 'px-4 py-3 text-ios-body min-h-[44px]',
      large: 'px-5 py-4 text-ios-callout min-h-[52px]'
    };

    const stateStyles = {
      default: 'border-separator-opaque dark:border-separator-opaque-dark',
      error: 'border-systemRed-500',
      success: 'border-systemGreen-500'
    };

    const baseStyles = 'bg-fill-secondary dark:bg-fill-secondary-dark border transition-all duration-200 ease-ios focus:outline-none focus:border-systemBlue-500 focus:bg-background-primary dark:focus:bg-background-tertiary-dark rounded-ios text-label-primary dark:text-label-primary-dark cursor-pointer';

    const disabledStyles = disabled 
      ? 'opacity-50 cursor-not-allowed bg-fill-quaternary dark:bg-fill-quaternary-dark' 
      : '';

    const widthStyles = fullWidth ? 'w-full' : '';

    const inputClasses = [
      baseStyles,
      sizeStyles[size],
      stateStyles[state],
      disabledStyles,
      widthStyles,
      className
    ].filter(Boolean).join(' ');

    return (
      <div className={`${fullWidth ? 'w-full' : ''} space-y-1 relative`}>
        {label && (
          <label className="block text-ios-subhead font-medium text-label-primary dark:text-label-primary-dark">
            {label}
          </label>
        )}
        
        <div className="relative">
          <input
            ref={ref}
            type="text"
            readOnly
            value={formatDate(selectedDate)}
            placeholder="Select date"
            disabled={disabled}
            onClick={() => !disabled && setIsOpen(!isOpen)}
            className={`${inputClasses} pr-10`}
            data-testid={testId}
            {...props}
          />
          
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <Icon name="settings" size="medium" color="tertiary" />
          </div>
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-background-primary dark:bg-background-secondary-dark border border-separator-opaque dark:border-separator-opaque-dark rounded-ios-lg shadow-modal z-popover p-4">
            <div className="text-center mb-4">
              <h3 className="text-ios-headline font-semibold text-label-primary dark:text-label-primary-dark">
                Select Date
              </h3>
            </div>
            
            <div className="space-y-3">
              <input
                type="date"
                value={selectedDate ? selectedDate.toISOString().split('T')[0] : ''}
                min={min ? min.toISOString().split('T')[0] : undefined}
                max={max ? max.toISOString().split('T')[0] : undefined}
                onChange={(e) => {
                  const newDate = e.target.value ? new Date(e.target.value) : null;
                  handleDateChange(newDate);
                }}
                className="w-full p-3 border border-separator-opaque dark:border-separator-opaque-dark rounded-ios bg-background-primary dark:bg-background-tertiary-dark text-label-primary dark:text-label-primary-dark"
              />
              
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 py-2 px-4 text-ios-body text-label-secondary dark:text-label-secondary-dark hover:bg-fill-quaternary dark:hover:bg-fill-quaternary-dark rounded-ios transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => handleDateChange(new Date())}
                  className="flex-1 py-2 px-4 text-ios-body text-systemBlue-500 dark:text-systemBlue-400 hover:bg-systemBlue-50 dark:hover:bg-systemBlue-900/20 rounded-ios transition-colors"
                >
                  Today
                </button>
              </div>
            </div>
          </div>
        )}
        
        {displayText && (
          <p className={`text-ios-footnote ${
            state === 'error' 
              ? 'text-systemRed-500 dark:text-systemRed-400' 
              : state === 'success'
              ? 'text-systemGreen-500 dark:text-systemGreen-400'
              : 'text-label-tertiary dark:text-label-tertiary-dark'
          }`}>
            {displayText}
          </p>
        )}
      </div>
    );
  }
);

DatePicker.displayName = 'DatePicker';