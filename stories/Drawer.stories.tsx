import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Drawer } from '../src/Drawer';
import { Button } from '../src/Button';
import { List, ListItem } from '../src/List';
import { Icon } from '../src/Icon';

const meta = {
  title: 'Advanced/Drawer',
  component: Drawer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'iOS-inspired drawer/sidebar component.',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    open: true,
    onClose: () => { },
    children: 'Drawer content goes here',
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Right: Story = {
  args: {
    position: 'right',
    title: 'Right Drawer',
  },
};

export const Left: Story = {
  args: {
    position: 'left',
    title: 'Left Drawer',
  },
};

export const Top: Story = {
  args: {
    position: 'top',
    title: 'Top Drawer',
  },
};

export const Bottom: Story = {
  args: {
    position: 'bottom',
    title: 'Bottom Drawer',
  },
};

export const WithNavigation: Story = {
  args: {
    title: 'Navigation',
    children: (
      <List variant="plain">
        <ListItem
          leftContent={<Icon name="home" color="system" />}
          rightContent={<Icon name="chevron" color="tertiary" />}
          onClick={() => console.log('Home')}
        >
          Home
        </ListItem>
        <ListItem
          leftContent={<Icon name="search" color="system" />}
          rightContent={<Icon name="chevron" color="tertiary" />}
          onClick={() => console.log('Search')}
        >
          Search
        </ListItem>
        <ListItem
          leftContent={<Icon name="settings" color="system" />}
          rightContent={<Icon name="chevron" color="tertiary" />}
          onClick={() => console.log('Settings')}
        >
          Settings
        </ListItem>
      </List>
    ),
  },
};

export const Interactive: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [position, setPosition] = React.useState<'left' | 'right' | 'top' | 'bottom'>('right');

    return (
      <div className="p-6 space-y-4">
        <div className="flex gap-2 flex-wrap">
          <Button onClick={() => { setPosition('left'); setIsOpen(true); }}>
            Open Left
          </Button>
          <Button onClick={() => { setPosition('right'); setIsOpen(true); }}>
            Open Right
          </Button>
          <Button onClick={() => { setPosition('top'); setIsOpen(true); }}>
            Open Top
          </Button>
          <Button onClick={() => { setPosition('bottom'); setIsOpen(true); }}>
            Open Bottom
          </Button>
        </div>

        <Drawer
          open={isOpen}
          onClose={() => setIsOpen(false)}
          position={position}
          title={`${position.charAt(0).toUpperCase() + position.slice(1)} Drawer`}
        >
          <div className="space-y-4">
            <p>This is a {position} drawer.</p>
            <p>Click outside or press Escape to close.</p>
            <Button onClick={() => setIsOpen(false)}>
              Close Drawer
            </Button>
          </div>
        </Drawer>
      </div>
    );
  },
};