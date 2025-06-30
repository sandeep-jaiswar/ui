import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Spinner } from '../src/Spinner';

describe('Spinner', () => {
  it('renders with default props', () => {
    render(<Spinner testId="spinner" />);
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();

    const spinnerElement = screen.getByRole('status');
    expect(spinnerElement).toHaveAttribute('aria-label', 'Loading...');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Spinner size="small" testId="spinner" />);
    expect(screen.getByRole('status')).toHaveClass('w-4', 'h-4');

    rerender(<Spinner size="medium" testId="spinner" />);
    expect(screen.getByRole('status')).toHaveClass('w-6', 'h-6');

    rerender(<Spinner size="large" testId="spinner" />);
    expect(screen.getByRole('status')).toHaveClass('w-8', 'h-8');
  });

  it('renders with different colors', () => {
    const { rerender } = render(<Spinner color="blue" testId="spinner" />);
    expect(screen.getByRole('status')).toHaveClass('border-systemBlue-500');

    rerender(<Spinner color="green" testId="spinner" />);
    expect(screen.getByRole('status')).toHaveClass('border-systemGreen-500');
  });

  it('shows label when showLabel is true', () => {
    render(<Spinner showLabel testId="spinner" />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('shows custom label', () => {
    render(<Spinner showLabel label="Please wait..." testId="spinner" />);
    expect(screen.getByText('Please wait...')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Spinner className="custom-class" testId="spinner" />);
    expect(screen.getByTestId('spinner')).toHaveClass('custom-class');
  });
});