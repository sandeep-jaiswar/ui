import React, { useRef, useState, useEffect } from 'react';

export interface SliderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  min?: number;
  max?: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  endAdornmentFaded?: boolean;
}

export const Slider: React.FC<SliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  startAdornment,
  endAdornment,
  endAdornmentFaded = false,
  className,
  ...props
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [sliderWidth, setSliderWidth] = useState(0);

  useEffect(() => {
    if (sliderRef.current) {
      setSliderWidth(sliderRef.current.offsetWidth);
    }
  }, [startAdornment, endAdornment]); // Recalculate width if adornments change

  const handleMouseDown = (event: React.MouseEvent) => {
    setIsDragging(true);
    updateValue(event.clientX);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (isDragging) {
      updateValue(event.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    setIsDragging(true);
    updateValue(event.touches[0].clientX);
  };

  const handleTouchMove = (event: TouchEvent) => {
    if (isDragging) {
      updateValue(event.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, onChange, sliderWidth, min, max, step]); // Add dependencies

  const updateValue = (clientX: number) => {
    if (!sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const clickX = clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    const newValue = min + percentage * (max - min);
    const steppedValue = Math.round(newValue / step) * step;
    onChange(steppedValue);
  };

  // Calculate the position of the thumb and the width of the filled track
  const percentage = (value - min) / (max - min);
  const thumbPosition = percentage * 100;

  return (
    <div
      ref={sliderRef}
      className={`flex items-center ${className}`}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      {...props}
    >
      {startAdornment && <div className="mr-2">{startAdornment}</div>}
      <div className="relative flex-grow h-5 flex items-center">
        {/* Track */}
        <div className="absolute left-0 right-0 h-1 bg-gray-300 rounded-full"></div>
        {/* Filled Track */}
        <div
          className="absolute left-0 h-1 bg-blue-600 rounded-full"
          style={{ width: `${thumbPosition}%` }}
        ></div>
        {/* Thumb */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full shadow border border-gray-300 cursor-pointer`}
          style={{ left: `${thumbPosition}%`, transform: `translate(-${thumbPosition}%, -50%)` }} // Adjust position based on percentage
        ></div>
      </div>
      {endAdornment && (
        <div className={`ml-2 ${endAdornmentFaded ? 'opacity-40' : ''}`}>
          {endAdornment}
        </div>
      )}
    </div>
  );
};
