import React from 'react';
import { Icon } from './Icon';

export interface TimelineItem {
  id: string;
  title: string;
  description?: string;
  timestamp: string;
  icon?: string;
  color?: 'blue' | 'green' | 'orange' | 'red' | 'purple';
  completed?: boolean;
}

export interface TimelineProps {
  /** Timeline items */
  items: TimelineItem[];
  /** Timeline variant */
  variant?: 'default' | 'compact';
  /** Timeline orientation */
  orientation?: 'vertical' | 'horizontal';
  /** Additional CSS classes */
  className?: string;
  /** Test ID for testing */
  testId?: string;
}

/** iOS-inspired timeline component for chronological data */
export const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  ({
    items,
    variant = 'default',
    orientation = 'vertical',
    className = '',
    testId,
    ...props
  }, ref) => {
    const colorStyles = {
      blue: 'bg-systemBlue-500 border-systemBlue-500',
      green: 'bg-systemGreen-500 border-systemGreen-500',
      orange: 'bg-systemOrange-500 border-systemOrange-500',
      red: 'bg-systemRed-500 border-systemRed-500',
      purple: 'bg-systemPurple-500 border-systemPurple-500'
    };

    if (orientation === 'horizontal') {
      return (
        <div
          ref={ref}
          className={`flex items-center gap-4 overflow-x-auto pb-4 ${className}`}
          data-testid={testId}
          {...props}
        >
          {items.map((item, index) => (
            <div key={item.id} className="flex items-center gap-4 min-w-0">
              <div className="flex flex-col items-center gap-2 min-w-0">
                {/* Icon/Dot */}
                <div className={`
                  w-8 h-8 rounded-full border-2 flex items-center justify-center
                  ${item.completed 
                    ? colorStyles[item.color || 'blue']
                    : 'bg-fill-tertiary dark:bg-fill-tertiary-dark border-separator-opaque dark:border-separator-opaque-dark'
                  }
                `}>
                  {item.icon ? (
                    <Icon 
                      name={item.icon} 
                      size="small" 
                      className={item.completed ? 'text-white' : 'text-label-tertiary dark:text-label-tertiary-dark'}
                    />
                  ) : item.completed ? (
                    <Icon name="check" size="small" className="text-white" />
                  ) : null}
                </div>
                
                {/* Content */}
                <div className="text-center min-w-0 max-w-[120px]">
                  <h4 className="text-ios-caption-1 font-medium text-label-primary dark:text-label-primary-dark truncate">
                    {item.title}
                  </h4>
                  <p className="text-ios-caption-2 text-label-tertiary dark:text-label-tertiary-dark">
                    {item.timestamp}
                  </p>
                </div>
              </div>
              
              {/* Connector */}
              {index < items.length - 1 && (
                <div className="w-8 h-0.5 bg-separator-nonOpaque dark:bg-separator-nonOpaque-dark" />
              )}
            </div>
          ))}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={`space-y-0 ${className}`}
        data-testid={testId}
        {...props}
      >
        {items.map((item, index) => (
          <div key={item.id} className="flex gap-4">
            {/* Timeline Line */}
            <div className="flex flex-col items-center">
              {/* Icon/Dot */}
              <div className={`
                w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0
                ${item.completed 
                  ? colorStyles[item.color || 'blue']
                  : 'bg-fill-tertiary dark:bg-fill-tertiary-dark border-separator-opaque dark:border-separator-opaque-dark'
                }
              `}>
                {item.icon ? (
                  <Icon 
                    name={item.icon} 
                    size="small" 
                    className={item.completed ? 'text-white' : 'text-label-tertiary dark:text-label-tertiary-dark'}
                  />
                ) : item.completed ? (
                  <Icon name="check" size="small" className="text-white" />
                ) : null}
              </div>
              
              {/* Connector Line */}
              {index < items.length - 1 && (
                <div className="w-0.5 h-12 bg-separator-nonOpaque dark:bg-separator-nonOpaque-dark mt-2" />
              )}
            </div>
            
            {/* Content */}
            <div className={`flex-1 ${variant === 'compact' ? 'pb-4' : 'pb-8'}`}>
              <div className="flex items-start justify-between mb-1">
                <h4 className="text-ios-subhead font-medium text-label-primary dark:text-label-primary-dark">
                  {item.title}
                </h4>
                <span className="text-ios-caption-1 text-label-tertiary dark:text-label-tertiary-dark ml-4 flex-shrink-0">
                  {item.timestamp}
                </span>
              </div>
              
              {item.description && (
                <p className="text-ios-footnote text-label-secondary dark:text-label-secondary-dark">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
);

Timeline.displayName = 'Timeline';