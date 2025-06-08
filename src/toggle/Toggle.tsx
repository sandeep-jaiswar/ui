import React, { InputHTMLAttributes, forwardRef } from 'react';

export interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}
export const Toggle = forwardRef<HTMLInputElement, ToggleProps>((
  { checked, onChange, label, className, disabled, ...props },
  ref
) => {
  const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      onChange(event.target.checked);
    }
  };

  // Basic Tailwind styling for the toggle switch
  const toggleContainerStyles = 'relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in';
  const toggleCheckboxStyles = 
    'toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer transition duration-200 ease-in';
  const toggleLabelStyles = 'block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer';

  const checkedCheckboxStyles = checked ? 'right-0 border-green-500' : 'left-0 border-gray-300';
  const checkedLabelStyles = checked ? 'bg-green-500' : 'bg-gray-300';
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';


  return (
    <div className={`flex items-center ${className || ''}`}> {/* Wrapper div for label and toggle */}
      <div className={`${toggleContainerStyles} ${disabledStyles}`}> {/* Container for the actual toggle switch */}
        <input
          ref={ref}
          type="checkbox"
          className={`${toggleCheckboxStyles} ${checkedCheckboxStyles}`}
          checked={checked}
          onChange={handleToggleChange}
          disabled={disabled}
          {...props}
        />
        <label
          htmlFor={props.id}
          className={`${toggleLabelStyles} ${checkedLabelStyles}`}
        ></label>
      </div>
      {label && (
        <label htmlFor={props.id} className={`text-gray-700 ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}>
          {label}
        </label>
      )}
    </div>
  );
});

Toggle.displayName = 'Toggle';
