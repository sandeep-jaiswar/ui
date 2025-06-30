import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Timeline } from '../src/Timeline';

const mockItems = [
  {
    id: '1',
    title: 'Order Placed',
    description: 'Your order has been placed successfully',
    timestamp: '2:30 PM',
    completed: true,
    color: 'green' as const
  },
  {
    id: '2',
    title: 'Processing',
    description: 'Your order is being processed',
    timestamp: '3:15 PM',
    completed: true,
    color: 'blue' as const
  },
  {
    id: '3',
    title: 'Shipped',
    timestamp: 'Expected 4:00 PM',
    completed: false,
    color: 'orange' as const
  }
];

describe('Timeline', () => {
  it('renders all timeline items', () => {
    render(<Timeline items={mockItems} testId="timeline" />);

    expect(screen.getByText('Order Placed')).toBeInTheDocument();
    expect(screen.getByText('Processing')).toBeInTheDocument();
    expect(screen.getByText('Shipped')).toBeInTheDocument();
  });

  it('shows descriptions when provided', () => {
    render(<Timeline items={mockItems} testId="timeline" />);

    expect(screen.getByText('Your order has been placed successfully')).toBeInTheDocument();
    expect(screen.getByText('Your order is being processed')).toBeInTheDocument();
  });

  it('shows timestamps', () => {
    render(<Timeline items={mockItems} testId="timeline" />);

    expect(screen.getByText('2:30 PM')).toBeInTheDocument();
    expect(screen.getByText('3:15 PM')).toBeInTheDocument();
    expect(screen.getByText('Expected 4:00 PM')).toBeInTheDocument();
  });

  it('renders horizontal orientation', () => {
    render(<Timeline items={mockItems} orientation="horizontal" testId="timeline" />);

    const timeline = screen.getByTestId('timeline');
    expect(timeline).toHaveClass('flex', 'items-center');
  });

  it('applies compact variant', () => {
    render(<Timeline items={mockItems} variant="compact" testId="timeline" />);

    const timeline = screen.getByTestId('timeline');
    expect(timeline).toBeInTheDocument();
  });
});