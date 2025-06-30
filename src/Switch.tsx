import React from 'react';

export interface SwitchProps {
  /** Is the switch checked? */
  checked?: boolean;
  /** Default checked state for uncontrolled component */
  defaultChecked?: boolean;
  /** Switch size */
  size?: 'small' | 'medium' | 'large';
  /** Is the switch disabled? */
  disabled?: boolean;
  /** Switch color when checked */
  color?: 'green' | 'blue' | 'orange' | 'red' | 'purple';
  /** Change handler */
  onChange?: (checked: boolean) => void;
  /** Switch label */
  label?: string;
  /** Label position */
  labelPosition?: 'left' | 'right';
  /** Additional CSS classes */
  className?: string;
  /** Test ID for testing */
  testId?: string;
}

/** iOS-inspired switch component following Apple's toggle design */
export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({
    checked,
    defaultChecked = false,
    size = 'medium',
    disabled = false,
    color = 'green',
    onChange,
    label,
    labelPosition = 'right',
    className = '',
    testId,
    ...props
  }, ref) => {
    const [isChecked, setIsChecked] = React.useState(checked ?? defaultChecked);

    React.useEffect(() => {
      if (checked !== undefined) {
        setIsChecked(checked);
      }
    }, [checked]);

    const handleToggle = () => {
      if (disabled) return;
      
      const newChecked = !isChecked;
      if (checked === undefined) {
        setIsChecked(newChecked);
      }
      onChange?.(newChecked);
    };

    const sizeStyles = {
      small: 'w-8 h-5',
      medium: 'w-12 h-7',
      large: 'w-16 h-9'
    };

    const thumbSizeStyles = {
      small: 'w-3 h-3',
      medium: 'w-5 h-5',
      large: 'w-7 h-7'
    };

    const colorStyles = {
      green: 'bg-systemGreen-500 dark:bg-systemGreen-600',
      blue: 'bg-systemBlue-500 dark:bg-systemBlue-600',
      orange: 'bg-systemOrange-500 dark:bg-systemOrange-600',
      red: 'bg-systemRed-500 dark:bg-systemRed-600',
      purple: 'bg-systemPurple-500 dark:bg-systemPurple-600'
    };

    const baseStyles = 'relative inline-flex items-center rounded-full transition-all duration-200 ease-ios focus:outline-none focus-visible:ring-2 focus-visible:ring-systemBlue-500 focus-visible:ring-offset-2 cursor-pointer';
    const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';
    const backgroundStyles = isChecked 
      ? colorStyles[color]
      : 'bg-fill-tertiary dark:bg-fill-tertiary-dark';

    const thumbTranslateStyles = {
      small: isChecked ? 'translate-x-3' : 'translate-x-0.5',
      medium: isChecked ? 'translate-x-5' : 'translate-x-1',
      large: isChecked ? 'translate-x-7' : 'translate-x-1'
    };

    const switchElement = (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={isChecked}
        aria-label={label}
        disabled={disabled}
        className={`${baseStyles} ${sizeStyles[size]} ${backgroundStyles} ${disabledStyles} ${className}`.trim()}
        onClick={handleToggle}
        data-testid={testId}
        {...props}
      >
        <span
          className={`${thumbSizeStyles[size]} bg-white rounded-full shadow-ios-1 transform transition-transform duration-200 ease-ios ${thumbTranslateStyles[size]}`}
        />
      </button>
    );

    if (!label) {
      return switchElement;
    }

    return (
      <div className={`flex items-center gap-3 ${labelPosition === 'left' ? 'flex-row-reverse' : ''}`}>
        {switchElement}
        <label 
          className="text-ios-body text-label-primary dark:text-label-primary-dark cursor-pointer select-none"
          onClick={handleToggle}
        >
          {label}
        </label>
      </div>
    );
  }
);

Switch.displayName = 'Switch';