import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { List, ListItem } from '../src/List';

describe('List', () => {
  it('renders with children', () => {
    render(
      <List testId="list">
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
      </List>
    );
    expect(screen.getByTestId('list')).toBeInTheDocument();
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('applies different variants', () => {
    const { rerender } = render(<List variant="grouped" testId="list" />);
    expect(screen.getByTestId('list')).toHaveClass('bg-background-secondary');

    rerender(<List variant="inset" testId="list" />);
    expect(screen.getByTestId('list')).toHaveClass('mx-4');

    rerender(<List variant="plain" testId="list" />);
    expect(screen.getByTestId('list')).toHaveClass('bg-transparent');
  });
});

describe('ListItem', () => {
  it('renders with content', () => {
    render(<ListItem testId="item">Test content</ListItem>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders with left and right content', () => {
    render(
      <ListItem
        leftContent={<span>Left</span>}
        rightContent={<span>Right</span>}
        testId="item"
      >
        Center
      </ListItem>
    );
    expect(screen.getByText('Left')).toBeInTheDocument();
    expect(screen.getByText('Center')).toBeInTheDocument();
    expect(screen.getByText('Right')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    render(<ListItem onClick={handleClick} testId="item">Clickable</ListItem>);

    fireEvent.click(screen.getByTestId('item'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('does not handle clicks when disabled', () => {
    const handleClick = vi.fn();
    render(<ListItem onClick={handleClick} disabled testId="item">Disabled</ListItem>);

    fireEvent.click(screen.getByTestId('item'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('applies interactive styles when clickable', () => {
    render(<ListItem onClick={() => { }} testId="item">Interactive</ListItem>);
    const item = screen.getByTestId('item');
    expect(item).toHaveClass('cursor-pointer');
    expect(item).toHaveAttribute('role', 'button');
  });
});