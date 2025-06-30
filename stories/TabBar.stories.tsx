import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TabBar } from '../src/components/TabBar';

const mockItems = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'search', label: 'Search', icon: 'search' },
  { id: 'favorites', label: 'Favorites', icon: 'heart', badge: 3 },
  { id: 'profile', label: 'Profile', icon: 'settings' },
];

const meta = {
  title: 'Navigation/TabBar',
  component: TabBar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'iOS-inspired tab bar component for bottom navigation.',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    items: mockItems,
  },
} satisfies Meta<typeof TabBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithBadges: Story = {
  args: {
    items: [
      { id: 'home', label: 'Home', icon: 'home' },
      { id: 'messages', label: 'Messages', icon: 'search', badge: 5 },
      { id: 'notifications', label: 'Notifications', icon: 'heart', badge: 99 },
      { id: 'profile', label: 'Profile', icon: 'settings', badge: 150 },
    ],
  },
};

export const WithDisabled: Story = {
  args: {
    items: [
      ...mockItems,
      { id: 'disabled', label: 'Disabled', icon: 'close', disabled: true },
    ],
  },
};

export const Interactive: Story = {
  render: () => {
    const [activeTab, setActiveTab] = React.useState('home');
    
    return (
      <div className="h-screen flex flex-col">
        <div className="flex-1 p-4 bg-background-secondary dark:bg-background-secondary-dark">
          <h1 className="text-2xl font-bold mb-4">
            {mockItems.find(item => item.id === activeTab)?.label} Tab
          </h1>
          <p>Content for the {activeTab} tab goes here.</p>
        </div>
        
        <TabBar
          items={mockItems}
          activeTab={activeTab}
          onChange={setActiveTab}
        />
      </div>
    );
  },
};