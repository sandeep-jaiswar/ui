import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from '../src/Tabs';

const mockItems = [
  {
    id: 'overview',
    label: 'Overview',
    content: <div className="p-4">Overview content goes here. This tab shows general information.</div>
  },
  {
    id: 'details',
    label: 'Details',
    content: <div className="p-4">Detailed information is displayed in this tab.</div>
  },
  {
    id: 'settings',
    label: 'Settings',
    content: <div className="p-4">Configuration options and settings are shown here.</div>
  },
  {
    id: 'disabled',
    label: 'Disabled',
    content: <div className="p-4">This tab is disabled.</div>,
    disabled: true
  },
];

const meta = {
  title: 'Data Display/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'iOS-inspired tabs component for content organization.',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    items: mockItems.slice(0, 3), // Exclude disabled tab for default story
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Segmented: Story = {
  args: {
    variant: 'segmented',
  },
};

export const WithDisabled: Story = {
  args: {
    items: mockItems, // Include disabled tab
  },
};

export const Interactive: Story = {
  render: () => {
    const [activeTab, setActiveTab] = React.useState('tab1');

    const dynamicItems = [
      {
        id: 'tab1',
        label: 'Tab 1',
        content: (
          <div className="p-4">
            <h3 className="font-semibold mb-2">Dynamic Tab 1</h3>
            <p>Current active tab: {activeTab}</p>
          </div>
        )
      },
      {
        id: 'tab2',
        label: 'Tab 2',
        content: (
          <div className="p-4">
            <h3 className="font-semibold mb-2">Dynamic Tab 2</h3>
            <button
              onClick={() => setActiveTab('tab3')}
              className="px-3 py-1 bg-systemBlue-500 text-white rounded"
            >
              Switch to Tab 3
            </button>
          </div>
        )
      },
      {
        id: 'tab3',
        label: 'Tab 3',
        content: (
          <div className="p-4">
            <h3 className="font-semibold mb-2">Dynamic Tab 3</h3>
            <p>You can programmatically control which tab is active.</p>
          </div>
        )
      },
    ];

    return (
      <Tabs
        items={dynamicItems}
        activeTab={activeTab}
        onChange={setActiveTab}
      />
    );
  },
};