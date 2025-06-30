import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Timeline } from '../src/Timeline';

const mockItems = [
  {
    id: '1',
    title: 'Order Placed',
    description: 'Your order has been placed successfully',
    timestamp: '2:30 PM',
    completed: true,
    color: 'green' as const
  },
  {
    id: '2',
    title: 'Processing',
    description: 'Your order is being processed',
    timestamp: '3:15 PM',
    completed: true,
    color: 'blue' as const
  },
  {
    id: '3',
    title: 'Shipped',
    description: 'Your order has been shipped',
    timestamp: '4:00 PM',
    completed: true,
    color: 'orange' as const
  },
  {
    id: '4',
    title: 'Delivered',
    timestamp: 'Expected 6:00 PM',
    completed: false,
    color: 'purple' as const
  }
];

const meta = {
  title: 'Advanced/Timeline',
  component: Timeline,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'iOS-inspired timeline component for chronological data.',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    items: mockItems,
  },
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Compact: Story = {
  args: {
    variant: 'compact',
  },
};

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      {
        id: '1',
        title: 'Created',
        description: 'Project was created',
        timestamp: '9:00 AM',
        icon: 'plus',
        completed: true,
        color: 'green'
      },
      {
        id: '2',
        title: 'In Progress',
        description: 'Development started',
        timestamp: '10:30 AM',
        icon: 'settings',
        completed: true,
        color: 'blue'
      },
      {
        id: '3',
        title: 'Review',
        description: 'Code review in progress',
        timestamp: '2:00 PM',
        icon: 'search',
        completed: false,
        color: 'orange'
      }
    ],
  },
};

export const Interactive: Story = {
  render: () => {
    const [completedSteps, setCompletedSteps] = React.useState(2);

    const steps = [
      { id: '1', title: 'Account Setup', description: 'Create your account' },
      { id: '2', title: 'Profile Information', description: 'Add your personal details' },
      { id: '3', title: 'Verification', description: 'Verify your email address' },
      { id: '4', title: 'Complete', description: 'You\'re all set!' }
    ];

    const timelineItems = steps.map((step, index) => ({
      ...step,
      timestamp: `Step ${index + 1}`,
      completed: index < completedSteps,
      color: 'blue' as const
    }));

    return (
      <div className="space-y-6 max-w-md">
        <div className="flex gap-2">
          <button
            onClick={() => setCompletedSteps(Math.max(0, completedSteps - 1))}
            className="px-3 py-1 bg-systemBlue-500 text-white rounded text-sm"
            disabled={completedSteps === 0}
          >
            Previous
          </button>
          <button
            onClick={() => setCompletedSteps(Math.min(steps.length, completedSteps + 1))}
            className="px-3 py-1 bg-systemBlue-500 text-white rounded text-sm"
            disabled={completedSteps === steps.length}
          >
            Next
          </button>
        </div>

        <Timeline items={timelineItems} />
      </div>
    );
  },
};