import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Modal } from './Modal';

describe('Modal', () => {
  it('renders when open', () => {
    render(
      <Modal open onClose={() => {}} testId="modal">
        Modal content
      </Modal>
    );
    expect(screen.getByTestId('modal')).toBeInTheDocument();
    expect(screen.getByText('Modal content')).toBeInTheDocument();
  });

  it('does not render when closed', () => {
    render(
      <Modal open={false} onClose={() => {}} testId="modal">
        Modal content
      </Modal>
    );
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
  });

  it('renders with title', () => {
    render(
      <Modal open title="Test Modal" onClose={() => {}}>
        Modal content
      </Modal>
    );
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const handleClose = vi.fn();
    render(
      <Modal open onClose={handleClose} title="Test Modal">
        Modal content
      </Modal>
    );
    
    fireEvent.click(screen.getByLabelText('Close modal'));
    expect(handleClose).toHaveBeenCalled();
  });

  it('calls onClose when backdrop is clicked', () => {
    const handleClose = vi.fn();
    render(
      <Modal open onClose={handleClose} testId="modal">
        Modal content
      </Modal>
    );
    
    fireEvent.click(screen.getByTestId('modal'));
    expect(handleClose).toHaveBeenCalled();
  });

  it('does not close when backdrop is clicked if closeOnBackdrop is false', () => {
    const handleClose = vi.fn();
    render(
      <Modal open onClose={handleClose} closeOnBackdrop={false} testId="modal">
        Modal content
      </Modal>
    );
    
    fireEvent.click(screen.getByTestId('modal'));
    expect(handleClose).not.toHaveBeenCalled();
  });

  it('calls onClose when escape key is pressed', () => {
    const handleClose = vi.fn();
    render(
      <Modal open onClose={handleClose}>
        Modal content
      </Modal>
    );
    
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(handleClose).toHaveBeenCalled();
  });

  it('does not close when escape key is pressed if closeOnEscape is false', () => {
    const handleClose = vi.fn();
    render(
      <Modal open onClose={handleClose} closeOnEscape={false}>
        Modal content
      </Modal>
    );
    
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(handleClose).not.toHaveBeenCalled();
  });

  it('renders with different sizes', () => {
    const { rerender } = render(
      <Modal open onClose={() => {}} size="small">
        <div data-testid="modal-content">Content</div>
      </Modal>
    );
    expect(screen.getByTestId('modal-content').closest('[role="dialog"]')).toHaveClass('max-w-sm');

    rerender(
      <Modal open onClose={() => {}} size="large">
        <div data-testid="modal-content">Content</div>
      </Modal>
    );
    expect(screen.getByTestId('modal-content').closest('[role="dialog"]')).toHaveClass('max-w-2xl');
  });

  it('hides close button when showCloseButton is false', () => {
    render(
      <Modal open onClose={() => {}} showCloseButton={false} title="Test">
        Modal content
      </Modal>
    );
    expect(screen.queryByLabelText('Close modal')).not.toBeInTheDocument();
  });
});