import React from 'react';

export interface ColorPickerProps {
  /** Selected color */
  value?: string;
  /** Default selected color */
  defaultValue?: string;
  /** Predefined color palette */
  colors?: string[];
  /** Is the color picker disabled? */
  disabled?: boolean;
  /** Color picker size */
  size?: 'small' | 'medium' | 'large';
  /** Label text */
  label?: string;
  /** Helper text */
  helperText?: string;
  /** Full width color picker */
  fullWidth?: boolean;
  /** Change handler */
  onChange?: (color: string) => void;
  /** Additional CSS classes */
  className?: string;
  /** Test ID for testing */
  testId?: string;
}

/** iOS-inspired color picker component */
export const ColorPicker = React.forwardRef<HTMLDivElement, ColorPickerProps>(
  ({
    value,
    defaultValue = '#007AFF',
    colors = [
      '#007AFF', '#34C759', '#FF9500', '#FF3B30', '#AF52DE',
      '#5856D6', '#FF2D92', '#00C7BE', '#8E8E93', '#000000'
    ],
    disabled = false,
    size = 'medium',
    label,
    helperText,
    fullWidth = false,
    onChange,
    className = '',
    testId,
    ...props
  }, ref) => {
    const [selectedColor, setSelectedColor] = React.useState(value || defaultValue);
    const [isOpen, setIsOpen] = React.useState(false);
    const [customColor, setCustomColor] = React.useState(selectedColor);

    React.useEffect(() => {
      if (value !== undefined) {
        setSelectedColor(value);
        setCustomColor(value);
      }
    }, [value]);

    const handleColorSelect = (color: string) => {
      if (value === undefined) {
        setSelectedColor(color);
      }
      setCustomColor(color);
      onChange?.(color);
      setIsOpen(false);
    };

    const handleCustomColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newColor = e.target.value;
      setCustomColor(newColor);
      handleColorSelect(newColor);
    };

    const sizeStyles = {
      small: 'w-8 h-8',
      medium: 'w-10 h-10',
      large: 'w-12 h-12'
    };

    const colorSwatchSize = {
      small: 'w-6 h-6',
      medium: 'w-8 h-8',
      large: 'w-10 h-10'
    };

    return (
      <div className={`${fullWidth ? 'w-full' : ''} space-y-1 relative`} ref={ref} data-testid={testId} {...props}>
        {label && (
          <label className="block text-ios-subhead font-medium text-label-primary dark:text-label-primary-dark">
            {label}
          </label>
        )}
        
        <button
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          className={`
            ${sizeStyles[size]} rounded-ios border-2 border-separator-opaque dark:border-separator-opaque-dark
            transition-all duration-200 ease-ios cursor-pointer
            ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 active:scale-95'}
          `}
          style={{ backgroundColor: selectedColor }}
          aria-label={`Selected color: ${selectedColor}`}
        />

        {isOpen && (
          <div className="absolute top-full left-0 mt-2 bg-background-primary dark:bg-background-secondary-dark border border-separator-opaque dark:border-separator-opaque-dark rounded-ios-lg shadow-modal z-popover p-4 min-w-[280px]">
            <div className="space-y-4">
              <h3 className="text-ios-headline font-semibold text-label-primary dark:text-label-primary-dark">
                Choose Color
              </h3>
              
              {/* Predefined Colors */}
              <div>
                <h4 className="text-ios-subhead font-medium text-label-secondary dark:text-label-secondary-dark mb-2">
                  Presets
                </h4>
                <div className="grid grid-cols-5 gap-2">
                  {colors.map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => handleColorSelect(color)}
                      className={`
                        ${colorSwatchSize[size]} rounded-ios border-2 transition-all duration-200 ease-ios
                        ${selectedColor === color 
                          ? 'border-systemBlue-500 scale-110' 
                          : 'border-separator-opaque dark:border-separator-opaque-dark hover:scale-105'
                        }
                      `}
                      style={{ backgroundColor: color }}
                      aria-label={`Select color ${color}`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Custom Color */}
              <div>
                <h4 className="text-ios-subhead font-medium text-label-secondary dark:text-label-secondary-dark mb-2">
                  Custom
                </h4>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={customColor}
                    onChange={handleCustomColorChange}
                    className="w-12 h-8 rounded-ios border border-separator-opaque dark:border-separator-opaque-dark cursor-pointer"
                  />
                  <input
                    type="text"
                    value={customColor}
                    onChange={(e) => setCustomColor(e.target.value)}
                    onBlur={() => handleColorSelect(customColor)}
                    className="flex-1 px-3 py-2 text-ios-footnote bg-fill-secondary dark:bg-fill-secondary-dark border border-separator-opaque dark:border-separator-opaque-dark rounded-ios text-label-primary dark:text-label-primary-dark"
                    placeholder="#000000"
                  />
                </div>
              </div>
              
              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 py-2 px-4 text-ios-body text-label-secondary dark:text-label-secondary-dark hover:bg-fill-quaternary dark:hover:bg-fill-quaternary-dark rounded-ios transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => handleColorSelect(customColor)}
                  className="flex-1 py-2 px-4 text-ios-body text-systemBlue-500 dark:text-systemBlue-400 hover:bg-systemBlue-50 dark:hover:bg-systemBlue-900/20 rounded-ios transition-colors"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}
        
        {helperText && (
          <p className="text-ios-footnote text-label-tertiary dark:text-label-tertiary-dark">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

ColorPicker.displayName = 'ColorPicker';