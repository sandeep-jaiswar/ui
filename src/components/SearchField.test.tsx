import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { SearchField } from './SearchField';

describe('SearchField', () => {
  it('renders with default props', () => {
    render(<SearchField testId="search" />);
    const search = screen.getByTestId('search');
    expect(search).toBeInTheDocument();
    expect(search).toHaveAttribute('placeholder', 'Search');
  });

  it('handles value changes', () => {
    const handleChange = vi.fn();
    render(<SearchField onChange={handleChange} testId="search" />);
    
    fireEvent.change(screen.getByTestId('search'), { target: { value: 'test' } });
    expect(handleChange).toHaveBeenCalledWith('test');
  });

  it('handles search on Enter key', () => {
    const handleSearch = vi.fn();
    render(<SearchField onSearch={handleSearch} testId="search" />);
    
    const input = screen.getByTestId('search');
    fireEvent.change(input, { target: { value: 'test query' } });
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(handleSearch).toHaveBeenCalledWith('test query');
  });

  it('shows clear button when there is value', () => {
    render(<SearchField value="test" testId="search" />);
    expect(screen.getByLabelText('Clear search')).toBeInTheDocument();
  });

  it('shows cancel button when showCancel is true and focused', () => {
    render(<SearchField showCancel testId="search" />);
    const input = screen.getByTestId('search');
    fireEvent.focus(input);
    expect(screen.getByText('Cancel')).toBeInTheDocument();
  });

  it('clears value when clear button is clicked', () => {
    const handleChange = vi.fn();
    render(<SearchField value="test" onChange={handleChange} testId="search" />);
    
    fireEvent.click(screen.getByLabelText('Clear search'));
    expect(handleChange).toHaveBeenCalledWith('');
  });
});