import React from 'react';

export interface AvatarProps {
  /** Avatar size */
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  /** Image source URL */
  src?: string;
  /** Alt text for the image */
  alt?: string;
  /** Fallback initials when no image */
  initials?: string;
  /** Avatar shape */
  shape?: 'circle' | 'rounded' | 'square';
  /** Background color for initials */
  backgroundColor?: string;
  /** Text color for initials */
  textColor?: string;
  /** Is the user online? */
  online?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Test ID for testing */
  testId?: string;
}

/** iOS-inspired avatar component for user profile pictures */
export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({
    size = 'medium',
    src,
    alt = 'Avatar',
    initials,
    shape = 'circle',
    backgroundColor = '#007AFF',
    textColor = '#FFFFFF',
    online = false,
    className = '',
    testId,
    ...props
  }, ref) => {
    const sizeStyles = {
      small: 'w-8 h-8 text-ios-caption-1',
      medium: 'w-10 h-10 text-ios-footnote',
      large: 'w-12 h-12 text-ios-subhead',
      xlarge: 'w-16 h-16 text-ios-body'
    };

    const shapeStyles = {
      circle: 'rounded-full',
      rounded: 'rounded-ios',
      square: 'rounded-none'
    };

    const baseStyles = 'relative inline-flex items-center justify-center font-semibold overflow-hidden bg-fill-secondary dark:bg-fill-secondary-dark';

    const renderContent = () => {
      if (src) {
        return (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Hide image on error to show fallback
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        );
      }

      if (initials) {
        return (
          <span 
            className="select-none"
            style={{ color: textColor }}
          >
            {initials.slice(0, 2).toUpperCase()}
          </span>
        );
      }

      // Default user icon
      return (
        <svg 
          className="w-1/2 h-1/2 text-label-tertiary dark:text-label-tertiary-dark" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      );
    };

    const onlineIndicatorSize = {
      small: 'w-2 h-2',
      medium: 'w-2.5 h-2.5',
      large: 'w-3 h-3',
      xlarge: 'w-4 h-4'
    };

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${sizeStyles[size]} ${shapeStyles[shape]} ${className}`.trim()}
        style={!src && initials ? { backgroundColor } : undefined}
        data-testid={testId}
        {...props}
      >
        {renderContent()}
        
        {online && (
          <div 
            className={`absolute bottom-0 right-0 ${onlineIndicatorSize[size]} bg-systemGreen-500 border-2 border-background-primary dark:border-background-primary-dark rounded-full`}
            aria-label="Online"
          />
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';