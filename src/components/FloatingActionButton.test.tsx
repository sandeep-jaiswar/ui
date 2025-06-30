import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { FloatingActionButton } from './FloatingActionButton';

describe('FloatingActionButton', () => {
  it('renders with default props', () => {
    render(<FloatingActionButton testId="fab" />);
    const fab = screen.getByTestId('fab');
    expect(fab).toBeInTheDocument();
    expect(fab).toHaveClass('bottom-6', 'right-6');
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    render(<FloatingActionButton onClick={handleClick} testId="fab" />);
    
    fireEvent.click(screen.getByTestId('fab'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('applies different sizes', () => {
    const { rerender } = render(<FloatingActionButton size="small" testId="fab" />);
    expect(screen.getByTestId('fab')).toHaveClass('w-12', 'h-12');

    rerender(<FloatingActionButton size="large" testId="fab" />);
    expect(screen.getByTestId('fab')).toHaveClass('w-16', 'h-16');
  });

  it('applies different colors', () => {
    const { rerender } = render(<FloatingActionButton color="green" testId="fab" />);
    expect(screen.getByTestId('fab')).toHaveClass('bg-systemGreen-500');

    rerender(<FloatingActionButton color="red" testId="fab" />);
    expect(screen.getByTestId('fab')).toHaveClass('bg-systemRed-500');
  });

  it('applies different positions', () => {
    const { rerender } = render(<FloatingActionButton position="top-left" testId="fab" />);
    expect(screen.getByTestId('fab')).toHaveClass('top-6', 'left-6');

    rerender(<FloatingActionButton position="bottom-left" testId="fab" />);
    expect(screen.getByTestId('fab')).toHaveClass('bottom-6', 'left-6');
  });

  it('renders custom children', () => {
    render(
      <FloatingActionButton testId="fab">
        <span>Custom</span>
      </FloatingActionButton>
    );
    expect(screen.getByText('Custom')).toBeInTheDocument();
  });

  it('applies disabled styles when disabled', () => {
    render(<FloatingActionButton disabled testId="fab" />);
    const fab = screen.getByTestId('fab');
    expect(fab).toBeDisabled();
    expect(fab).toHaveClass('opacity-50', 'cursor-not-allowed');
  });
});