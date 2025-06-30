import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Rating } from '../src/Rating';

describe('Rating', () => {
  it('renders with default props', () => {
    render(<Rating testId="rating" />);
    const rating = screen.getByTestId('rating');
    expect(rating).toBeInTheDocument();
  });

  it('renders correct number of stars', () => {
    render(<Rating max={3} testId="rating" />);
    const rating = screen.getByTestId('rating');
    const stars = rating.querySelectorAll('svg');
    expect(stars).toHaveLength(6); // 3 background + 3 overlay stars
  });

  it('handles rating selection', () => {
    const handleChange = vi.fn();
    render(<Rating onChange={handleChange} testId="rating" />);

    const rating = screen.getByTestId('rating');
    const stars = rating.querySelectorAll('div[class*="cursor-pointer"]');

    fireEvent.click(stars[2]); // Click third star
    expect(handleChange).toHaveBeenCalledWith(3);
  });

  it('shows rating value when showValue is true', () => {
    render(<Rating value={3.5} showValue allowHalf testId="rating" />);
    expect(screen.getByText('3.5 / 5')).toBeInTheDocument();
  });

  it('does not handle clicks when readOnly', () => {
    const handleChange = vi.fn();
    render(<Rating readOnly onChange={handleChange} testId="rating" />);

    const rating = screen.getByTestId('rating');
    const stars = rating.querySelectorAll('div[class*="cursor-pointer"]');

    fireEvent.click(stars[0]);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('applies disabled styles when disabled', () => {
    render(<Rating disabled testId="rating" />);
    const rating = screen.getByTestId('rating');
    expect(rating).toHaveClass('opacity-50', 'cursor-not-allowed');
  });
});