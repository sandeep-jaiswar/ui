import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { DatePicker } from './DatePicker';

describe('DatePicker', () => {
  it('renders with default props', () => {
    render(<DatePicker testId="datepicker" />);
    const datepicker = screen.getByTestId('datepicker');
    expect(datepicker).toBeInTheDocument();
  });

  it('opens calendar when clicked', () => {
    render(<DatePicker testId="datepicker" />);
    
    fireEvent.click(screen.getByTestId('datepicker'));
    expect(screen.getByText('Select Date')).toBeInTheDocument();
  });

  it('handles date selection', () => {
    const handleChange = vi.fn();
    render(<DatePicker onChange={handleChange} testId="datepicker" />);
    
    fireEvent.click(screen.getByTestId('datepicker'));
    
    const dateInput = screen.getByDisplayValue('');
    fireEvent.change(dateInput, { target: { value: '2024-03-15' } });
    
    expect(handleChange).toHaveBeenCalled();
  });

  it('formats date correctly', () => {
    const testDate = new Date('2024-03-15');
    render(<DatePicker value={testDate} testId="datepicker" />);
    
    const input = screen.getByTestId('datepicker');
    expect(input).toHaveValue('Mar 15, 2024');
  });

  it('shows today button', () => {
    render(<DatePicker testId="datepicker" />);
    
    fireEvent.click(screen.getByTestId('datepicker'));
    expect(screen.getByText('Today')).toBeInTheDocument();
  });
});