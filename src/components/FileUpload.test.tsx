import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { FileUpload } from './FileUpload';

describe('FileUpload', () => {
  it('renders dropzone variant by default', () => {
    render(<FileUpload testId="fileupload" />);
    expect(screen.getByText('Choose files or drag & drop')).toBeInTheDocument();
  });

  it('renders button variant', () => {
    render(<FileUpload variant="button" testId="fileupload" />);
    expect(screen.getByText('Choose File')).toBeInTheDocument();
  });

  it('handles file selection', () => {
    const handleChange = vi.fn();
    render(<FileUpload onChange={handleChange} testId="fileupload" />);
    
    const input = screen.getByRole('textbox', { hidden: true }) as HTMLInputElement;
    const file = new File(['test'], 'test.txt', { type: 'text/plain' });
    
    Object.defineProperty(input, 'files', {
      value: [file],
      writable: false,
    });
    
    fireEvent.change(input);
    expect(handleChange).toHaveBeenCalled();
  });

  it('shows progress bar when progress is provided', () => {
    render(<FileUpload progress={50} testId="fileupload" />);
    const progressBar = screen.getByTestId('fileupload').querySelector('[style*="width: 50%"]');
    expect(progressBar).toBeInTheDocument();
  });

  it('handles drag and drop', () => {
    const handleChange = vi.fn();
    render(<FileUpload onChange={handleChange} testId="fileupload" />);
    
    const dropzone = screen.getByTestId('fileupload').firstChild as HTMLElement;
    
    fireEvent.dragOver(dropzone);
    expect(screen.getByText('Drop files here')).toBeInTheDocument();
    
    const file = new File(['test'], 'test.txt', { type: 'text/plain' });
    fireEvent.drop(dropzone, {
      dataTransfer: {
        files: [file],
      },
    });
    
    expect(handleChange).toHaveBeenCalled();
  });
});