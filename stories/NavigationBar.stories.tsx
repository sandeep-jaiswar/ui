import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { NavigationBar } from '../src/components/NavigationBar';
import { Button } from '../src/components/Button';
import { Icon } from '../src/components/Icon';

const meta = {
  title: 'Navigation/NavigationBar',
  component: NavigationBar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'iOS-inspired navigation bar component.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Home',
  },
};

export const WithBackButton: Story = {
  args: {
    title: 'Details',
    showBack: true,
    onBack: () => console.log('Back pressed'),
  },
};

export const WithActions: Story = {
  args: {
    title: 'Messages',
    rightContent: (
      <div className="flex gap-2">
        <Button variant="ghost" size="small">
          <Icon name="search" />
        </Button>
        <Button variant="ghost" size="small">
          <Icon name="plus" />
        </Button>
      </div>
    ),
  },
};

export const LargeTitle: Story = {
  args: {
    title: 'Large Title',
    variant: 'large',
  },
};

export const Transparent: Story = {
  args: {
    title: 'Transparent',
    variant: 'transparent',
  },
};