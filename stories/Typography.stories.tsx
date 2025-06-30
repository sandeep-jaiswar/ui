import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../src/components/Typography';

// Mock function for onClick handlers
const fn = () => {};

const meta = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'iOS-inspired typography component following Apple\'s text style guidelines. Provides consistent text styling across the application with proper semantic HTML elements.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'largeTitle',
        'title1',
        'title2',
        'title3',
        'headline',
        'body',
        'callout',
        'subhead',
        'footnote',
        'caption1',
        'caption2'
      ],
      description: 'Typography variant following iOS text styles',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'quaternary', 'system', 'custom'],
      description: 'Text color variant',
    },
    customColor: {
      control: 'color',
      description: 'Custom color value when color is "custom"',
      if: { arg: 'color', eq: 'custom' },
    },
    weight: {
      control: 'select',
      options: ['regular', 'medium', 'semibold', 'bold'],
      description: 'Font weight override',
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
      description: 'Text alignment',
    },
    transform: {
      control: 'select',
      options: ['none', 'uppercase', 'lowercase', 'capitalize'],
      description: 'Text transform',
    },
    decoration: {
      control: 'select',
      options: ['none', 'underline', 'line-through'],
      description: 'Text decoration',
    },
    truncate: {
      control: 'boolean',
      description: 'Truncate text with ellipsis',
    },
    lineClamp: {
      control: 'number',
      description: 'Number of lines to clamp (requires truncate)',
      min: 1,
      max: 10,
    },
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div', 'label'],
      description: 'HTML element to render',
    },
    children: {
      control: 'text',
      description: 'Typography content',
    },
  },
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic variants
export const LargeTitle: Story = {
  args: {
    variant: 'largeTitle',
    children: 'Large Title',
  },
};

export const Title1: Story = {
  args: {
    variant: 'title1',
    children: 'Title 1',
  },
};

export const Title2: Story = {
  args: {
    variant: 'title2',
    children: 'Title 2',
  },
};

export const Title3: Story = {
  args: {
    variant: 'title3',
    children: 'Title 3',
  },
};

export const Headline: Story = {
  args: {
    variant: 'headline',
    children: 'Headline',
  },
};

export const Body: Story = {
  args: {
    variant: 'body',
    children: 'Body text is used for the main content of your interface. It should be easy to read and provide good contrast.',
  },
};

export const Callout: Story = {
  args: {
    variant: 'callout',
    children: 'Callout text is slightly smaller than body text and is used for secondary content.',
  },
};

export const Subhead: Story = {
  args: {
    variant: 'subhead',
    children: 'Subhead text is used for section headers and important secondary information.',
  },
};

export const Footnote: Story = {
  args: {
    variant: 'footnote',
    children: 'Footnote text is used for less important information and fine print.',
  },
};

export const Caption1: Story = {
  args: {
    variant: 'caption1',
    children: 'Caption 1 is used for image captions and small labels.',
  },
};

export const Caption2: Story = {
  args: {
    variant: 'caption2',
    children: 'Caption 2 is the smallest text size, used for timestamps and metadata.',
  },
};

// Color variants
export const PrimaryColor: Story = {
  args: {
    color: 'primary',
    children: 'Primary color text',
  },
};

export const SecondaryColor: Story = {
  args: {
    color: 'secondary',
    children: 'Secondary color text',
  },
};

export const TertiaryColor: Story = {
  args: {
    color: 'tertiary',
    children: 'Tertiary color text',
  },
};

export const SystemColor: Story = {
  args: {
    color: 'system',
    children: 'System blue color text',
  },
};

export const CustomColor: Story = {
  args: {
    color: 'custom',
    customColor: '#FF6B35',
    children: 'Custom color text',
  },
};

// Font weights
export const FontWeights: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography weight="regular">Regular weight text</Typography>
      <Typography weight="medium">Medium weight text</Typography>
      <Typography weight="semibold">Semibold weight text</Typography>
      <Typography weight="bold">Bold weight text</Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different font weights available for typography.',
      },
    },
  },
};

// Text alignment
export const TextAlignment: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-md">
      <Typography align="left">Left aligned text</Typography>
      <Typography align="center">Center aligned text</Typography>
      <Typography align="right">Right aligned text</Typography>
      <Typography align="justify">
        Justified text spreads the words evenly across the line to create clean edges on both sides.
      </Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different text alignment options.',
      },
    },
  },
};

// Text transforms
export const TextTransforms: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography transform="none">Normal text transform</Typography>
      <Typography transform="uppercase">Uppercase text transform</Typography>
      <Typography transform="lowercase">LOWERCASE TEXT TRANSFORM</Typography>
      <Typography transform="capitalize">capitalize text transform</Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different text transform options.',
      },
    },
  },
};

