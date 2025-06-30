import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Slider } from './Slider';

describe('Slider', () => {
  it('renders with default props', () => {
    render(<Slider testId="slider" />);
    const slider = screen.getByTestId('slider');
    expect(slider).toBeInTheDocument();
    expect(slider).toHaveAttribute('type', 'range');
  });

  it('renders with custom min, max, and step', () => {
    render(<Slider min={0} max={10} step={0.5} testId="slider" />);
    const slider = screen.getByTestId('slider');
    expect(slider).toHaveAttribute('min', '0');
    expect(slider).toHaveAttribute('max', '10');
    expect(slider).toHaveAttribute('step', '0.5');
  });

  it('handles value changes', () => {
    const handleChange = vi.fn();
    render(<Slider onChange={handleChange} testId="slider" />);
    
    fireEvent.change(screen.getByTestId('slider'), { target: { value: '75' } });
    expect(handleChange).toHaveBeenCalledWith(75);
  });

  it('renders with label', () => {
    render(<Slider label="Volume" testId="slider" />);
    expect(screen.getByText('Volume')).toBeInTheDocument();
  });

  it('shows value when showValue is true', () => {
    render(<Slider value={60} showValue testId="slider" />);
    expect(screen.getByText('60')).toBeInTheDocument();
  });

  it('formats value with custom formatter', () => {
    const formatValue = (value: number) => `${value}%`;
    render(<Slider value={75} showValue formatValue={formatValue} testId="slider" />);
    expect(screen.getByText('75%')).toBeInTheDocument();
  });

  it('applies disabled styles when disabled', () => {
    render(<Slider disabled testId="slider" />);
    const slider = screen.getByTestId('slider');
    expect(slider).toBeDisabled();
  });
});