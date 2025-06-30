import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SearchField } from '../src/components/SearchField';

const meta = {
  title: 'Form Controls/SearchField',
  component: SearchField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'iOS-inspired search field component with search icon and cancel functionality.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCancel: Story = {
  args: {
    showCancel: true,
  },
};

export const WithValue: Story = {
  args: {
    value: 'Search query',
    showCancel: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <SearchField size="small" placeholder="Small search" />
      <SearchField size="medium" placeholder="Medium search" />
      <SearchField size="large" placeholder="Large search" />
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [query, setQuery] = React.useState('');
    const [results, setResults] = React.useState<string[]>([]);

    const handleSearch = (value: string) => {
      // Simulate search results
      const mockResults = ['Apple', 'Banana', 'Orange', 'Grape']
        .filter(item => item.toLowerCase().includes(value.toLowerCase()));
      setResults(mockResults);
    };

    return (
      <div className="w-80 space-y-4">
        <SearchField
          value={query}
          onChange={setQuery}
          onSearch={handleSearch}
          showCancel
          placeholder="Search fruits..."
        />
        {results.length > 0 && (
          <div className="bg-background-secondary dark:bg-background-secondary-dark rounded-ios p-4">
            <h3 className="font-semibold mb-2">Results:</h3>
            <ul className="space-y-1">
              {results.map((result, index) => (
                <li key={index} className="text-sm">{result}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  },
};