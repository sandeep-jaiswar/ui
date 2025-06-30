import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from '../src/TextArea';

const meta = {
  title: 'Form Controls/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'iOS-inspired textarea component with auto-resize and character count.',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    placeholder: 'Enter your message...',
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    label: 'Message',
    helperText: 'Enter a detailed message',
  },
};

export const WithCharacterCount: Story = {
  args: {
    label: 'Description',
    showCount: true,
    maxLength: 200,
    placeholder: 'Describe your experience...',
  },
};

export const AutoResize: Story = {
  args: {
    label: 'Auto-resizing TextArea',
    autoResize: true,
    placeholder: 'This textarea will grow as you type...',
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Required Field',
    state: 'error',
    errorText: 'This field is required',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <TextArea variant="filled" placeholder="Filled variant" />
      <TextArea variant="outlined" placeholder="Outlined variant" />
      <TextArea variant="plain" placeholder="Plain variant" />
    </div>
  ),
};