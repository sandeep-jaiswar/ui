import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Drawer } from './Drawer';

describe('Drawer', () => {
  it('renders when open', () => {
    render(
      <Drawer open onClose={() => {}} testId="drawer">
        Drawer content
      </Drawer>
    );
    expect(screen.getByTestId('drawer')).toBeInTheDocument();
    expect(screen.getByText('Drawer content')).toBeInTheDocument();
  });

  it('does not render when closed', () => {
    render(
      <Drawer open={false} onClose={() => {}} testId="drawer">
        Drawer content
      </Drawer>
    );
    expect(screen.queryByTestId('drawer')).not.toBeInTheDocument();
  });

  it('renders with title', () => {
    render(
      <Drawer open title="Test Drawer" onClose={() => {}}>
        Drawer content
      </Drawer>
    );
    expect(screen.getByText('Test Drawer')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const handleClose = vi.fn();
    render(
      <Drawer open title="Test Drawer" onClose={handleClose}>
        Drawer content
      </Drawer>
    );
    
    fireEvent.click(screen.getByLabelText('Close drawer'));
    expect(handleClose).toHaveBeenCalled();
  });

  it('calls onClose when backdrop is clicked', () => {
    const handleClose = vi.fn();
    render(
      <Drawer open onClose={handleClose} testId="drawer">
        Drawer content
      </Drawer>
    );
    
    fireEvent.click(screen.getByTestId('drawer'));
    expect(handleClose).toHaveBeenCalled();
  });

  it('calls onClose when escape key is pressed', () => {
    const handleClose = vi.fn();
    render(
      <Drawer open onClose={handleClose}>
        Drawer content
      </Drawer>
    );
    
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(handleClose).toHaveBeenCalled();
  });

  it('applies different positions', () => {
    const { rerender } = render(
      <Drawer open position="left" onClose={() => {}} testId="drawer">
        Content
      </Drawer>
    );
    expect(screen.getByTestId('drawer')).toHaveClass('left-0');

    rerender(
      <Drawer open position="right" onClose={() => {}} testId="drawer">
        Content
      </Drawer>
    );
    expect(screen.getByTestId('drawer')).toHaveClass('right-0');
  });
});