import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from '../src/DatePicker';

const meta = {
  title: 'Advanced/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'iOS-inspired date picker component.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    label: 'Select Date',
    helperText: 'Choose your preferred date',
  },
};

export const WithValue: Story = {
  args: {
    value: new Date('2024-03-15'),
    label: 'Event Date',
  },
};

export const WithMinMax: Story = {
  args: {
    label: 'Booking Date',
    min: new Date(),
    max: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
    helperText: 'Select a date within the next 30 days',
  },
};

export const Interactive: Story = {
  render: () => {
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);

    return (
      <div className="space-y-4 w-80">
        <DatePicker
          label="Event Date"
          value={selectedDate}
          onChange={setSelectedDate}
          helperText="Select the date for your event"
        />

        {selectedDate && (
          <div className="p-3 bg-fill-quaternary dark:bg-fill-quaternary-dark rounded-ios">
            <p className="text-sm">
              Selected: {selectedDate.toLocaleDateString()}
            </p>
          </div>
        )}
      </div>
    );
  },
};