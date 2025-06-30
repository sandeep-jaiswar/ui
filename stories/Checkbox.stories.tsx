import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../src/components/Checkbox';
import { Typography } from '../src/components/Typography';

// Mock function for onChange handlers
const fn = () => {};

const meta = {
  title: 'Form Controls/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'iOS-inspired checkbox component following Apple\'s design patterns. Perfect for forms, settings, and multi-selection interfaces.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Is the checkbox checked?',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Is the checkbox indeterminate?',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Checkbox size',
    },
    color: {
      control: 'select',
      options: ['blue', 'green', 'orange', 'red', 'purple'],
      description: 'Checkbox color when checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the checkbox',
    },
    label: {
      control: 'text',
      description: 'Checkbox label',
    },
    labelPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Label position',
    },
  },
  args: {
    onChange: fn,
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic variants
export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled checkbox',
  },
};

// Sizes
export const Small: Story = {
  args: {
    size: 'small',
    label: 'Small checkbox',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    label: 'Medium checkbox',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Large checkbox',
  },
};

// Colors
export const Blue: Story = {
  args: {
    checked: true,
    color: 'blue',
    label: 'Blue checkbox',
  },
};

export const Green: Story = {
  args: {
    checked: true,
    color: 'green',
    label: 'Green checkbox',
  },
};

export const Orange: Story = {
  args: {
    checked: true,
    color: 'orange',
    label: 'Orange checkbox',
  },
};

export const Red: Story = {
  args: {
    checked: true,
    color: 'red',
    label: 'Red checkbox',
  },
};

export const Purple: Story = {
  args: {
    checked: true,
    color: 'purple',
    label: 'Purple checkbox',
  },
};

// All sizes showcase
export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox size="small" label="Small" />
      <Checkbox size="medium" label="Medium" />
      <Checkbox size="large" label="Large" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All checkbox sizes displayed together.',
      },
    },
  },
};

// All colors showcase
export const AllColors: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox checked color="blue" label="Blue" />
      <Checkbox checked color="green" label="Green" />
      <Checkbox checked color="orange" label="Orange" />
      <Checkbox checked color="red" label="Red" />
      <Checkbox checked color="purple" label="Purple" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All checkbox colors displayed together.',
      },
    },
  },
};

// Form example
export const FormExample: Story = {
  render: () => (
    <div className="space-y-6 max-w-sm">
      <Typography variant="headline">Preferences</Typography>
      
      <div className="space-y-4">
        <Checkbox defaultChecked label="Email notifications" />
        <Checkbox label="SMS notifications" />
        <Checkbox defaultChecked label="Push notifications" />
        <Checkbox label="Marketing emails" />
        <Checkbox defaultChecked label="Security alerts" />
      </div>
      
      <div className="pt-4 border-t border-separator-nonOpaque dark:border-separator-nonOpaque-dark">
        <Checkbox label="I agree to the terms and conditions" color="green" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example preferences form with various checkbox options.',
      },
    },
  },
};

// Interactive example
export const InteractiveExample: Story = {
  render: () => {
    const [selectedItems, setSelectedItems] = React.useState<string[]>(['item1']);
    const [selectAll, setSelectAll] = React.useState(false);
    
    const items = [
      { id: 'item1', label: 'Item 1' },
      { id: 'item2', label: 'Item 2' },
      { id: 'item3', label: 'Item 3' },
      { id: 'item4', label: 'Item 4' },
    ];
    
    const handleItemChange = (itemId: string, checked: boolean) => {
      if (checked) {
        setSelectedItems(prev => [...prev, itemId]);
      } else {
        setSelectedItems(prev => prev.filter(id => id !== itemId));
      }
    };
    
    const handleSelectAllChange = (checked: boolean) => {
      setSelectAll(checked);
      if (checked) {
        setSelectedItems(items.map(item => item.id));
      } else {
        setSelectedItems([]);
      }
    };
    
    React.useEffect(() => {
      const allSelected = items.every(item => selectedItems.includes(item.id));
      const someSelected = selectedItems.length > 0;
      setSelectAll(allSelected);
    }, [selectedItems]);
    
    const isIndeterminate = selectedItems.length > 0 && selectedItems.length < items.length;

    return (
      <div className="space-y-6 max-w-sm">
        <Typography variant="headline">Select Items</Typography>
        
        <Checkbox
          checked={selectAll}
          indeterminate={isIndeterminate}
          onChange={handleSelectAllChange}
          label="Select All"
          color="blue"
        />
        
        <div className="pl-6 space-y-3 border-l-2 border-separator-nonOpaque dark:border-separator-nonOpaque-dark">
          {items.map(item => (
            <Checkbox
              key={item.id}
              checked={selectedItems.includes(item.id)}
              onChange={(checked) => handleItemChange(item.id, checked)}
              label={item.label}
            />
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-fill-quaternary dark:bg-fill-quaternary-dark rounded-ios">
          <Typography variant="subhead">Selected Items:</Typography>
          <Typography variant="footnote" color="secondary">
            {selectedItems.length > 0 ? selectedItems.join(', ') : 'None'}
          </Typography>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example with select all functionality and indeterminate state.',
      },
    },
  },
};