// Text decorations
export const TextDecorations: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography decoration="none">No text decoration</Typography>
      <Typography decoration="underline">Underlined text</Typography>
      <Typography decoration="line-through">Strikethrough text</Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different text decoration options.',
      },
    },
  },
};

// Truncation
export const TruncatedText: Story = {
  args: {
    truncate: true,
    children: 'This is a very long text that will be truncated with an ellipsis when it exceeds the container width',
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Text can be truncated with an ellipsis when it exceeds the container width.',
      },
    },
  },
};

export const LineClampedText: Story = {
  args: {
    lineClamp: 3,
    children: 'This is a very long text that will be clamped to exactly three lines. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Text can be clamped to a specific number of lines.',
      },
    },
  },
};

// Typography scale showcase
export const TypographyScale: Story = {
  render: () => (
    <div className="space-y-6">
      <Typography variant="largeTitle">Large Title - 34px</Typography>
      <Typography variant="title1">Title 1 - 28px</Typography>
      <Typography variant="title2">Title 2 - 22px</Typography>
      <Typography variant="title3">Title 3 - 20px</Typography>
      <Typography variant="headline">Headline - 17px Semibold</Typography>
      <Typography variant="body">Body - 17px Regular</Typography>
      <Typography variant="callout">Callout - 16px Regular</Typography>
      <Typography variant="subhead">Subhead - 15px Regular</Typography>
      <Typography variant="footnote">Footnote - 13px Regular</Typography>
      <Typography variant="caption1">Caption 1 - 12px Regular</Typography>
      <Typography variant="caption2">Caption 2 - 11px Regular</Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete iOS typography scale with all variants and their sizes.',
      },
    },
  },
};

// Color scale showcase
export const ColorScale: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography color="primary">Primary label color</Typography>
      <Typography color="secondary">Secondary label color</Typography>
      <Typography color="tertiary">Tertiary label color</Typography>
      <Typography color="quaternary">Quaternary label color</Typography>
      <Typography color="system">System blue color</Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'iOS label color hierarchy from primary to quaternary, plus system colors.',
      },
    },
  },
};

// Semantic usage examples
export const SemanticUsage: Story = {
  render: () => (
    <article className="space-y-6 max-w-2xl">
      <header>
        <Typography variant="largeTitle" as="h1">
          Article Title
        </Typography>
        <Typography variant="subhead" color="secondary">
          Published on March 15, 2024
        </Typography>
      </header>
      
      <section>
        <Typography variant="title2" as="h2">
          Section Heading
        </Typography>
        <Typography variant="body">
          This is the main body content of the article. It uses the body variant which provides 
          optimal readability for longer form content. The text flows naturally and maintains 
          good contrast and spacing.
        </Typography>
      </section>
      
      <section>
        <Typography variant="headline" as="h3">
          Subsection
        </Typography>
        <Typography variant="callout">
          This callout text provides additional context or highlights important information 
          that supports the main content.
        </Typography>
      </section>
      
      <footer>
        <Typography variant="footnote" color="tertiary">
          This footnote provides additional details or disclaimers related to the content above.
        </Typography>
      </footer>
    </article>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of semantic usage of typography variants in a typical article layout.',
      },
    },
  },
};

// Interactive example
export const InteractiveExample: Story = {
  render: () => {
    const [selectedVariant, setSelectedVariant] = React.useState<'body' | 'headline' | 'title2'>('body');
    const [selectedColor, setSelectedColor] = React.useState<'primary' | 'secondary' | 'system'>('primary');
    
    return (
      <div className="space-y-6">
        <div className="flex gap-4">
          <div>
            <Typography variant="subhead" as="label">Variant:</Typography>
            <select 
              value={selectedVariant} 
              onChange={(e) => setSelectedVariant(e.target.value as any)}
              className="ml-2 px-2 py-1 border rounded"
            >
              <option value="body">Body</option>
              <option value="headline">Headline</option>
              <option value="title2">Title 2</option>
            </select>
          </div>
          <div>
            <Typography variant="subhead" as="label">Color:</Typography>
            <select 
              value={selectedColor} 
              onChange={(e) => setSelectedColor(e.target.value as any)}
              className="ml-2 px-2 py-1 border rounded"
            >
              <option value="primary">Primary</option>
              <option value="secondary">Secondary</option>
              <option value="system">System</option>
            </select>
          </div>
        </div>
        
        <div className="p-4 border rounded-lg">
          <Typography variant={selectedVariant} color={selectedColor}>
            This text changes based on your selections above. Try different combinations 
            to see how the typography variants and colors work together.
          </Typography>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example showing how different variants and colors can be combined.',
      },
    },
  },
};