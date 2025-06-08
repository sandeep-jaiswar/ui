import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Slider } from './Slider';

describe('Slider', () => {
  const mockOnChange = jest.fn();
  const defaultProps = {
    min: 0,
    max: 100,
    step: 1,
    value: 50,
    onChange: mockOnChange,
  };

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  test('renders the slider component', () => {
    render(<Slider {...defaultProps} />);
    expect(screen.getByTestId('slider-container')).toBeInTheDocument();
    expect(screen.getByTestId('slider-filled-track')).toBeInTheDocument();
    expect(screen.getByTestId('slider-thumb')).toBeInTheDocument();
  });

  test('renders with correct initial value representation (thumb position and filled track width)', () => {
    const initialValue = 25;
    render(<Slider {...defaultProps} value={initialValue} min={0} max={100} />);

    const thumb = screen.getByTestId('slider-thumb');
    const filledTrack = screen.getByTestId('slider-filled-track');

    const expectedPercentage = (initialValue / (defaultProps.max - defaultProps.min)) * 100;

    // Check the width of the filled track
    // We need to be a bit flexible with the exact calculated style string
    expect(filledTrack).toHaveStyle(`width: ${expectedPercentage}%`);

    // Check the left position of the thumb
    // The style is `left: ${thumbPosition}%; transform: translate(-${thumbPosition}%, -50%);`
    // We can check the 'left' style directly.
    expect(thumb).toHaveStyle(`left: ${expectedPercentage}%`);
  });

  test('calls onChange when clicking on the slider track', () => {
    render(<Slider {...defaultProps} min={0} max={100} step={1} />);
    const sliderContainer = screen.getByTestId('slider-container');

    // Mock getBoundingClientRect for the container to simulate click position
    // Simulate a container width of 200px for testing purposes
    const mockBoundingClientRect = jest.fn(() => ({
      left: 0,
      right: 200,
      top: 0,
      bottom: 20,
      width: 200, // Assume a width of 200
      height: 20,
      x: 0,
      y: 0,
      toJSON: jest.fn(),
    }));
    Object.defineProperty(sliderContainer, 'getBoundingClientRect', {
        configurable: true,
        value: mockBoundingClientRect,
    });

    // Simulate a click at a specific position (e.g., 50% of the width)
    const clickX = 100; // Corresponds to 50% of the 200px width
    fireEvent.mouseDown(sliderContainer, { clientX: clickX });
    fireEvent.mouseUp(sliderContainer);

    // Expected value should be 50 (since click is at 50% of the track, min=0, max=100)
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    const calledValue = mockOnChange.mock.calls[0][0];
    expect(calledValue).toBe(50);
  });

  test('calls onChange and rounds to the nearest step when clicking', () => {
    render(<Slider {...defaultProps} min={0} max={100} step={10} />);
    const sliderContainer = screen.getByTestId('slider-container');

    // Mock getBoundingClientRect with a width of 200px
    const mockBoundingClientRect = jest.fn(() => ({
      left: 0,
      right: 200,
      top: 0,
      bottom: 20,
      width: 200,
      height: 20,
      x: 0,
      y: 0,
      toJSON: jest.fn(),
    }));
    Object.defineProperty(sliderContainer, 'getBoundingClientRect', {
        configurable: true,
        value: mockBoundingClientRect,
    });

    // Simulate a click at a position that would result in a non-step value (e.g., 33%)
    const clickX = 66; // Corresponds to 33% of the 200px width
    fireEvent.mouseDown(sliderContainer, { clientX: clickX });
    fireEvent.mouseUp(sliderContainer);

    // Expected value should be rounded to the nearest step (10).
    // 33% of 100 is 33. Nearest step to 33 is 30.
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    const calledValue = mockOnChange.mock.calls[0][0];
    expect(calledValue).toBe(30);
  });


  test('renders start and end adornments', () => {
    const StartIcon = () => <span data-testid="start-icon">Start</span>;
    const EndIcon = () => <span data-testid="end-icon">End</span>;
    render(
      <Slider
        {...defaultProps}
        startAdornment={<StartIcon />}
        endAdornment={<EndIcon />}
      />
    );
    expect(screen.getByTestId('start-icon')).toBeInTheDocument();
    expect(screen.getByTestId('end-icon')).toBeInTheDocument();
  });

  test('applies faded style to end adornment when endAdornmentFaded is true', () => {
    const EndIcon = () => <span data-testid="end-icon">End</span>;
    render(
      <Slider
        {...defaultProps}
        endAdornment={<EndIcon />}
        endAdornmentFaded={true}
      />
    );
    const endAdornmentContainer = screen.getByTestId('slider-end-adornment-container');
    expect(endAdornmentContainer).toHaveClass('opacity-40');
  });
});
