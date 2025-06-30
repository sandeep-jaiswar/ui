import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../src/Button';
import React from 'react';

// Mock function for onClick handlers
const fn = () => { };

// Icons for demonstration
const ChevronRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06L7.28 12.78a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z" />
  </svg>
);

const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 2a.75.75 0 01.75.75v4.5h4.5a.75.75 0 010 1.5h-4.5v4.5a.75.75 0 01-1.5 0v-4.5h-4.5a.75.75 0 010-1.5h4.5v-4.5A.75.75 0 018 2z" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8.75 2.75a.75.75 0 00-1.5 0v5.69L5.03 6.22a.75.75 0 00-1.06 1.06l3.5 3.5a.75.75 0 001.06 0l3.5-3.5a.75.75 0 00-1.06-1.06L8.75 8.44V2.75z" />
    <path d="M3.5 9.75a.75.75 0 00-1.5 0v1.5A2.75 2.75 0 004.75 14h6.5A2.75 2.75 0 0014 11.25v-1.5a.75.75 0 00-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5z" />
  </svg>
);

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'iOS-inspired button component following Apple\'s Human Interface Guidelines. Supports multiple variants, sizes, and states with proper accessibility features.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'destructive', 'ghost', 'plain'],
      description: 'Button variant following iOS design patterns',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Button size',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button',
    },
    loading: {
      control: 'boolean',
      description: 'Show loading state',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Make button full width',
    },
    children: {
      control: 'text',
      description: 'Button content',
    },
  },
  args: {
    onClick: fn(),
    children: 'Button',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic variants
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Delete Item',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

export const Plain: Story = {
  args: {
    variant: 'plain',
    children: 'Plain Button',
  },
};

// Sizes
export const Small: Story = {
  args: {
    size: 'small',
    children: 'Small Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    children: 'Medium Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Large Button',
  },
};

// States
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: 'Submit Form',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: 'Full Width Button',
  },
  parameters: {
    layout: 'padded',
  },
};

// With Icons
export const WithStartIcon: Story = {
  args: {
    startIcon: <PlusIcon />,
    children: 'Add Item',
  },
};

export const WithEndIcon: Story = {
  args: {
    endIcon: <ChevronRightIcon />,
    children: 'Continue',
  },
};

export const WithBothIcons: Story = {
  args: {
    startIcon: <DownloadIcon />,
    endIcon: <ChevronRightIcon />,
    children: 'Download',
  },
};

// Icon only buttons
export const IconOnlySmall: Story = {
  args: {
    size: 'small',
    variant: 'ghost',
    children: <PlusIcon />,
    'aria-label': 'Add item',
  },
};

export const IconOnlyMedium: Story = {
  args: {
    size: 'medium',
    variant: 'secondary',
    children: <DownloadIcon />,
    'aria-label': 'Download',
  },
};

// Button groups
export const ButtonGroup: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button variant="secondary">Cancel</Button>
      <Button variant="primary">Save</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons can be grouped together for related actions.',
      },
    },
  },
};

export const VerticalButtonGroup: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-48">
      <Button variant="primary" fullWidth>Primary Action</Button>
      <Button variant="secondary" fullWidth>Secondary Action</Button>
      <Button variant="ghost" fullWidth>Tertiary Action</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Vertical button groups work well in modals and forms.',
      },
    },
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-4 w-64">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="plain">Plain</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All button variants displayed together.',
      },
    },
  },
};

// All sizes showcase
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <Button size="small">Small Button</Button>
      <Button size="medium">Medium Button</Button>
      <Button size="large">Large Button</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All button sizes displayed together.',
      },
    },
  },
};

// Interactive examples
export const InteractiveExample: Story = {
  render: () => {
    const [count, setCount] = React.useState(0);
    const [loading, setLoading] = React.useState(false);

    const handleIncrement = () => {
      setLoading(true);
      setTimeout(() => {
        setCount(prev => prev + 1);
        setLoading(false);
      }, 1000);
    };

    return (
      <div className="flex flex-col items-center gap-4">
        <div className="text-ios-title-2 font-semibold">Count: {count}</div>
        <Button
          onClick={handleIncrement}
          loading={loading}
          startIcon={<PlusIcon />}
        >
          {loading ? 'Adding...' : 'Add One'}
        </Button>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example showing loading state and click handling.',
      },
    },
  },
};