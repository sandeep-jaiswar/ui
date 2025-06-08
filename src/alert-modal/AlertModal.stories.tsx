import type { Meta, StoryObj } from '@storybook/react';

import { AlertModal } from './AlertModal';
import React from 'react';

const meta = {
  title: 'Component/AlertModal',
  component: AlertModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: { type: 'boolean' } },
    title: { control: { type: 'text' } },
    message: { control: { type: 'text' } },
    actions: { control: false }, // Actions are defined within stories
    actionLayout: {
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
    },
    theme: {
      options: ['light', 'dark'],
      control: { type: 'radio' },
    },
    onClose: { action: 'closed' },
  },
  args: {
    isOpen: true, // Ensure modal is open in Storybook
    title: 'Alert title',
    message: "Here's some alert text. It can span multiple lines if needed!",
  },
} satisfies Meta<typeof AlertModal>;

export default meta;
type Story = StoryObj<typeof meta>;

const createActions = (count: number) => {
  const actions = [];
  for (let i = 1; i <= count; i++) {
    actions.push({
      label: `Action ${i}`,
      onClick: () => alert(`Action ${i} clicked!`),
      isPrimary: i === count, // Make the last action primary
    });
  }
  return actions;
};

// Light Theme Stories
export const LightOneAction: Story = {
  args: {
    ...meta.args,
    theme: 'light',
    actions: createActions(1),
    actionLayout: 'horizontal',
  },
};

export const LightTwoActionsHorizontal: Story = {
  args: {
    ...meta.args,
    theme: 'light',
    actions: createActions(2),
    actionLayout: 'horizontal',
  },
};

export const LightTwoActionsVertical: Story = {
  args: {
    ...meta.args,
    theme: 'light',
    actions: createActions(2),
    actionLayout: 'vertical',
  },
};

export const LightThreeActions: Story = {
  args: {
    ...meta.args,
    theme: 'light',
    actions: createActions(3),
    actionLayout: 'vertical', // Usually vertical for 3+ actions
  },
};

// Dark Theme Stories
export const DarkOneAction: Story = {
  args: {
    ...meta.args,
    theme: 'dark',
    actions: createActions(1),
    actionLayout: 'horizontal',
  },
};

export const DarkTwoActionsHorizontal: Story = {
  args: {
    ...meta.args,
    theme: 'dark',
    actions: createActions(2),
    actionLayout: 'horizontal',
  },
};

export const DarkTwoActionsVertical: Story = {
  args: {
    ...meta.args,
    theme: 'dark',
    actions: createActions(2),
    actionLayout: 'vertical',
  },
};

export const DarkThreeActions: Story = {
  args: {
    ...meta.args,
    theme: 'dark',
    actions: createActions(3),
    actionLayout: 'vertical', // Usually vertical for 3+ actions
  },
};
