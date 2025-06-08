import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Slider } from '../components/Slider';

const meta = {
  title: 'Component/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    min: { control: { type: 'number' } },
    max: { control: { type: 'number' } },
    step: { control: { type: 'number' } },
    value: { control: { type: 'number' } },
    onChange: { action: 'value changed' },
    startAdornment: { control: { type: 'text' } },
    endAdornment: { control: { type: 'text' } },
    endAdornmentFaded: { control: { type: 'boolean' } },
  },
  args: {
    min: 0,
    max: 100,
    step: 1,
    value: 50,
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...meta.args,
  },
};

export const WithStartAdornment: Story = {
  args: {
    ...meta.args,
    startAdornment: '☀️',
  },
};

export const WithEndAdornment: Story = {
  args: {
    ...meta.args,
    endAdornment: '🔆',
  },
};

export const WithBothAdornments: Story = {
  args: {
    ...meta.args,
    startAdornment: '☀️',
    endAdornment: '🔆',
  },
};

export const WithFadedEndAdornment: Story = {
  args: {
    ...meta.args,
    startAdornment: '☀️',
    endAdornment: '🔆',
    endAdornmentFaded: true,
  },
};
