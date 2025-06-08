import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { fn } from 'storybook/test';

import { Button } from './Button'; // Corrected path

// A simple SVG icon for demonstration
const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 109.816 109.816 0 0 0 7.94-.583 11.915 11.915 0 0 0 1.379-.163 11.9 11.9 0 0 0 3.756-.419 10.307 10.307 0 0 0 2.516-1.09 10.748 10.748 0 0 0 1.955-1.234c.324-.483.6-.964.825-1.443.215-.453.402-.93.526-1.397C21.997 12.356 22.009 12.189 22 12c0-.189-.003-.368-.01-.55.006-.467.193-.944.408-1.396a10.307 10.307 0 0 0 .825-1.443 10.748 10.748 0 0 0 1.956-1.234 11.915 11.915 0 0 0 1.378-.164 11.9 11.9 0 0 0 3.756-.419A109.816 109.816 0 0 0 13.313 2.91a.75.75 0 0 0-.94.923ZM.535 5.188a.75.75 0 0 0-.47 1.242l2.522 1.713a.75.75 0 0 1 0 1.21l-2.522 1.713a.75.75 0 0 0 .47 1.242L21.305 12l-20.77-6.812Z" />
  </svg>
);

const meta = {
  title: 'Component/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['solid', 'filled', 'text'],
      control: { type: 'radio' },
    },
    color: {
      options: ['blue', 'dark', 'gray'], // Added 'gray' for filled/text variants
      control: { type: 'radio' },
    },
    size: {
      options: ['small', 'medium'],
      control: { type: 'radio' },
    },
    label: {
      control: { type: 'text' },
    },
    icon: { control: false }, // Icon is set per story
    disabled: {
      control: { type: 'boolean' },
    },
    onClick: { action: 'clicked' },
  },
  args: {
    label: 'Label',
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories based on the image variants

export const SolidBlue: Story = {
  args: {
    ...meta.args,
    variant: 'solid',
    color: 'blue',
    icon: <SendIcon />,
  },
};

export const FilledBlue: Story = {
  args: {
    ...meta.args,
    variant: 'filled',
    color: 'blue',
    icon: <SendIcon />,
  },
};

export const SolidDark: Story = {
  args: {
    ...meta.args,
    variant: 'solid',
    color: 'dark',
    icon: <SendIcon />,
  },
};

export const TextBlue: Story = {
  args: {
    ...meta.args,
    variant: 'text',
    color: 'blue',
    icon: <SendIcon />,
  },
};

// Additional stories for variations not explicitly shown but implied

export const SolidBlueNoIcon: Story = {
    args: {
        ...meta.args,
        variant: 'solid',
        color: 'blue',
        label: 'Button',
        icon: undefined,
    },
};

export const FilledBlueNoIcon: Story = {
    args: {
        ...meta.args,
        variant: 'filled',
        color: 'blue',
         label: 'Button',
         icon: undefined,
    },
};

export const SolidDarkNoIcon: Story = {
    args: {
        ...meta.args,
        variant: 'solid',
        color: 'dark',
         label: 'Button',
         icon: undefined,
    },
};

export const TextBlueNoIcon: Story = {
    args: {
        ...meta.args,
        variant: 'text',
        color: 'blue',
         label: 'Button',
         icon: undefined,
    },
};

export const SolidBlueSmall: Story = {
    args: {
        ...meta.args,
        variant: 'solid',
        color: 'blue',
        size: 'small',
        label: 'Button',
        icon: <SendIcon />,
    },
};

export const SolidBlueDisabled: Story = {
    args: {
        ...meta.args,
        variant: 'solid',
        color: 'blue',
        label: 'Button',
        icon: <SendIcon />,
        disabled: true,
    },
};
