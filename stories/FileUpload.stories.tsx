import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FileUpload } from '../src/FileUpload';

const meta = {
  title: 'Advanced/FileUpload',
  component: FileUpload,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'iOS-inspired file upload component with drag & drop.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dropzone: Story = {};

export const Button: Story = {
  args: {
    variant: 'button',
  },
};

export const WithRestrictions: Story = {
  args: {
    accept: '.jpg,.jpeg,.png,.gif',
    maxSize: 5 * 1024 * 1024, // 5MB
    label: 'Upload Images',
    helperText: 'Only image files up to 5MB are allowed',
  },
};

export const Multiple: Story = {
  args: {
    multiple: true,
    label: 'Upload Documents',
    helperText: 'You can select multiple files',
  },
};

export const WithProgress: Story = {
  args: {
    progress: 65,
    label: 'Uploading...',
  },
};

export const Interactive: Story = {
  render: () => {
    const [files, setFiles] = React.useState<File[]>([]);
    const [progress, setProgress] = React.useState<number | undefined>();

    const handleFileChange = (fileList: FileList | null) => {
      if (fileList) {
        const newFiles = Array.from(fileList);
        setFiles(prev => [...prev, ...newFiles]);

        // Simulate upload progress
        setProgress(0);
        const interval = setInterval(() => {
          setProgress(prev => {
            if (prev === undefined || prev >= 100) {
              clearInterval(interval);
              return undefined;
            }
            return prev + 10;
          });
        }, 200);
      }
    };

    return (
      <div className="space-y-4 w-96">
        <FileUpload
          multiple
          accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
          maxSize={10 * 1024 * 1024} // 10MB
          label="Upload Files"
          helperText="Drag & drop files or click to browse"
          progress={progress}
          onChange={handleFileChange}
        />

        {files.length > 0 && (
          <div className="p-4 bg-fill-quaternary dark:bg-fill-quaternary-dark rounded-ios">
            <h4 className="font-semibold mb-2">Uploaded Files:</h4>
            <ul className="space-y-1">
              {files.map((file, index) => (
                <li key={index} className="text-sm">
                  {file.name} ({(file.size / 1024).toFixed(1)} KB)
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  },
};