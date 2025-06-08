import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Toggle } from './Toggle';

describe('Toggle', () => {
  const mockOnChange = jest.fn();
  const defaultProps = {
    checked: false,
    onChange: mockOnChange,
  };

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  test('renders the toggle component', () => {
    render(<Toggle {...defaultProps} />);
    const toggleInput = screen.getByRole('checkbox');
    expect(toggleInput).toBeInTheDocument();
  });

  test('displays the correct checked state', () => {
    const { rerender } = render(<Toggle {...defaultProps} checked={false} />);
    const toggleInput = screen.getByRole('checkbox');
    expect(toggleInput).not.toBeChecked();

    rerender(<Toggle {...defaultProps} checked={true} />);
    expect(toggleInput).toBeChecked();
  });

  test('calls onChange when clicked and not disabled', () => {
    render(<Toggle {...defaultProps} checked={false} />);
    const toggleInput = screen.getByRole('checkbox');

    fireEvent.click(toggleInput);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(true);

    mockOnChange.mockClear();
    render(<Toggle {...defaultProps} checked={true} />);
    const toggleInputChecked = screen.getByRole('checkbox');

    fireEvent.click(toggleInputChecked);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(false);
  });

  test('does not call onChange when disabled', () => {
    render(<Toggle {...defaultProps} disabled={true} checked={false} />);
    const toggleInput = screen.getByRole('checkbox');

    fireEvent.click(toggleInput);
    expect(mockOnChange).not.toHaveBeenCalled();
  });

  test('renders the label and associates it with the input', () => {
    const labelText = 'Enable Notifications';
    render(<Toggle {...defaultProps} label={labelText} id="notifications-toggle" />);
    const toggleInput = screen.getByRole('checkbox');
    const labelElement = screen.getByText(labelText);

    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveAttribute('for', 'notifications-toggle');
    expect(toggleInput).toHaveAttribute('id', 'notifications-toggle');
  });

  // Basic test to check if disabled class is applied (example)
  test('applies disabled styles when disabled', () => {
    render(<Toggle {...defaultProps} disabled={true} />);
    const toggleContainer = screen.getByRole('checkbox').closest('div');
    expect(toggleContainer).toHaveClass('opacity-50');
  });
});
