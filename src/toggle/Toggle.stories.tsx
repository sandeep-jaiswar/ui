import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Toggle } from './Toggle';

const meta = {
  title: 'Component/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: { type: 'boolean' },
    },
    onChange: { action: 'checked changed' },
    disabled: {
      control: { type: 'boolean' },
    },
    label: {
      control: { type: 'text' },
    },
  },
  args: {
    checked: false,
    disabled: false,
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...meta.args,
  },
};

export const Checked: Story = {
  args: {
    ...meta.args,
    checked: true,
  },
};

export const DisabledUnchecked: Story = {
  args: {
    ...meta.args,
    disabled: true,
    checked: false,
  },
};

export const DisabledChecked: Story = {
  args: {
    ...meta.args,
    disabled: true,
    checked: true,
  },
};

export const WithLabelUnchecked: Story = {
  args: {
    ...meta.args,
    label: 'Enable Feature',
    checked: false,
  },
};

export const WithLabelChecked: Story = {
  args: {
    ...meta.args,
    label: 'Enable Feature',
    checked: true,
  },
};
