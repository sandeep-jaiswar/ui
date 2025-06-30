import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Badge } from '../src/Badge';

describe('Badge', () => {
  it('renders with default props', () => {
    render(<Badge>5</Badge>);
    const badge = screen.getByText('5');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('badge-ios', 'bg-systemRed-500', 'text-white');
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Badge variant="primary">1</Badge>);
    expect(screen.getByText('1')).toHaveClass('bg-systemRed-500');

    rerender(<Badge variant="secondary">2</Badge>);
    expect(screen.getByText('2')).toHaveClass('bg-fill-secondary');

    rerender(<Badge variant="success">3</Badge>);
    expect(screen.getByText('3')).toHaveClass('bg-systemGreen-500');

    rerender(<Badge variant="warning">4</Badge>);
    expect(screen.getByText('4')).toHaveClass('bg-systemOrange-500');

    rerender(<Badge variant="error">5</Badge>);
    expect(screen.getByText('5')).toHaveClass('bg-systemRed-500');

    rerender(<Badge variant="info">6</Badge>);
    expect(screen.getByText('6')).toHaveClass('bg-systemBlue-500');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Badge size="small">1</Badge>);
    expect(screen.getByText('1')).toHaveClass('px-1.5', 'py-0.5', 'text-ios-caption-2');

    rerender(<Badge size="medium">2</Badge>);
    expect(screen.getByText('2')).toHaveClass('px-2', 'py-0.5', 'text-ios-caption-1');

    rerender(<Badge size="large">3</Badge>);
    expect(screen.getByText('3')).toHaveClass('px-2.5', 'py-1', 'text-ios-footnote');
  });

  it('renders with different shapes', () => {
    const { rerender } = render(<Badge shape="rounded">1</Badge>);
    expect(screen.getByText('1')).toHaveClass('rounded-ios-sm');

    rerender(<Badge shape="pill">2</Badge>);
    expect(screen.getByText('2')).toHaveClass('rounded-full');
  });

  it('renders as dot when dot prop is true', () => {
    render(<Badge dot testId="dot-badge" />);
    const badge = screen.getByTestId('dot-badge');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('w-2.5', 'h-2.5');
    expect(badge).toBeEmptyDOMElement();
  });

  it('renders dot with different sizes', () => {
    const { rerender } = render(<Badge dot size="small" testId="dot" />);
    expect(screen.getByTestId('dot')).toHaveClass('w-2', 'h-2');

    rerender(<Badge dot size="medium" testId="dot" />);
    expect(screen.getByTestId('dot')).toHaveClass('w-2.5', 'h-2.5');

    rerender(<Badge dot size="large" testId="dot" />);
    expect(screen.getByTestId('dot')).toHaveClass('w-3', 'h-3');
  });

  it('formats numbers correctly with max prop', () => {
    const { rerender } = render(<Badge max={99}>50</Badge>);
    expect(screen.getByText('50')).toBeInTheDocument();

    rerender(<Badge max={99}>100</Badge>);
    expect(screen.getByText('99+')).toBeInTheDocument();

    rerender(<Badge max={9}>15</Badge>);
    expect(screen.getByText('9+')).toBeInTheDocument();
  });

  it('does not format non-numeric content', () => {
    render(<Badge max={99}>NEW</Badge>);
    expect(screen.getByText('NEW')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Badge className="custom-class">Test</Badge>);
    expect(screen.getByText('Test')).toHaveClass('custom-class');
  });

  it('sets test id correctly', () => {
    render(<Badge testId="test-badge">Test</Badge>);
    expect(screen.getByTestId('test-badge')).toBeInTheDocument();
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLSpanElement>();
    render(<Badge ref={ref}>Ref test</Badge>);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });

  it('passes through additional props', () => {
    render(<Badge aria-label="Notification count" data-custom="value">5</Badge>);
    const badge = screen.getByText('5');
    expect(badge).toHaveAttribute('aria-label', 'Notification count');
    expect(badge).toHaveAttribute('data-custom', 'value');
  });

  it('applies correct base styles', () => {
    render(<Badge>Test</Badge>);
    const badge = screen.getByText('Test');
    expect(badge).toHaveClass(
      'badge-ios',
      'inline-flex',
      'items-center',
      'justify-center',
      'font-medium',
      'select-none'
    );
  });

  it('renders with zero value', () => {
    render(<Badge>0</Badge>);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('renders with string content', () => {
    render(<Badge>NEW</Badge>);
    expect(screen.getByText('NEW')).toBeInTheDocument();
  });

  it('renders with React element content', () => {
    render(<Badge><span>Custom</span></Badge>);
    expect(screen.getByText('Custom')).toBeInTheDocument();
  });

  it('handles edge case with max value equal to content', () => {
    render(<Badge max={99}>99</Badge>);
    expect(screen.getByText('99')).toBeInTheDocument();
    expect(screen.queryByText('99+')).not.toBeInTheDocument();
  });

  it('applies dark mode classes correctly', () => {
    render(<Badge variant="primary">Dark</Badge>);
    const badge = screen.getByText('Dark');
    expect(badge).toHaveClass('dark:bg-systemRed-600');
  });

  it('applies secondary variant with border', () => {
    render(<Badge variant="secondary">Secondary</Badge>);
    const badge = screen.getByText('Secondary');
    expect(badge).toHaveClass('border', 'border-separator-opaque');
  });

  it('combines all classes correctly', () => {
    render(
      <Badge
        variant="success"
        size="large"
        shape="rounded"
        className="extra-class"
      >
        Combined
      </Badge>
    );
    const badge = screen.getByText('Combined');
    expect(badge).toHaveClass(
      'badge-ios',
      'bg-systemGreen-500',
      'px-2.5',
      'py-1',
      'rounded-ios-sm',
      'extra-class'
    );
  });
});