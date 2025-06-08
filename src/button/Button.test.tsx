import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';

// A simple mock icon component
const MockIcon = () => <span data-testid="mock-icon">🚀</span>;

describe('Button', () => {
  const mockOnClick = jest.fn();
  const defaultProps = {
    label: 'Test Button',
    onClick: mockOnClick,
  };

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  test('renders the button with the correct label', () => {
    render(<Button {...defaultProps} label="Click Me" />);
    const buttonElement = screen.getByRole('button', { name: /Click Me/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Click Me');
  });

  test('calls onClick handler when clicked and not disabled', () => {
    render(<Button {...defaultProps} />);
    const buttonElement = screen.getByRole('button', { name: /Test Button/i });

    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test('does not call onClick handler when disabled', () => {
    render(<Button {...defaultProps} disabled={true} />);
    const buttonElement = screen.getByRole('button', { name: /Test Button/i });

    fireEvent.click(buttonElement);
    expect(mockOnClick).not.toHaveBeenCalled();
    expect(buttonElement).toBeDisabled();
  });

  test('renders the icon when provided', () => {
    render(<Button {...defaultProps} icon={<MockIcon />} />);
    const buttonElement = screen.getByRole('button', { name: /Test Button/i });
    const iconElement = screen.getByTestId('mock-icon');

    expect(buttonElement).toContainElement(iconElement);
    expect(iconElement).toBeInTheDocument();
  });

  // Test cases for different variants and colors
  test('applies solid blue styles', () => {
    render(<Button {...defaultProps} variant="solid" color="blue" />);
    const buttonElement = screen.getByRole('button', { name: /Test Button/i });
    expect(buttonElement).toHaveClass('bg-blue-600');
    expect(buttonElement).toHaveClass('text-white');
  });

  test('applies filled blue styles', () => {
    render(<Button {...defaultProps} variant="filled" color="blue" />);
    const buttonElement = screen.getByRole('button', { name: /Test Button/i });
    expect(buttonElement).toHaveClass('bg-blue-100');
    expect(buttonElement).toHaveClass('text-blue-700');
  });

   test('applies solid dark styles', () => {
    render(<Button {...defaultProps} variant="solid" color="dark" />);
    const buttonElement = screen.getByRole('button', { name: /Test Button/i });
    expect(buttonElement).toHaveClass('bg-gray-800');
    expect(buttonElement).toHaveClass('text-white');
  });

   test('applies text blue styles', () => {
    render(<Button {...defaultProps} variant="text" color="blue" />);
    const buttonElement = screen.getByRole('button', { name: /Test Button/i });
    expect(buttonElement).toHaveClass('text-blue-600');
    expect(buttonElement).not.toHaveClass('bg-blue-600'); // Should not have background class for text variant
  });

  // Test cases for different sizes
  test('applies small size styles', () => {
    render(<Button {...defaultProps} size="small" />);
    const buttonElement = screen.getByRole('button', { name: /Test Button/i });
    expect(buttonElement).toHaveClass('px-3');
    expect(buttonElement).toHaveClass('py-1.5');
    expect(buttonElement).toHaveClass('text-sm');
  });

  test('applies medium size styles', () => {
    render(<Button {...defaultProps} size="medium" />);
    const buttonElement = screen.getByRole('button', { name: /Test Button/i });
    expect(buttonElement).toHaveClass('px-4');
    expect(buttonElement).toHaveClass('py-2');
     expect(buttonElement).toHaveClass('text-base');
  });

  // Test case for disabled state styles (assuming a common disabled style)
  test('applies disabled styles', () => {
    render(<Button {...defaultProps} disabled={true} />);
    const buttonElement = screen.getByRole('button', { name: /Test Button/i });
    expect(buttonElement).toHaveClass('bg-gray-200');
    expect(buttonElement).toHaveClass('text-gray-500');
    expect(buttonElement).toHaveClass('cursor-not-allowed');
  });

});
