import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ProgressBar } from '../src/ProgressBar';

describe('ProgressBar', () => {
  it('renders with default props', () => {
    render(<ProgressBar value={50} testId="progress" />);
    const progress = screen.getByTestId('progress');
    expect(progress).toBeInTheDocument();

    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '50');
    expect(progressBar).toHaveAttribute('aria-valuemax', '100');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<ProgressBar value={50} size="small" testId="progress" />);
    expect(screen.getByRole('progressbar')).toHaveClass('h-1');

    rerender(<ProgressBar value={50} size="medium" testId="progress" />);
    expect(screen.getByRole('progressbar')).toHaveClass('h-2');

    rerender(<ProgressBar value={50} size="large" testId="progress" />);
    expect(screen.getByRole('progressbar')).toHaveClass('h-3');
  });

  it('renders with different colors', () => {
    const { rerender } = render(<ProgressBar value={50} color="blue" testId="progress" />);
    expect(screen.getByRole('progressbar').firstChild).toHaveClass('bg-systemBlue-500');

    rerender(<ProgressBar value={50} color="green" testId="progress" />);
    expect(screen.getByRole('progressbar').firstChild).toHaveClass('bg-systemGreen-500');
  });

  it('shows percentage label when showLabel is true', () => {
    render(<ProgressBar value={75} showLabel testId="progress" />);
    expect(screen.getByText('75%')).toBeInTheDocument();
    expect(screen.getByText('75/100')).toBeInTheDocument();
  });

  it('shows custom label', () => {
    render(<ProgressBar value={50} label="Loading..." testId="progress" />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('handles indeterminate state', () => {
    render(<ProgressBar value={50} indeterminate testId="progress" />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).not.toHaveAttribute('aria-valuenow');
    expect(progressBar.firstChild).toHaveClass('animate-pulse');
  });

  it('clamps value between 0 and max', () => {
    const { rerender } = render(<ProgressBar value={-10} testId="progress" />);
    let progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '-10');

    rerender(<ProgressBar value={150} max={100} testId="progress" />);
    progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '150');
  });

  it('works with custom max value', () => {
    render(<ProgressBar value={25} max={50} showLabel testId="progress" />);
    expect(screen.getByText('50%')).toBeInTheDocument();
    expect(screen.getByText('25/50')).toBeInTheDocument();
  });
});