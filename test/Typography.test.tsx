import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Typography } from '../src/Typography';

describe('Typography', () => {
  it('renders with default props', () => {
    render(<Typography>Default text</Typography>);
    const element = screen.getByText('Default text');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('P');
    expect(element).toHaveClass('text-ios-body');
  });

  it('renders all variants with correct classes and elements', () => {
    const variants = [
      { variant: 'largeTitle', expectedClass: 'text-ios-large-title', expectedTag: 'H1' },
      { variant: 'title1', expectedClass: 'text-ios-title-1', expectedTag: 'H1' },
      { variant: 'title2', expectedClass: 'text-ios-title-2', expectedTag: 'H2' },
      { variant: 'title3', expectedClass: 'text-ios-title-3', expectedTag: 'H3' },
      { variant: 'headline', expectedClass: 'text-ios-headline', expectedTag: 'H4' },
      { variant: 'body', expectedClass: 'text-ios-body', expectedTag: 'P' },
      { variant: 'callout', expectedClass: 'text-ios-callout', expectedTag: 'P' },
      { variant: 'subhead', expectedClass: 'text-ios-subhead', expectedTag: 'P' },
      { variant: 'footnote', expectedClass: 'text-ios-footnote', expectedTag: 'P' },
      { variant: 'caption1', expectedClass: 'text-ios-caption-1', expectedTag: 'SPAN' },
      { variant: 'caption2', expectedClass: 'text-ios-caption-2', expectedTag: 'SPAN' },
    ] as const;

    variants.forEach(({ variant, expectedClass, expectedTag }) => {
      const { unmount } = render(
        <Typography variant={variant}>{variant} text</Typography>
      );
      const element = screen.getByText(`${variant} text`);
      expect(element).toHaveClass(expectedClass);
      expect(element.tagName).toBe(expectedTag);
      unmount();
    });
  });

  it('renders with custom element when as prop is provided', () => {
    render(<Typography as="h5">Custom element</Typography>);
    const element = screen.getByText('Custom element');
    expect(element.tagName).toBe('H5');
  });

  it('applies color variants correctly', () => {
    const colors = [
      { color: 'primary', expectedClass: 'text-label-primary' },
      { color: 'secondary', expectedClass: 'text-label-secondary' },
      { color: 'tertiary', expectedClass: 'text-label-tertiary' },
      { color: 'quaternary', expectedClass: 'text-label-quaternary' },
      { color: 'system', expectedClass: 'text-systemBlue-500' },
    ] as const;

    colors.forEach(({ color, expectedClass }) => {
      const { unmount } = render(
        <Typography color={color}>{color} text</Typography>
      );
      const element = screen.getByText(`${color} text`);
      expect(element).toHaveClass(expectedClass);
      unmount();
    });
  });

  it('applies custom color correctly', () => {
    render(
      <Typography color="custom" customColor="#ff0000">
        Custom color text
      </Typography>
    );
    const element = screen.getByText('Custom color text');
    expect(element).toHaveStyle({ color: '#ff0000' });
  });

  it('applies font weights correctly', () => {
    const weights = [
      { weight: 'regular', expectedClass: 'font-normal' },
      { weight: 'medium', expectedClass: 'font-medium' },
      { weight: 'semibold', expectedClass: 'font-semibold' },
      { weight: 'bold', expectedClass: 'font-bold' },
    ] as const;

    weights.forEach(({ weight, expectedClass }) => {
      const { unmount } = render(
        <Typography weight={weight}>{weight} text</Typography>
      );
      const element = screen.getByText(`${weight} text`);
      expect(element).toHaveClass(expectedClass);
      unmount();
    });
  });

  it('applies text alignment correctly', () => {
    const alignments = [
      { align: 'left', expectedClass: 'text-left' },
      { align: 'center', expectedClass: 'text-center' },
      { align: 'right', expectedClass: 'text-right' },
      { align: 'justify', expectedClass: 'text-justify' },
    ] as const;

    alignments.forEach(({ align, expectedClass }) => {
      const { unmount } = render(
        <Typography align={align}>{align} text</Typography>
      );
      const element = screen.getByText(`${align} text`);
      expect(element).toHaveClass(expectedClass);
      unmount();
    });
  });

  it('applies text transform correctly', () => {
    const transforms = [
      { transform: 'none', expectedClass: '' },
      { transform: 'uppercase', expectedClass: 'uppercase' },
      { transform: 'lowercase', expectedClass: 'lowercase' },
      { transform: 'capitalize', expectedClass: 'capitalize' },
    ] as const;

    transforms.forEach(({ transform, expectedClass }) => {
      const { unmount } = render(
        <Typography transform={transform}>{transform} text</Typography>
      );
      const element = screen.getByText(`${transform} text`);
      if (expectedClass) {
        expect(element).toHaveClass(expectedClass);
      }
      unmount();
    });
  });

  it('applies text decoration correctly', () => {
    const decorations = [
      { decoration: 'none', expectedClass: '' },
      { decoration: 'underline', expectedClass: 'underline' },
      { decoration: 'line-through', expectedClass: 'line-through' },
    ] as const;

    decorations.forEach(({ decoration, expectedClass }) => {
      const { unmount } = render(
        <Typography decoration={decoration}>{decoration} text</Typography>
      );
      const element = screen.getByText(`${decoration} text`);
      if (expectedClass) {
        expect(element).toHaveClass(expectedClass);
      }
      unmount();
    });
  });

  it('applies truncate class when truncate is true', () => {
    render(<Typography truncate>Truncated text</Typography>);
    const element = screen.getByText('Truncated text');
    expect(element).toHaveClass('truncate');
  });

  it('applies line clamp class when lineClamp is provided', () => {
    render(<Typography lineClamp={3}>Line clamped text</Typography>);
    const element = screen.getByText('Line clamped text');
    expect(element).toHaveClass('line-clamp-3');
  });

  it('does not apply truncate when lineClamp is provided', () => {
    render(<Typography truncate lineClamp={2}>Text with line clamp</Typography>);
    const element = screen.getByText('Text with line clamp');
    expect(element).toHaveClass('line-clamp-2');
    expect(element).not.toHaveClass('truncate');
  });

  it('applies custom className', () => {
    render(<Typography className="custom-class">Custom class text</Typography>);
    const element = screen.getByText('Custom class text');
    expect(element).toHaveClass('custom-class');
  });

  it('sets test id correctly', () => {
    render(<Typography testId="test-typography">Test ID text</Typography>);
    expect(screen.getByTestId('test-typography')).toBeInTheDocument();
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLParagraphElement>();
    render(<Typography ref={ref}>Ref test</Typography>);
    expect(ref.current).toBeInstanceOf(HTMLParagraphElement);
  });

  it('passes through additional props', () => {
    render(
      <Typography aria-label="Custom label" data-custom="value">
        Props test
      </Typography>
    );
    const element = screen.getByText('Props test');
    expect(element).toHaveAttribute('aria-label', 'Custom label');
    expect(element).toHaveAttribute('data-custom', 'value');
  });

  it('applies default weight based on variant', () => {
    render(<Typography variant="headline">Headline text</Typography>);
    const element = screen.getByText('Headline text');
    expect(element).toHaveClass('font-semibold');
  });

  it('overrides default weight when weight prop is provided', () => {
    render(
      <Typography variant="headline" weight="regular">
        Headline with regular weight
      </Typography>
    );
    const element = screen.getByText('Headline with regular weight');
    expect(element).toHaveClass('font-normal');
    expect(element).not.toHaveClass('font-semibold');
  });

  it('renders complex children correctly', () => {
    render(
      <Typography>
        Complex <strong>children</strong> with <em>markup</em>
      </Typography>
    );
    expect(screen.getByText('Complex')).toBeInTheDocument();
    expect(screen.getByText('children')).toBeInTheDocument();
    expect(screen.getByText('with')).toBeInTheDocument();
    expect(screen.getByText('markup')).toBeInTheDocument();
  });

  it('handles empty children gracefully', () => {
    render(<Typography>{''}</Typography>);
    const element = screen.getByTestId('typography') || document.querySelector('p');
    expect(element).toBeInTheDocument();
  });

  it('applies dark mode classes correctly', () => {
    render(<Typography color="primary">Dark mode text</Typography>);
    const element = screen.getByText('Dark mode text');
    expect(element).toHaveClass('dark:text-label-primary-dark');
  });
});