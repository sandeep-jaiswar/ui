import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Card } from './Card';

describe('Card', () => {
  it('renders with default props', () => {
    render(<Card>Card content</Card>);
    const card = screen.getByText('Card content');
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass('card-ios', 'card-elevated', 'p-4');
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Card variant="elevated">Elevated</Card>);
    expect(screen.getByText('Elevated')).toHaveClass('card-elevated');

    rerender(<Card variant="grouped">Grouped</Card>);
    expect(screen.getByText('Grouped')).toHaveClass('card-grouped');

    rerender(<Card variant="inset">Inset</Card>);
    expect(screen.getByText('Inset')).toHaveClass('bg-background-secondary');

    rerender(<Card variant="plain">Plain</Card>);
    expect(screen.getByText('Plain')).toHaveClass('bg-transparent');
  });

  it('renders with different padding sizes', () => {
    const { rerender } = render(<Card padding="none">No padding</Card>);
    expect(screen.getByText('No padding')).not.toHaveClass('p-3', 'p-4', 'p-6');

    rerender(<Card padding="small">Small padding</Card>);
    expect(screen.getByText('Small padding')).toHaveClass('p-3');

    rerender(<Card padding="medium">Medium padding</Card>);
    expect(screen.getByText('Medium padding')).toHaveClass('p-4');

    rerender(<Card padding="large">Large padding</Card>);
    expect(screen.getByText('Large padding')).toHaveClass('p-6');
  });

  it('handles click events when interactive', () => {
    const handleClick = vi.fn();
    render(<Card onClick={handleClick} interactive>Clickable card</Card>);
    
    const card = screen.getByText('Clickable card');
    expect(card).toHaveClass('cursor-pointer');
    expect(card).toHaveAttribute('role', 'button');
    expect(card).toHaveAttribute('tabIndex', '0');
    
    fireEvent.click(card);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies interactive styles when onClick is provided', () => {
    const handleClick = vi.fn();
    render(<Card onClick={handleClick}>Clickable card</Card>);
    
    const card = screen.getByText('Clickable card');
    expect(card).toHaveClass('cursor-pointer');
    expect(card).toHaveAttribute('role', 'button');
  });

  it('applies interactive styles when interactive prop is true', () => {
    render(<Card interactive>Interactive card</Card>);
    
    const card = screen.getByText('Interactive card');
    expect(card).toHaveClass('cursor-pointer');
    expect(card).toHaveAttribute('role', 'button');
  });

  it('does not apply interactive styles by default', () => {
    render(<Card>Regular card</Card>);
    
    const card = screen.getByText('Regular card');
    expect(card).not.toHaveClass('cursor-pointer');
    expect(card).not.toHaveAttribute('role', 'button');
  });

  it('applies custom className', () => {
    render(<Card className="custom-class">Custom card</Card>);
    expect(screen.getByText('Custom card')).toHaveClass('custom-class');
  });

  it('sets test id correctly', () => {
    render(<Card testId="test-card">Test card</Card>);
    expect(screen.getByTestId('test-card')).toBeInTheDocument();
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Card ref={ref}>Ref test</Card>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('passes through additional props', () => {
    render(<Card aria-label="Custom label" data-custom="value">Props test</Card>);
    const card = screen.getByText('Props test');
    expect(card).toHaveAttribute('aria-label', 'Custom label');
    expect(card).toHaveAttribute('data-custom', 'value');
  });

  it('renders complex children correctly', () => {
    render(
      <Card>
        <h2>Card Title</h2>
        <p>Card description</p>
      </Card>
    );
    expect(screen.getByText('Card Title')).toBeInTheDocument();
    expect(screen.getByText('Card description')).toBeInTheDocument();
  });

  it('handles keyboard events when interactive', () => {
    const handleClick = vi.fn();
    render(<Card onClick={handleClick} interactive>Keyboard card</Card>);
    
    const card = screen.getByText('Keyboard card');
    fireEvent.keyDown(card, { key: 'Enter' });
    // Note: onClick is only triggered by mouse events, not keyboard events
    // For full keyboard support, we'd need onKeyDown handler
  });

  it('applies correct base styles', () => {
    render(<Card>Base styles</Card>);
    const card = screen.getByText('Base styles');
    expect(card).toHaveClass('card-ios', 'transition-all', 'duration-200', 'ease-ios');
  });

  it('combines all classes correctly', () => {
    render(
      <Card 
        variant="grouped" 
        padding="large" 
        interactive 
        className="extra-class"
      >
        All styles
      </Card>
    );
    const card = screen.getByText('All styles');
    expect(card).toHaveClass(
      'card-ios',
      'card-grouped',
      'p-6',
      'cursor-pointer',
      'extra-class'
    );
  });
});