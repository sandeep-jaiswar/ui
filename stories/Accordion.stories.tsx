import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionItem } from '../src/components/Accordion';

const meta = {
  title: 'Data Display/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'iOS-inspired accordion component for collapsible content sections.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <Accordion>
      <AccordionItem title="What is React?">
        React is a JavaScript library for building user interfaces, particularly web applications.
      </AccordionItem>
      <AccordionItem title="What is TypeScript?">
        TypeScript is a programming language developed by Microsoft that builds on JavaScript by adding static type definitions.
      </AccordionItem>
      <AccordionItem title="What is Tailwind CSS?">
        Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.
      </AccordionItem>
    </Accordion>
  ),
};

export const DefaultExpanded: Story = {
  render: () => (
    <Accordion>
      <AccordionItem title="Expanded by default" defaultExpanded>
        This accordion item is expanded by default.
      </AccordionItem>
      <AccordionItem title="Collapsed by default">
        This accordion item is collapsed by default.
      </AccordionItem>
    </Accordion>
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <Accordion>
      <AccordionItem title="Normal item">
        This is a normal accordion item.
      </AccordionItem>
      <AccordionItem title="Disabled item" disabled>
        This accordion item is disabled and cannot be toggled.
      </AccordionItem>
    </Accordion>
  ),
};

export const Separated: Story = {
  render: () => (
    <Accordion variant="separated">
      <AccordionItem title="First section">
        Content for the first section.
      </AccordionItem>
      <AccordionItem title="Second section">
        Content for the second section.
      </AccordionItem>
      <AccordionItem title="Third section">
        Content for the third section.
      </AccordionItem>
    </Accordion>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [expandedItems, setExpandedItems] = React.useState<string[]>(['item1']);
    
    const handleToggle = (itemId: string, expanded: boolean) => {
      setExpandedItems(prev => 
        expanded 
          ? [...prev, itemId]
          : prev.filter(id => id !== itemId)
      );
    };
    
    return (
      <div className="space-y-4">
        <div className="text-sm text-label-secondary">
          Expanded items: {expandedItems.join(', ') || 'None'}
        </div>
        
        <Accordion>
          <AccordionItem 
            title="Controlled item 1"
            expanded={expandedItems.includes('item1')}
            onToggle={(expanded) => handleToggle('item1', expanded)}
          >
            This is controlled accordion content 1.
          </AccordionItem>
          <AccordionItem 
            title="Controlled item 2"
            expanded={expandedItems.includes('item2')}
            onToggle={(expanded) => handleToggle('item2', expanded)}
          >
            This is controlled accordion content 2.
          </AccordionItem>
        </Accordion>
      </div>
    );
  },
};