import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AlertModal } from './AlertModal';

// Mock @headlessui/react components for simpler testing
jest.mock('@headlessui/react', () => ({
  Transition: ({ show, children }: any) => (show ? children : null),
  Dialog: ({ open, onClose, children }: any) => (
    <div data-testid="dialog" aria-modal="true" role="dialog" className={open ? 'open' : 'closed'}>
      {/* Add a simple element to trigger onClose in tests */}
      <button data-testid="dialog-close-button" onClick={onClose}>Close Modal</button>
      {children}
    </div>
  ),
  DialogPanel: ({ children, className }: any) => <div data-testid="dialog-panel" className={className}>{children}</div>,
  DialogTitle: ({ children, as }: any) => <h3 data-testid="dialog-title">{children}</h3>,
}));

describe('AlertModal', () => {
  const mockOnClose = jest.fn();
  const defaultProps = {
    title: 'Test Title',
    message: 'Test Message',
    isOpen: true,
    onClose: mockOnClose,
  };

  beforeEach(() => {
    mockOnClose.mockClear();
  });

  test('does not render when isOpen is false', () => {
    render(<AlertModal {...defaultProps} isOpen={false} />);
    expect(screen.queryByTestId('dialog')).not.toBeInTheDocument();
  });

  test('renders when isOpen is true', () => {
    render(<AlertModal {...defaultProps} isOpen={true} />);
    expect(screen.getByTestId('dialog')).toBeInTheDocument();
  });

  test('displays the correct title and message', () => {
    const title = 'Important Alert';
    const message = 'This is a test message for the alert modal.';
    render(<AlertModal {...defaultProps} title={title} message={message} />);
    expect(screen.getByTestId('dialog-title')).toHaveTextContent(title);
    expect(screen.getByText(message)).toBeInTheDocument();
  });

  test('renders action buttons and calls onClick when clicked', () => {
    const action1 = { label: 'Action 1', onClick: jest.fn() };
    const action2 = { label: 'Action 2', onClick: jest.fn() };
    const actions = [action1, action2];

    render(<AlertModal {...defaultProps} actions={actions} />);

    const actionButton1 = screen.getByRole('button', { name: action1.label });
    const actionButton2 = screen.getByRole('button', { name: action2.label });

    expect(actionButton1).toBeInTheDocument();
    expect(actionButton2).toBeInTheDocument();

    fireEvent.click(actionButton1);
    expect(action1.onClick).toHaveBeenCalledTimes(1);

    fireEvent.click(actionButton2);
    expect(action2.onClick).toHaveBeenCalledTimes(1);
  });

  test('calls onClose when the mock close button is clicked', () => {
    render(<AlertModal {...defaultProps} />);
    fireEvent.click(screen.getByTestId('dialog-close-button'));
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test('applies dark theme styles when theme is dark', () => {
    render(<AlertModal {...defaultProps} theme="dark" />);
    const dialogPanel = screen.getByTestId('dialog-panel');
    expect(dialogPanel).toHaveClass('bg-gray-700');
    expect(dialogPanel).toHaveClass('text-white');
  });

  test('applies vertical action layout styles when actionLayout is vertical', () => {
    const actions = [{ label: 'Action 1', onClick: jest.fn() }];
    render(<AlertModal {...defaultProps} actions={actions} actionLayout="vertical" />);
    const dialogPanel = screen.getByTestId('dialog-panel');
    // Assuming the action container is directly within the panel and has these classes
    const actionContainer = dialogPanel.querySelector('.mt-4.flex');
    expect(actionContainer).toHaveClass('flex-col');
    expect(actionContainer).toHaveClass('space-y-2');
  });

  test('applies horizontal action layout styles when actionLayout is horizontal', () => {
    const actions = [{ label: 'Action 1', onClick: jest.fn() }, { label: 'Action 2', onClick: jest.fn() }];
    render(<AlertModal {...defaultProps} actions={actions} actionLayout="horizontal" />);
    const dialogPanel = screen.getByTestId('dialog-panel');
     const actionContainer = dialogPanel.querySelector('.mt-4.flex');
     expect(actionContainer).toHaveClass('flex-row');
     expect(actionContainer).toHaveClass('justify-end');
     expect(actionContainer).toHaveClass('space-x-2');
  });

});
