import React, { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** The visual style of the button */
  variant?: 'solid' | 'filled' | 'text';
  /** The color theme of the button */
  color?: 'blue' | 'dark' | 'gray';
  /** How large should the button be? */
  size?: 'small' | 'medium'; // Simplified sizes based on image
  /** Button contents */
  label: string;
  /** Optional icon to display in the button */
  icon?: React.ReactNode;
}

/** Primary UI component for user interaction */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((
  {
    variant = 'solid',
    color = 'blue',
    size = 'medium',
    label,
    icon,
    className,
    disabled,
    ...props
  },
  ref
) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold leading-none rounded-md transition-colors duration-200 ease-in-out';

  const sizeStyles = {
    small: 'px-3 py-1.5 text-sm', // Adjusted padding/text size based on image
    medium: 'px-4 py-2 text-base', // Adjusted padding/text size based on image
  }[size];

  const colorVariantStyles = () => {
    if (disabled) {
      // Disabled styles, assuming a general disabled appearance
      return 'bg-gray-200 text-gray-500 cursor-not-allowed';
    }

    switch (variant) {
      case 'solid':
        if (color === 'blue') {
          return 'bg-blue-600 text-white hover:bg-blue-700';
        } else if (color === 'dark') {
          return 'bg-gray-800 text-white hover:bg-gray-700';
        }
        break;
      case 'filled': // Style for the light blue and light gray filled buttons
        if (color === 'blue') {
          return 'bg-blue-100 text-blue-700 hover:bg-blue-200';
        } else if (color === 'gray') {
          return 'bg-gray-200 text-gray-800 hover:bg-gray-300';
        }
        break;
      case 'text':
        if (color === 'blue') {
          return 'text-blue-600 hover:text-blue-800';
        } else if (color === 'dark') {
           // Although not explicitly in the image as a dark text button, adding for completeness
          return 'text-gray-700 hover:text-gray-900';
        } else if (color === 'gray') {
           // Although not explicitly in the image as a gray text button, adding for completeness
          return 'text-gray-500 hover:text-gray-700';
        }
        break;
      default:
        return '';
    }
     return ''; // Fallback
  };

   const paddingWithIcon = icon && label ? (size === 'small' ? 'pl-3 pr-4' : 'pl-4 pr-5') : sizeStyles;
   const spacingWithIcon = icon && label ? 'space-x-2' : '';

  return (
    <button
      ref={ref}
      type="button"
      className={`${baseStyles} ${variant === 'text' ? '' : sizeStyles} ${colorVariantStyles()} ${paddingWithIcon} ${spacingWithIcon} ${className || ''}`.trim()}
      disabled={disabled}
      {...props}
    >
      {icon && <span>{icon}</span>}
      {label && <span>{label}</span>}
    </button>
  );
});

Button.displayName = 'Button';
