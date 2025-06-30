import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../src/Icon';
import { Typography } from '../src/Typography';

const meta = {
  title: 'Foundation/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'iOS-inspired icon component with system icons and custom SVG support.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: ['chevron', 'plus', 'minus', 'close', 'check', 'search', 'heart', 'star', 'home', 'settings'],
      description: 'System icon name',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'xlarge'],
      description: 'Icon size',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'system', 'success', 'warning', 'error', 'custom'],
      description: 'Icon color',
    },
    customColor: {
      control: 'color',
      description: 'Custom color value',
      if: { arg: 'color', eq: 'custom' },
    },
  },
  args: {
    name: 'star',
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SystemIcons: Story = {
  render: () => (
    <div className="grid grid-cols-5 gap-4">
      {['chevron', 'plus', 'minus', 'close', 'check', 'search', 'heart', 'star', 'home', 'settings'].map((iconName) => (
        <div key={iconName} className="text-center">
          <Icon name={iconName} size="large" />
          <Typography variant="caption2" className="mt-1">{iconName}</Typography>
        </div>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icon name="star" size="small" />
      <Icon name="star" size="medium" />
      <Icon name="star" size="large" />
      <Icon name="star" size="xlarge" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex gap-4">
      <Icon name="heart" color="primary" />
      <Icon name="heart" color="system" />
      <Icon name="heart" color="success" />
      <Icon name="heart" color="warning" />
      <Icon name="heart" color="error" />
    </div>
  ),
};

export const CustomIcon: Story = {
  render: () => (
    <Icon size="large">
      <circle cx="8" cy="8" r="6" fill="currentColor" />
    </Icon>
  ),
};