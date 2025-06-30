import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { TextArea } from '../src/TextArea';

describe('TextArea', () => {
  it('renders with default props', () => {
    render(<TextArea testId="textarea" />);
    const textarea = screen.getByTestId('textarea');
    expect(textarea).toBeInTheDocument();
  });

  it('handles value changes', () => {
    const handleChange = vi.fn();
    render(<TextArea onChange={handleChange} testId="textarea" />);

    fireEvent.change(screen.getByTestId('textarea'), { target: { value: 'test' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('shows character count when showCount is true', () => {
    render(<TextArea showCount value="hello" testId="textarea" />);
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('shows character count with max length', () => {
    render(<TextArea showCount maxLength={100} value="hello" testId="textarea" />);
    expect(screen.getByText('5/100')).toBeInTheDocument();
  });

  it('shows error state when exceeding max length', () => {
    render(<TextArea showCount maxLength={3} value="hello" testId="textarea" />);
    const count = screen.getByText('5/3');
    expect(count).toHaveClass('text-systemRed-500');
  });

  it('renders with label and helper text', () => {
    render(
      <TextArea
        label="Description"
        helperText="Enter a detailed description"
        testId="textarea"
      />
    );
    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(screen.getByText('Enter a detailed description')).toBeInTheDocument();
  });

  it('shows error text when state is error', () => {
    render(
      <TextArea
        state="error"
        errorText="This field is required"
        testId="textarea"
      />
    );
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });
});