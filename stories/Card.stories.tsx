import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { Button } from "../src/Button"
import { Card } from "../src/Card"
import { Typography } from "../src/Typography"

// Mock function for onClick handlers
const fn = () => {}

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "iOS-inspired card component following Apple's design guidelines. Provides flexible container for content with various styling options.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["elevated", "grouped", "inset", "plain"],
      description: "Card variant following iOS design patterns",
    },
    padding: {
      control: "select",
      options: ["none", "small", "medium", "large"],
      description: "Card padding size",
    },
    interactive: {
      control: "boolean",
      description: "Make card interactive/clickable",
    },
    children: {
      control: "text",
      description: "Card content",
    },
  },
  args: {
    onClick: fn,
    children: "Card content",
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

// Basic variants
export const Elevated: Story = {
  args: {
    variant: "elevated",
    children: (
      <div>
        <Typography variant="headline">Elevated Card</Typography>
        <Typography variant="body" color="secondary">
          This card has a subtle shadow and appears elevated from the background.
        </Typography>
      </div>
    ),
  },
}

export const Grouped: Story = {
  args: {
    variant: "grouped",
    children: (
      <div>
        <Typography variant="headline">Grouped Card</Typography>
        <Typography variant="body" color="secondary">
          This card style is commonly used in grouped lists and settings.
        </Typography>
      </div>
    ),
  },
}

export const Inset: Story = {
  args: {
    variant: "inset",
    children: (
      <div>
        <Typography variant="headline">Inset Card</Typography>
        <Typography variant="body" color="secondary">
          This card has inset margins and is perfect for content sections.
        </Typography>
      </div>
    ),
  },
}

export const Plain: Story = {
  args: {
    variant: "plain",
    children: (
      <div>
        <Typography variant="headline">Plain Card</Typography>
        <Typography variant="body" color="secondary">
          This card has no background styling, perfect for custom designs.
        </Typography>
      </div>
    ),
  },
}

// Padding variants
export const NoPadding: Story = {
  args: {
    padding: "none",
    children: (
      <div className="bg-systemBlue-50 p-4 dark:bg-systemBlue-900/20">
        <Typography variant="body">This card has no internal padding. Content manages its own spacing.</Typography>
      </div>
    ),
  },
}

export const SmallPadding: Story = {
  args: {
    padding: "small",
    children: <Typography variant="body">Small padding (12px)</Typography>,
  },
}

export const MediumPadding: Story = {
  args: {
    padding: "medium",
    children: <Typography variant="body">Medium padding (16px)</Typography>,
  },
}

export const LargePadding: Story = {
  args: {
    padding: "large",
    children: <Typography variant="body">Large padding (24px)</Typography>,
  },
}

// Interactive cards
export const Interactive: Story = {
  args: {
    interactive: true,
    children: (
      <div>
        <Typography variant="headline">Interactive Card</Typography>
        <Typography variant="body" color="secondary">
          This card responds to hover and click interactions.
        </Typography>
      </div>
    ),
  },
}

export const Clickable: Story = {
  args: {
    onClick: fn,
    children: (
      <div>
        <Typography variant="headline">Clickable Card</Typography>
        <Typography variant="body" color="secondary">
          Click this card to trigger an action.
        </Typography>
      </div>
    ),
  },
}

// Content examples
export const WithImage: Story = {
  render: () => (
    <Card padding="none" className="max-w-sm">
      <img
        src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400"
        alt="Beautiful landscape"
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <Typography variant="headline">Beautiful Landscape</Typography>
        <Typography variant="body" color="secondary">
          A stunning view of mountains and valleys captured at golden hour.
        </Typography>
      </div>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "Card with image content and text overlay.",
      },
    },
  },
}

export const WithActions: Story = {
  render: () => (
    <Card className="max-w-sm">
      <div className="space-y-4">
        <div>
          <Typography variant="headline">Card with Actions</Typography>
          <Typography variant="body" color="secondary">
            This card includes action buttons at the bottom.
          </Typography>
        </div>
        <div className="flex gap-2 pt-2">
          <Button variant="ghost" size="small">
            Cancel
          </Button>
          <Button variant="primary" size="small">
            Confirm
          </Button>
        </div>
      </div>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "Card with action buttons for user interactions.",
      },
    },
  },
}

export const ProductCard: Story = {
  render: () => (
    <Card padding="none" className="max-w-sm" interactive>
      <img
        src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400"
        alt="Product"
        className="h-48 w-full object-cover"
      />
      <div className="space-y-2 p-4">
        <Typography variant="headline">Premium Headphones</Typography>
        <Typography variant="body" color="secondary">
          High-quality wireless headphones with noise cancellation.
        </Typography>
        <div className="flex items-center justify-between pt-2">
          <Typography variant="title3" color="system">
            $299
          </Typography>
          <Button size="small">Add to Cart</Button>
        </div>
      </div>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "Example product card with image, description, and purchase action.",
      },
    },
  },
}

// Card layouts
export const CardGrid: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Card key={item} interactive>
          <Typography variant="headline">Card {item}</Typography>
          <Typography variant="body" color="secondary">
            This is card number {item} in a responsive grid layout.
          </Typography>
        </Card>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Cards arranged in a responsive grid layout.",
      },
    },
  },
}

export const CardList: Story = {
  render: () => (
    <div className="max-w-md space-y-4">
      {["Inbox", "Sent", "Drafts", "Trash"].map((item) => (
        <Card key={item} variant="grouped" interactive>
          <div className="flex items-center justify-between">
            <Typography variant="body">{item}</Typography>
            <Typography variant="caption1" color="tertiary">
              {Math.floor(Math.random() * 100)}
            </Typography>
          </div>
        </Card>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Cards arranged in a vertical list layout.",
      },
    },
  },
}

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card variant="elevated">
          <Typography variant="subhead">Elevated</Typography>
        </Card>
        <Card variant="grouped">
          <Typography variant="subhead">Grouped</Typography>
        </Card>
        <Card variant="inset">
          <Typography variant="subhead">Inset</Typography>
        </Card>
        <Card variant="plain">
          <Typography variant="subhead">Plain</Typography>
        </Card>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All card variants displayed together.",
      },
    },
  },
}

// Interactive example
export const InteractiveExample: Story = {
  render: () => {
    const [selectedCard, setSelectedCard] = React.useState<number | null>(null)

    return (
      <div className="space-y-4">
        <Typography variant="headline">Select a card:</Typography>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <Card
              key={item}
              interactive
              onClick={() => setSelectedCard(item)}
              className={selectedCard === item ? "ring-2 ring-systemBlue-500" : ""}
            >
              <Typography variant="body">Option {item}</Typography>
              <Typography variant="caption1" color="secondary">
                {selectedCard === item ? "Selected" : "Click to select"}
              </Typography>
            </Card>
          ))}
        </div>
        {selectedCard && (
          <Typography variant="body" color="system">
            You selected Option {selectedCard}
          </Typography>
        )}
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive example showing card selection with visual feedback.",
      },
    },
  },
}
