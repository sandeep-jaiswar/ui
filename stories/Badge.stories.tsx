import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../src/components/Badge';
import { Typography } from '../src/components/Typography';
import { Button } from '../src/components/Button';
import { Avatar } from '../src/components/Avatar';

// Mock function for onClick handlers
const fn = () => {};

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'iOS-inspired badge component for notifications, status indicators, and labels. Supports various styles, sizes, and formatting options.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'info'],
      description: 'Badge variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Badge size',
    },
    shape: {
      control: 'select',
      options: ['rounded', 'pill'],
      description: 'Badge shape',
    },
    dot: {
      control: 'boolean',
      description: 'Show as dot indicator',
    },
    max: {
      control: 'number',
      description: 'Maximum number to display',
    },
    children: {
      control: 'text',
      description: 'Badge content',
    },
  },
  args: {
    children: '5',
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic variants
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: '5',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'NEW',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: '✓',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: '!',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    children: '×',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'i',
  },
};

// Sizes
export const Small: Story = {
  args: {
    size: 'small',
    children: '3',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    children: '12',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: '99+',
  },
};

// Shapes
export const Rounded: Story = {
  args: {
    shape: 'rounded',
    children: 'NEW',
  },
};

export const Pill: Story = {
  args: {
    shape: 'pill',
    children: '5',
  },
};

// Dot indicators
export const DotSmall: Story = {
  args: {
    dot: true,
    size: 'small',
  },
};

export const DotMedium: Story = {
  args: {
    dot: true,
    size: 'medium',
  },
};

export const DotLarge: Story = {
  args: {
    dot: true,
    size: 'large',
  },
};

// Number formatting
export const NumberFormatting: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Badge>5</Badge>
      <Badge>25</Badge>
      <Badge>99</Badge>
      <Badge>100</Badge>
      <Badge max={9}>15</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Numbers are automatically formatted with "+" when exceeding the max value.',
      },
    },
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <Typography variant="subhead">Variants</Typography>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="info">Info</Badge>
        </div>
      </div>
      <div className="space-y-2">
        <Typography variant="subhead">Dots</Typography>
        <div className="flex gap-2 items-center">
          <Badge variant="primary" dot />
          <Badge variant="secondary" dot />
          <Badge variant="success" dot />
          <Badge variant="warning" dot />
          <Badge variant="error" dot />
          <Badge variant="info" dot />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All badge variants and dot indicators displayed together.',
      },
    },
  },
};

// All sizes showcase
export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Typography variant="subhead">Badge Sizes</Typography>
        <div className="flex gap-4 items-center">
          <Badge size="small">5</Badge>
          <Badge size="medium">12</Badge>
          <Badge size="large">99+</Badge>
        </div>
      </div>
      <div className="space-y-2">
        <Typography variant="subhead">Dot Sizes</Typography>
        <div className="flex gap-4 items-center">
          <Badge size="small" dot />
          <Badge size="medium" dot />
          <Badge size="large" dot />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All badge sizes for both content and dot variants.',
      },
    },
  },
};

// Usage examples
export const WithButton: Story = {
  render: () => (
    <div className="relative inline-block">
      <Button>Messages</Button>
      <Badge 
        variant="primary" 
        size="small"
        className="absolute -top-2 -right-2"
      >
        3
      </Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Badge positioned on a button to show notification count.',
      },
    },
  },
};

export const WithAvatar: Story = {
  render: () => (
    <div className="relative inline-block">
      <Avatar 
        src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"
        size="large"
      />
      <Badge 
        variant="success" 
        dot
        size="medium"
        className="absolute top-0 right-0"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dot badge indicating online status on an avatar.',
      },
    },
  },
};

export const InlineWithText: Story = {
  render: () => (
    <div className="space-y-2">
      <Typography variant="body">
        You have <Badge variant="primary" size="small">5</Badge> new messages
      </Typography>
      <Typography variant="body">
        Status: <Badge variant="success" size="small">Active</Badge>
      </Typography>
      <Typography variant="body">
        Priority: <Badge variant="warning" size="small">High</Badge>
      </Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Badges used inline with text content.',
      },
    },
  },
};

// Navigation example
export const NavigationTabs: Story = {
  render: () => (
    <div className="flex gap-1 p-1 bg-fill-secondary dark:bg-fill-secondary-dark rounded-ios">
      <div className="flex items-center gap-2 px-3 py-2 bg-background-primary dark:bg-background-tertiary-dark rounded-ios-sm">
        <Typography variant="subhead">Inbox</Typography>
        <Badge variant="primary" size="small">12</Badge>
      </div>
      <div className="flex items-center gap-2 px-3 py-2">
        <Typography variant="subhead" color="secondary">Sent</Typography>
      </div>
      <div className="flex items-center gap-2 px-3 py-2">
        <Typography variant="subhead" color="secondary">Drafts</Typography>
        <Badge variant="secondary" size="small">3</Badge>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Badges used in navigation tabs to show counts.',
      },
    },
  },
};

// Status indicators
export const StatusIndicators: Story = {
  render: () => (
    <div className="space-y-3 max-w-sm">
      <div className="flex items-center justify-between p-3 bg-fill-quaternary dark:bg-fill-quaternary-dark rounded-ios">
        <Typography variant="body">System Status</Typography>
        <Badge variant="success">Online</Badge>
      </div>
      <div className="flex items-center justify-between p-3 bg-fill-quaternary dark:bg-fill-quaternary-dark rounded-ios">
        <Typography variant="body">Database</Typography>
        <Badge variant="warning">Slow</Badge>
      </div>
      <div className="flex items-center justify-between p-3 bg-fill-quaternary dark:bg-fill-quaternary-dark rounded-ios">
        <Typography variant="body">API Service</Typography>
        <Badge variant="error">Down</Badge>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Badges used as status indicators in a system dashboard.',
      },
    },
  },
};

// Interactive example
export const InteractiveExample: Story = {
  render: () => {
    const [count, setCount] = React.useState(5);
    const [showDot, setShowDot] = React.useState(true);
    
    return (
      <div className="space-y-6">
        <div className="space-y-4">
          <Typography variant="headline">Notification Badge</Typography>
          <div className="relative inline-block">
            <Button>Notifications</Button>
            {count > 0 && (
              <Badge 
                variant="primary" 
                size="small"
                className="absolute -top-2 -right-2"
              >
                {count}
              </Badge>
            )}
          </div>
          <div className="flex gap-2">
            <Button 
              size="small" 
              variant="secondary"
              onClick={() => setCount(Math.max(0, count - 1))}
            >
              -1
            </Button>
            <Button 
              size="small" 
              variant="secondary"
              onClick={() => setCount(count + 1)}
            >
              +1
            </Button>
            <Button 
              size="small" 
              variant="ghost"
              onClick={() => setCount(0)}
            >
              Clear
            </Button>
          </div>
        </div>
        
        <div className="space-y-4">
          <Typography variant="headline">Status Indicator</Typography>
          <div className="relative inline-block">
            <Avatar initials="JD" />
            {showDot && (
              <Badge 
                variant="success" 
                dot
                size="medium"
                className="absolute top-0 right-0"
              />
            )}
          </div>
          <Button 
            size="small" 
            variant="secondary"
            onClick={() => setShowDot(!showDot)}
          >
            Toggle Status
          </Button>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example showing dynamic badge updates.',
      },
    },
  },
};