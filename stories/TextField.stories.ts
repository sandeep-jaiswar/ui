import type { Meta, StoryObj } from '@storybook/react';

import { TextField } from '../src/components/TextField';

const meta = {
  title: 'Component/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['light', 'dark'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
    },
    label: {
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    helperText: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Text...',
    variant: 'light',
  },
};

export const WithText: Story = {
  args: {
    value: 'Hello, world!',
    placeholder: 'Text...',
    variant: 'light',
  },
};

export const Dark: Story = {
  args: {
    placeholder: 'Text...',
    variant: 'dark',
  },
};

export const DarkWithText: Story = {
  args: {
    value: 'Hello, world!',
    placeholder: 'Text...',
    variant: 'dark',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Text...',
    disabled: true,
    variant: 'light',
  },
};

export const Error: Story = {
  args: {
    placeholder: 'Text...',
    error: true,
    helperText: 'This is an error message.',
    variant: 'light',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    variant: 'light',
  },
};