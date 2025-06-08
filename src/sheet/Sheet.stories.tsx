import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { fn } from 'storybook/test';

import { Sheet } from './Sheet';

const meta = {
  title: 'Component/Sheet',
  component: Sheet,
  parameters: {
    layout: 'fullscreen', // Use fullscreen layout to better visualize a sheet
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: { type: 'boolean' } },
    onClose: { action: 'closed' },
    title: { control: { type: 'text' } },
    leftTitle: { control: { type: 'text' } },
    onBack: { action: 'back clicked' },
    children: { control: false }, // Children are set per story
  },
  args: {
    isOpen: true, // Ensure sheet is open in Storybook
    title: 'Sheet Title',
    onClose: fn(),
  },
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...meta.args,
  },
};

export const WithLeftTitle: Story = {
  args: {
    ...meta.args,
    leftTitle: 'Back',
    onBack: undefined, // No back action for this story
  },
};

export const WithBackAction: Story = {
  args: {
    ...meta.args,
    leftTitle: 'Previous',
    onBack: fn(),
  },
};

export const WithChildren: Story = {
  args: {
    ...meta.args,
    children: (
      <div className="p-4">
        <p>This is some content inside the sheet.</p>
        <p>You can put any React elements here.</p>
        <p>Scrollable content will work automatically.</p>
         <div style={{ height: '1000px', background: 'linear-gradient(to bottom, #e0e0e0, #f0f0f0)' }}>
            Long content to demonstrate scrolling.
         </div>
      </div>
    ),
  },
};
