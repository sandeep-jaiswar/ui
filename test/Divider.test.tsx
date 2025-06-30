import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Divider } from '../src/Divider';

describe('Divider', () => {
  it('renders with default props', () => {
    render(<Divider testId="divider" />);
    const divider = screen.getByTestId('divider');
    expect(divider).toBeInTheDocument();
    expect(divider).toHaveClass('border-t');
  });

  it('renders with different orientations', () => {
    const { rerender } = render(<Divider orientation="horizontal" testId="divider" />);
    expect(screen.getByTestId('divider')).toHaveClass('w-full', 'border-t');

    rerender(<Divider orientation="vertical" testId="divider" />);
    expect(screen.getByTestId('divider')).toHaveClass('h-full', 'border-l');
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Divider variant="full" testId="divider" />);
    expect(screen.getByTestId('divider')).not.toHaveClass('ml-4', 'mx-4');

    rerender(<Divider variant="inset" testId="divider" />);
    expect(screen.getByTestId('divider')).toHaveClass('ml-4');

    rerender(<Divider variant="middle" testId="divider" />);
    expect(screen.getByTestId('divider')).toHaveClass('mx-4');
  });

  it('renders with different thickness', () => {
    const { rerender } = render(<Divider thickness="thin" testId="divider" />);
    expect(screen.getByTestId('divider')).toHaveClass('border-t');

    rerender(<Divider thickness="medium" testId="divider" />);
    expect(screen.getByTestId('divider')).toHaveClass('border-t-2');

    rerender(<Divider thickness="thick" testId="divider" />);
    expect(screen.getByTestId('divider')).toHaveClass('border-t-4');
  });

  it('renders with text content', () => {
    render(<Divider testId="divider">OR</Divider>);
    expect(screen.getByText('OR')).toBeInTheDocument();
  });

  it('renders with custom content', () => {
    render(
      <Divider testId="divider">
        <span data-testid="custom-content">Custom</span>
      </Divider>
    );
    expect(screen.getByTestId('custom-content')).toBeInTheDocument();
  });
});