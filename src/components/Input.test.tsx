import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Input } from './Input';

describe('Input', () => {
  it('renders with default props', () => {
    render(<Input testId="input" />);
    const input = screen.getByTestId('input');
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('bg-fill-secondary');
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Input variant="filled" testId="input" />);
    expect(screen.getByTestId('input')).toHaveClass('bg-fill-secondary');

    rerender(<Input variant="outlined" testId="input" />);
    expect(screen.getByTestId('input')).toHaveClass('bg-transparent', 'border-separator-opaque');

    rerender(<Input variant="plain" testId="input" />);
    expect(screen.getByTestId('input')).toHaveClass('bg-transparent', 'border-none');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Input size="small" testId="input" />);
    expect(screen.getByTestId('input')).toHaveClass('px-3', 'py-2', 'min-h-[32px]');

    rerender(<Input size="medium" testId="input" />);
    expect(screen.getByTestId('input')).toHaveClass('px-4', 'py-3', 'min-h-[44px]');

    rerender(<Input size="large" testId="input" />);
    expect(screen.getByTestId('input')).toHaveClass('px-5', 'py-4', 'min-h-[52px]');
  });

  it('renders with different states', () => {
    const { rerender } = render(<Input state="error" testId="input" />);
    expect(screen.getByTestId('input')).toHaveClass('border-systemRed-500');

    rerender(<Input state="success" testId="input" />);
    expect(screen.getByTestId('input')).toHaveClass('border-systemGreen-500');
  });

  it('renders with label', () => {
    render(<Input label="Username" testId="input" />);
    expect(screen.getByText('Username')).toBeInTheDocument();
  });

  it('renders with helper text', () => {
    render(<Input helperText="Enter your username" testId="input" />);
    expect(screen.getByText('Enter your username')).toBeInTheDocument();
  });

  it('renders with error text', () => {
    render(<Input state="error" errorText="Username is required" testId="input" />);
    expect(screen.getByText('Username is required')).toBeInTheDocument();
  });

  it('handles change events', () => {
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} testId="input" />);
    
    fireEvent.change(screen.getByTestId('input'), { target: { value: 'test' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('shows clear button when clearable and has value', () => {
    render(<Input clearable value="test" testId="input" />);
    expect(screen.getByLabelText('Clear input')).toBeInTheDocument();
  });

  it('clears input when clear button is clicked', () => {
    const handleChange = vi.fn();
    render(<Input clearable value="test" onChange={handleChange} testId="input" />);
    
    fireEvent.click(screen.getByLabelText('Clear input'));
    expect(handleChange).toHaveBeenCalledWith(expect.objectContaining({
      target: expect.objectContaining({ value: '' })
    }));
  });

  it('renders with start icon', () => {
    const StartIcon = () => <span data-testid="start-icon">🔍</span>;
    render(<Input startIcon={<StartIcon />} testId="input" />);
    expect(screen.getByTestId('start-icon')).toBeInTheDocument();
    expect(screen.getByTestId('input')).toHaveClass('pl-10');
  });

  it('renders with end icon', () => {
    const EndIcon = () => <span data-testid="end-icon">👁️</span>;
    render(<Input endIcon={<EndIcon />} testId="input" />);
    expect(screen.getByTestId('end-icon')).toBeInTheDocument();
    expect(screen.getByTestId('input')).toHaveClass('pr-10');
  });

  it('applies full width styles', () => {
    render(<Input fullWidth testId="input" />);
    expect(screen.getByTestId('input')).toHaveClass('w-full');
  });

  it('applies disabled styles when disabled', () => {
    render(<Input disabled testId="input" />);
    const input = screen.getByTestId('input');
    expect(input).toBeDisabled();
    expect(input).toHaveClass('opacity-50', 'cursor-not-allowed');
  });
});