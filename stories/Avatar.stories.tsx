import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '../src/Avatar';
import { Typography } from '../src/Typography';

// Mock function for onClick handlers
const fn = () => { };

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'iOS-inspired avatar component for displaying user profile pictures with fallback options and online status indicators.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'xlarge'],
      description: 'Avatar size',
    },
    shape: {
      control: 'select',
      options: ['circle', 'rounded', 'square'],
      description: 'Avatar shape',
    },
    src: {
      control: 'text',
      description: 'Image source URL',
    },
    alt: {
      control: 'text',
      description: 'Alt text for the image',
    },
    initials: {
      control: 'text',
      description: 'Fallback initials when no image',
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color for initials',
    },
    textColor: {
      control: 'color',
      description: 'Text color for initials',
    },
    online: {
      control: 'boolean',
      description: 'Show online status indicator',
    },
  },
  args: {
    alt: 'User avatar',
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic variants
export const WithImage: Story = {
  args: {
    src: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    alt: 'User profile picture',
  },
};

export const WithInitials: Story = {
  args: {
    initials: 'JD',
  },
};

export const Default: Story = {
  args: {},
};

// Sizes
export const Small: Story = {
  args: {
    size: 'small',
    src: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    src: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    src: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
};

export const XLarge: Story = {
  args: {
    size: 'xlarge',
    src: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
};

// Shapes
export const Circle: Story = {
  args: {
    shape: 'circle',
    src: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
};

export const Rounded: Story = {
  args: {
    shape: 'rounded',
    src: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
};

export const Square: Story = {
  args: {
    shape: 'square',
    src: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
};

// Online status
export const Online: Story = {
  args: {
    src: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    online: true,
  },
};

export const OnlineWithInitials: Story = {
  args: {
    initials: 'AB',
    online: true,
  },
};

// Custom colors
export const CustomColors: Story = {
  args: {
    initials: 'AB',
    backgroundColor: '#FF6B35',
    textColor: '#FFFFFF',
  },
};

export const SystemColors: Story = {
  args: {
    initials: 'SB',
    backgroundColor: '#34C759',
    textColor: '#FFFFFF',
  },
};

// Error handling
export const BrokenImage: Story = {
  args: {
    src: 'https://broken-url.com/image.jpg',
    initials: 'FB',
    alt: 'Fallback avatar',
  },
  parameters: {
    docs: {
      description: {
        story: 'When image fails to load, shows initials as fallback.',
      },
    },
  },
};

// Size comparison
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="text-center">
        <Avatar size="small" initials="S" />
        <Typography variant="caption2" className="mt-1">Small</Typography>
      </div>
      <div className="text-center">
        <Avatar size="medium" initials="M" />
        <Typography variant="caption2" className="mt-1">Medium</Typography>
      </div>
      <div className="text-center">
        <Avatar size="large" initials="L" />
        <Typography variant="caption2" className="mt-1">Large</Typography>
      </div>
      <div className="text-center">
        <Avatar size="xlarge" initials="XL" />
        <Typography variant="caption2" className="mt-1">XLarge</Typography>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All avatar sizes displayed together for comparison.',
      },
    },
  },
};

// Shape comparison
export const AllShapes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="text-center">
        <Avatar
          shape="circle"
          src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"
        />
        <Typography variant="caption2" className="mt-1">Circle</Typography>
      </div>
      <div className="text-center">
        <Avatar
          shape="rounded"
          src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"
        />
        <Typography variant="caption2" className="mt-1">Rounded</Typography>
      </div>
      <div className="text-center">
        <Avatar
          shape="square"
          src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"
        />
        <Typography variant="caption2" className="mt-1">Square</Typography>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All avatar shapes displayed together for comparison.',
      },
    },
  },
};

// User list example
export const UserList: Story = {
  render: () => (
    <div className="space-y-3 max-w-sm">
      {[
        { name: 'John Doe', initials: 'JD', online: true },
        { name: 'Jane Smith', initials: 'JS', online: false },
        { name: 'Bob Wilson', initials: 'BW', online: true },
        { name: 'Alice Brown', initials: 'AB', online: false },
      ].map((user, index) => (
        <div key={index} className="flex items-center gap-3 p-2 rounded-ios hover:bg-fill-quaternary dark:hover:bg-fill-quaternary-dark">
          <Avatar
            initials={user.initials}
            online={user.online}
            backgroundColor={`hsl(${index * 90}, 60%, 50%)`}
          />
          <div>
            <Typography variant="body">{user.name}</Typography>
            <Typography variant="caption1" color="secondary">
              {user.online ? 'Online' : 'Offline'}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example user list with avatars and online status.',
      },
    },
  },
};

// Avatar group
export const AvatarGroup: Story = {
  render: () => (
    <div className="flex -space-x-2">
      <Avatar
        src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"
        className="border-2 border-background-primary dark:border-background-primary-dark"
      />
      <Avatar
        initials="JS"
        backgroundColor="#34C759"
        className="border-2 border-background-primary dark:border-background-primary-dark"
      />
      <Avatar
        initials="BW"
        backgroundColor="#FF9500"
        className="border-2 border-background-primary dark:border-background-primary-dark"
      />
      <Avatar
        initials="AB"
        backgroundColor="#AF52DE"
        className="border-2 border-background-primary dark:border-background-primary-dark"
      />
      <div className="w-10 h-10 rounded-full bg-fill-secondary dark:bg-fill-secondary-dark border-2 border-background-primary dark:border-background-primary-dark flex items-center justify-center">
        <Typography variant="caption1" color="secondary">+5</Typography>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Group of overlapping avatars with overflow indicator.',
      },
    },
  },
};

// Interactive example
export const InteractiveExample: Story = {
  render: () => {
    const [selectedUser, setSelectedUser] = React.useState<number | null>(null);

    const users = [
      { name: 'John Doe', initials: 'JD', color: '#007AFF' },
      { name: 'Jane Smith', initials: 'JS', color: '#34C759' },
      { name: 'Bob Wilson', initials: 'BW', color: '#FF9500' },
    ];

    return (
      <div className="space-y-4">
        <Typography variant="headline">Select a user:</Typography>
        <div className="flex gap-4">
          {users.map((user, index) => (
            <div
              key={index}
              className={`text-center cursor-pointer p-2 rounded-ios transition-colors ${selectedUser === index
                  ? 'bg-systemBlue-50 dark:bg-systemBlue-900/20'
                  : 'hover:bg-fill-quaternary dark:hover:bg-fill-quaternary-dark'
                }`}
              onClick={() => setSelectedUser(index)}
            >
              <Avatar
                initials={user.initials}
                backgroundColor={user.color}
                online={selectedUser === index}
                className={selectedUser === index ? 'ring-2 ring-systemBlue-500' : ''}
              />
              <Typography variant="caption1" className="mt-1">
                {user.name}
              </Typography>
            </div>
          ))}
        </div>
        {selectedUser !== null && (
          <Typography variant="body" color="system">
            Selected: {users[selectedUser].name}
          </Typography>
        )}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example showing user selection with visual feedback.',
      },
    },
  },
};