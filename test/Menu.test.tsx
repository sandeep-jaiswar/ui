import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Menu } from '../src/Menu';

const mockItems = [
  { id: 'edit', label: 'Edit', icon: 'settings', onClick: vi.fn() },
  { id: 'copy', label: 'Copy', onClick: vi.fn() },
  { id: 'separator', separator: true },
  { id: 'delete', label: 'Delete', destructive: true, onClick: vi.fn() },
];

describe('Menu', () => {
  it('renders trigger when closed', () => {
    render(
      <Menu
        items={mockItems}
        open={false}
        onClose={() => { }}
        trigger={<button>Menu</button>}
        testId="menu"
      />
    );
    expect(screen.getByText('Menu')).toBeInTheDocument();
  });

  it('renders menu items when open', () => {
    render(
      <Menu
        items={mockItems}
        open={true}
        onClose={() => { }}
        testId="menu"
      />
    );
    expect(screen.getByText('Edit')).toBeInTheDocument();
    expect(screen.getByText('Copy')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
  });

  it('calls item onClick when clicked', () => {
    render(
      <Menu
        items={mockItems}
        open={true}
        onClose={() => { }}
        testId="menu"
      />
    );

    fireEvent.click(screen.getByText('Edit'));
    expect(mockItems[0].onClick).toHaveBeenCalled();
  });

  it('calls onClose when item is clicked', () => {
    const handleClose = vi.fn();
    render(
      <Menu
        items={mockItems}
        open={true}
        onClose={handleClose}
        testId="menu"
      />
    );

    fireEvent.click(screen.getByText('Copy'));
    expect(handleClose).toHaveBeenCalled();
  });

  it('calls onClose when escape key is pressed', () => {
    const handleClose = vi.fn();
    render(
      <Menu
        items={mockItems}
        open={true}
        onClose={handleClose}
        testId="menu"
      />
    );

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(handleClose).toHaveBeenCalled();
  });

  it('applies destructive styling to destructive items', () => {
    render(
      <Menu
        items={mockItems}
        open={true}
        onClose={() => { }}
        testId="menu"
      />
    );

    const deleteButton = screen.getByText('Delete');
    expect(deleteButton).toHaveClass('text-systemRed-500');
  });

  it('renders separators', () => {
    render(
      <Menu
        items={mockItems}
        open={true}
        onClose={() => { }}
        testId="menu"
      />
    );

    const menu = screen.getByRole('menu');
    const separators = menu.querySelectorAll('.border-t');
    expect(separators).toHaveLength(1);
  });
});