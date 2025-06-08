import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Sheet } from './Sheet';

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

describe('Sheet', () => {
  const mockOnClose = jest.fn();
  const mockOnBack = jest.fn();
  const defaultProps = {
    isOpen: true,
    onClose: mockOnClose,
    title: 'Main Title',
    children: <div>Sheet Content</div>,
  };

  beforeEach(() => {
    mockOnClose.mockClear();
    mockOnBack.mockClear();
  });

  test('does not render when isOpen is false', () => {
    render(<Sheet {...defaultProps} isOpen={false} />);
    expect(screen.queryByTestId('dialog')).not.toBeInTheDocument();
  });

  test('renders when isOpen is true', () => {
    render(<Sheet {...defaultProps} isOpen={true} />);
    expect(screen.getByTestId('dialog')).toBeInTheDocument();
  });

  test('displays the main title', () => {
    render(<Sheet {...defaultProps} title="Sheet Title" />);
    expect(screen.getByTestId('dialog-title')).toHaveTextContent('Sheet Title');
  });

  test('displays the left title when provided and no onBack', () => {
    render(<Sheet {...defaultProps} leftTitle="Back" onBack={undefined} />);
    expect(screen.getByText('Back')).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Back/i })).not.toBeInTheDocument();
  });

  test('renders a back button with left title when onBack is provided', () => {
    render(<Sheet {...defaultProps} leftTitle="Previous Screen" onBack={mockOnBack} />);
    const backButton = screen.getByRole('button', { name: /Previous Screen/i });
    expect(backButton).toBeInTheDocument();
    expect(backButton).toHaveTextContent('Previous Screen');
  });

  test('calls onBack when the back button is clicked', () => {
    render(<Sheet {...defaultProps} leftTitle="Go Back" onBack={mockOnBack} />);
    const backButton = screen.getByRole('button', { name: /Go Back/i });
    fireEvent.click(backButton);
    expect(mockOnBack).toHaveBeenCalledTimes(1);
  });

  test('calls onClose when the close button is clicked', () => {
    render(<Sheet {...defaultProps} />);
    fireEvent.click(screen.getByTestId('dialog-close-button'));
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test('renders children content', () => {
    const childrenContent = <div>This is the sheet content.</div>;
    render(<Sheet {...defaultProps} children={childrenContent} />);
    expect(screen.getByText('This is the sheet content.')).toBeInTheDocument();
  });

  test('does not render left title section if neither leftTitle nor onBack is provided', () => {
      render(<Sheet {...defaultProps} leftTitle={undefined} onBack={undefined} />);
      // Check that elements specific to the left section are not in the document
       expect(screen.queryByText('Back')).not.toBeInTheDocument();
       expect(screen.queryByRole('button', { name: /Back/i })).not.toBeInTheDocument();
  });

});
