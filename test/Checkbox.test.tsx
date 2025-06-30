import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Checkbox } from '../src/Checkbox';

describe('Checkbox', () => {
  it('renders with default props', () => {
    render(<Checkbox testId="checkbox" />);
    const checkbox = screen.getByTestId('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  it('renders with checked state', () => {
    render(<Checkbox checked testId="checkbox" />);
    const checkbox = screen.getByTestId('checkbox');
    expect(checkbox).toBeChecked();
  });

  it('handles change events', () => {
    const handleChange = vi.fn();
    render(<Checkbox onChange={handleChange} testId="checkbox" />);

    fireEvent.click(screen.getByTestId('checkbox'));
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('does not call onChange when disabled', () => {
    const handleChange = vi.fn();
    render(<Checkbox disabled onChange={handleChange} testId="checkbox" />);

    fireEvent.click(screen.getByTestId('checkbox'));
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Checkbox size="small" testId="checkbox" />);
    expect(screen.getByTestId('checkbox')).toHaveClass('w-4', 'h-4');

    rerender(<Checkbox size="medium" testId="checkbox" />);
    expect(screen.getByTestId('checkbox')).toHaveClass('w-5', 'h-5');

    rerender(<Checkbox size="large" testId="checkbox" />);
    expect(screen.getByTestId('checkbox')).toHaveClass('w-6', 'h-6');
  });

  it('renders with label', () => {
    render(<Checkbox label="Accept terms" testId="checkbox" />);
    expect(screen.getByText('Accept terms')).toBeInTheDocument();
  });

  it('handles label click', () => {
    const handleChange = vi.fn();
    render(<Checkbox label="Click me" onChange={handleChange} testId="checkbox" />);

    fireEvent.click(screen.getByText('Click me'));
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('applies disabled styles when disabled', () => {
    render(<Checkbox disabled testId="checkbox" />);
    const checkbox = screen.getByTestId('checkbox');
    expect(checkbox).toBeDisabled();
    expect(checkbox).toHaveClass('opacity-50', 'cursor-not-allowed');
  });

  it('handles indeterminate state', () => {
    render(<Checkbox indeterminate testId="checkbox" />);
    const checkbox = screen.getByTestId('checkbox') as HTMLInputElement;
    expect(checkbox.indeterminate).toBe(true);
  });
});