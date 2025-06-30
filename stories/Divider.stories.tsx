import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { Button } from "../src/Button"
import { Divider } from "../src/Divider"
import { Typography } from "../src/Typography"

const meta = {
  title: "Components/Divider",
  component: Divider,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "iOS-inspired divider component for separating content sections with various styles and orientations.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Divider orientation",
    },
    variant: {
      control: "select",
      options: ["full", "inset", "middle"],
      description: "Divider variant",
    },
    thickness: {
      control: "select",
      options: ["thin", "medium", "thick"],
      description: "Divider thickness",
    },
    color: {
      control: "select",
      options: ["default", "light", "dark"],
      description: "Divider color",
    },
    children: {
      control: "text",
      description: "Divider content",
    },
  },
  args: {},
} satisfies Meta<typeof Divider>

export default meta
type Story = StoryObj<typeof meta>

// Basic variants
export const Default: Story = {
  args: {},
}

export const WithText: Story = {
  args: {
    children: "OR",
  },
}

export const Vertical: Story = {
  render: () => (
    <div className="flex h-20 items-center gap-4">
      <Typography variant="body">Left content</Typography>
      <Divider orientation="vertical" />
      <Typography variant="body">Right content</Typography>
    </div>
  ),
}

// Variants
export const Full: Story = {
  args: {
    variant: "full",
  },
}

export const Inset: Story = {
  args: {
    variant: "inset",
  },
}

export const Middle: Story = {
  args: {
    variant: "middle",
  },
}

// Thickness
export const Thin: Story = {
  args: {
    thickness: "thin",
  },
}

export const Medium: Story = {
  args: {
    thickness: "medium",
  },
}

export const Thick: Story = {
  args: {
    thickness: "thick",
  },
}

// Colors
export const DefaultColor: Story = {
  args: {
    color: "default",
  },
}

export const Light: Story = {
  args: {
    color: "light",
  },
}

export const Dark: Story = {
  args: {
    color: "dark",
  },
}

// Usage examples
export const InList: Story = {
  render: () => (
    <div className="max-w-sm space-y-0">
      <div className="p-4">
        <Typography variant="body">First item</Typography>
      </div>
      <Divider variant="inset" />
      <div className="p-4">
        <Typography variant="body">Second item</Typography>
      </div>
      <Divider variant="inset" />
      <div className="p-4">
        <Typography variant="body">Third item</Typography>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Dividers used to separate list items.",
      },
    },
  },
}

export const InForm: Story = {
  render: () => (
    <div className="max-w-sm space-y-6">
      <div className="space-y-4">
        <Typography variant="headline">Sign In</Typography>
        <Button fullWidth>Sign in with Apple</Button>
        <Button fullWidth variant="secondary">
          Sign in with Google
        </Button>
      </div>

      <Divider>OR</Divider>

      <div className="space-y-4">
        <input type="email" placeholder="Email" className="w-full rounded-ios border p-3" />
        <input type="password" placeholder="Password" className="w-full rounded-ios border p-3" />
        <Button fullWidth>Sign In</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Divider used to separate different sign-in methods.",
      },
    },
  },
}

export const InContent: Story = {
  render: () => (
    <div className="max-w-md space-y-6">
      <div>
        <Typography variant="headline">Article Title</Typography>
        <Typography variant="body" color="secondary">
          This is the introduction paragraph of the article that provides context and sets up the main content.
        </Typography>
      </div>

      <Divider />

      <div>
        <Typography variant="body">
          This is the main content section that contains the detailed information and primary message of the article.
        </Typography>
      </div>

      <Divider thickness="medium" />

      <div>
        <Typography variant="subhead">Related Articles</Typography>
        <Typography variant="footnote" color="tertiary">
          Check out these related topics for more information.
        </Typography>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Dividers used to separate content sections.",
      },
    },
  },
}

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="space-y-4">
        <Typography variant="subhead">Horizontal Variants</Typography>
        <div className="space-y-4">
          <div>
            <Typography variant="caption1" color="tertiary" className="mb-2">
              Full
            </Typography>
            <Divider variant="full" />
          </div>
          <div>
            <Typography variant="caption1" color="tertiary" className="mb-2">
              Inset
            </Typography>
            <Divider variant="inset" />
          </div>
          <div>
            <Typography variant="caption1" color="tertiary" className="mb-2">
              Middle
            </Typography>
            <Divider variant="middle" />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="subhead">With Content</Typography>
        <div className="space-y-4">
          <Divider>Text Content</Divider>
          <Divider thickness="medium">Medium Thickness</Divider>
          <Divider color="dark">Dark Color</Divider>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All divider variants and styles displayed together.",
      },
    },
  },
}
