import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Avatar } from '../src/Avatar';

describe('Avatar', () => {
  it('renders with default props', () => {
    render(<Avatar />);
    const avatar = screen.getByTestId('avatar') || document.querySelector('[class*="w-10"]');
    expect(avatar).toBeInTheDocument();
  });

  it('renders with image when src is provided', () => {
    render(<Avatar src="https://example.com/avatar.jpg" alt="User avatar" />);
    const image = screen.getByAltText('User avatar');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/avatar.jpg');
  });

  it('renders initials when provided', () => {
    render(<Avatar initials="JD" />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('renders default user icon when no src or initials', () => {
    render(<Avatar testId="default-avatar" />);
    const avatar = screen.getByTestId('default-avatar');
    const svg = avatar.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Avatar size="small" testId="avatar" />);
    expect(screen.getByTestId('avatar')).toHaveClass('w-8', 'h-8');

    rerender(<Avatar size="medium" testId="avatar" />);
    expect(screen.getByTestId('avatar')).toHaveClass('w-10', 'h-10');

    rerender(<Avatar size="large" testId="avatar" />);
    expect(screen.getByTestId('avatar')).toHaveClass('w-12', 'h-12');

    rerender(<Avatar size="xlarge" testId="avatar" />);
    expect(screen.getByTestId('avatar')).toHaveClass('w-16', 'h-16');
  });

  it('renders with different shapes', () => {
    const { rerender } = render(<Avatar shape="circle" testId="avatar" />);
    expect(screen.getByTestId('avatar')).toHaveClass('rounded-full');

    rerender(<Avatar shape="rounded" testId="avatar" />);
    expect(screen.getByTestId('avatar')).toHaveClass('rounded-ios');

    rerender(<Avatar shape="square" testId="avatar" />);
    expect(screen.getByTestId('avatar')).toHaveClass('rounded-none');
  });

  it('applies custom background and text colors for initials', () => {
    render(
      <Avatar
        initials="AB"
        backgroundColor="#FF0000"
        textColor="#FFFFFF"
        testId="colored-avatar"
      />
    );
    const avatar = screen.getByTestId('colored-avatar');
    expect(avatar).toHaveStyle({ backgroundColor: '#FF0000' });

    const initials = screen.getByText('AB');
    expect(initials).toHaveStyle({ color: '#FFFFFF' });
  });

  it('shows online indicator when online is true', () => {
    render(<Avatar online testId="online-avatar" />);
    const avatar = screen.getByTestId('online-avatar');
    const onlineIndicator = avatar.querySelector('[aria-label="Online"]');
    expect(onlineIndicator).toBeInTheDocument();
    expect(onlineIndicator).toHaveClass('bg-systemGreen-500');
  });

  it('does not show online indicator when online is false', () => {
    render(<Avatar online={false} testId="offline-avatar" />);
    const avatar = screen.getByTestId('offline-avatar');
    const onlineIndicator = avatar.querySelector('[aria-label="Online"]');
    expect(onlineIndicator).not.toBeInTheDocument();
  });

  it('truncates initials to 2 characters', () => {
    render(<Avatar initials="ABCD" />);
    expect(screen.getByText('AB')).toBeInTheDocument();
    expect(screen.queryByText('ABCD')).not.toBeInTheDocument();
  });

  it('converts initials to uppercase', () => {
    render(<Avatar initials="ab" />);
    expect(screen.getByText('AB')).toBeInTheDocument();
  });

  it('handles image load error gracefully', () => {
    render(<Avatar src="invalid-url.jpg" initials="FB" alt="Fallback" />);
    const image = screen.getByAltText('Fallback');

    // Simulate image error
    fireEvent.error(image);

    // Should still show the initials as fallback
    expect(screen.getByText('FB')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Avatar className="custom-class" testId="custom-avatar" />);
    expect(screen.getByTestId('custom-avatar')).toHaveClass('custom-class');
  });

  it('sets test id correctly', () => {
    render(<Avatar testId="test-avatar" />);
    expect(screen.getByTestId('test-avatar')).toBeInTheDocument();
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Avatar ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('passes through additional props', () => {
    render(<Avatar aria-label="User profile" data-custom="value" testId="props-avatar" />);
    const avatar = screen.getByTestId('props-avatar');
    expect(avatar).toHaveAttribute('aria-label', 'User profile');
    expect(avatar).toHaveAttribute('data-custom', 'value');
  });

  it('applies correct base styles', () => {
    render(<Avatar testId="base-avatar" />);
    const avatar = screen.getByTestId('base-avatar');
    expect(avatar).toHaveClass(
      'relative',
      'inline-flex',
      'items-center',
      'justify-center',
      'font-semibold',
      'overflow-hidden'
    );
  });

  it('uses default alt text when not provided', () => {
    render(<Avatar src="https://example.com/avatar.jpg" />);
    const image = screen.getByAltText('Avatar');
    expect(image).toBeInTheDocument();
  });

  it('applies correct online indicator size for different avatar sizes', () => {
    const { rerender } = render(<Avatar size="small" online testId="avatar" />);
    let indicator = screen.getByTestId('avatar').querySelector('[aria-label="Online"]');
    expect(indicator).toHaveClass('w-2', 'h-2');

    rerender(<Avatar size="medium" online testId="avatar" />);
    indicator = screen.getByTestId('avatar').querySelector('[aria-label="Online"]');
    expect(indicator).toHaveClass('w-2.5', 'h-2.5');

    rerender(<Avatar size="large" online testId="avatar" />);
    indicator = screen.getByTestId('avatar').querySelector('[aria-label="Online"]');
    expect(indicator).toHaveClass('w-3', 'h-3');

    rerender(<Avatar size="xlarge" online testId="avatar" />);
    indicator = screen.getByTestId('avatar').querySelector('[aria-label="Online"]');
    expect(indicator).toHaveClass('w-4', 'h-4');
  });

  it('does not apply background color when image is provided', () => {
    render(
      <Avatar
        src="https://example.com/avatar.jpg"
        backgroundColor="#FF0000"
        testId="image-avatar"
      />
    );
    const avatar = screen.getByTestId('image-avatar');
    expect(avatar).not.toHaveStyle({ backgroundColor: '#FF0000' });
  });

  it('applies background color only when showing initials', () => {
    render(
      <Avatar
        initials="AB"
        backgroundColor="#FF0000"
        testId="initials-avatar"
      />
    );
    const avatar = screen.getByTestId('initials-avatar');
    expect(avatar).toHaveStyle({ backgroundColor: '#FF0000' });
  });
});