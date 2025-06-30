import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { List, ListItem } from '../src/components/List';
import { Avatar } from '../src/components/Avatar';
import { Icon } from '../src/components/Icon';
import { Badge } from '../src/components/Badge';

const meta = {
  title: 'Layout/List',
  component: List,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'iOS-inspired list components for displaying structured content.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <List>
      <ListItem>First item</ListItem>
      <ListItem>Second item</ListItem>
      <ListItem>Third item</ListItem>
    </List>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <List>
      <ListItem leftContent={<Icon name="home" color="system" />}>
        Home
      </ListItem>
      <ListItem leftContent={<Icon name="search" color="system" />}>
        Search
      </ListItem>
      <ListItem leftContent={<Icon name="settings" color="system" />}>
        Settings
      </ListItem>
    </List>
  ),
};

export const WithAvatars: Story = {
  render: () => (
    <List>
      <ListItem 
        leftContent={<Avatar initials="JD" size="medium" />}
        rightContent={<Badge variant="primary">3</Badge>}
      >
        <div>
          <div className="font-medium">John Doe</div>
          <div className="text-sm text-label-secondary">Hey, how are you?</div>
        </div>
      </ListItem>
      <ListItem 
        leftContent={<Avatar initials="JS" size="medium" backgroundColor="#34C759" />}
        rightContent={<Badge variant="success" dot />}
      >
        <div>
          <div className="font-medium">Jane Smith</div>
          <div className="text-sm text-label-secondary">See you tomorrow!</div>
        </div>
      </ListItem>
    </List>
  ),
};

export const Interactive: Story = {
  render: () => (
    <List>
      <ListItem 
        onClick={() => console.log('Notifications clicked')}
        leftContent={<Icon name="settings" color="system" />}
        rightContent={<Icon name="chevron" color="tertiary" />}
      >
        Notifications
      </ListItem>
      <ListItem 
        onClick={() => console.log('Privacy clicked')}
        leftContent={<Icon name="settings" color="system" />}
        rightContent={<Icon name="chevron" color="tertiary" />}
      >
        Privacy & Security
      </ListItem>
      <ListItem 
        disabled
        leftContent={<Icon name="settings" color="tertiary" />}
        rightContent={<Icon name="chevron" color="tertiary" />}
      >
        Disabled Item
      </ListItem>
    </List>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="mb-2 font-semibold">Grouped</h3>
        <List variant="grouped">
          <ListItem>Grouped item 1</ListItem>
          <ListItem>Grouped item 2</ListItem>
        </List>
      </div>
      
      <div>
        <h3 className="mb-2 font-semibold">Inset</h3>
        <List variant="inset">
          <ListItem>Inset item 1</ListItem>
          <ListItem>Inset item 2</ListItem>
        </List>
      </div>
      
      <div>
        <h3 className="mb-2 font-semibold">Plain</h3>
        <List variant="plain">
          <ListItem>Plain item 1</ListItem>
          <ListItem>Plain item 2</ListItem>
        </List>
      </div>
    </div>
  ),
};