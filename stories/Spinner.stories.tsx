import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { Button } from "../src/Button"
import { Card } from "../src/Card"
import { Spinner } from "../src/Spinner"
import { Typography } from "../src/Typography"

const meta = {
  title: "Components/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "iOS-inspired spinner component for loading states and progress indicators.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Spinner size",
    },
    color: {
      control: "select",
      options: ["blue", "green", "orange", "red", "purple", "gray"],
      description: "Spinner color",
    },
    showLabel: {
      control: "boolean",
      description: "Show loading label",
    },
    label: {
      control: "text",
      description: "Custom loading text",
    },
  },
  args: {},
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

// Basic variants
export const Default: Story = {
  args: {},
}

export const WithLabel: Story = {
  args: {
    showLabel: true,
  },
}

export const CustomLabel: Story = {
  args: {
    showLabel: true,
    label: "Please wait...",
  },
}

// Sizes
export const Small: Story = {
  args: {
    size: "small",
    showLabel: true,
  },
}

export const Medium: Story = {
  args: {
    size: "medium",
    showLabel: true,
  },
}

export const Large: Story = {
  args: {
    size: "large",
    showLabel: true,
  },
}

// Colors
export const Blue: Story = {
  args: {
    color: "blue",
    showLabel: true,
  },
}

export const Green: Story = {
  args: {
    color: "green",
    showLabel: true,
  },
}

export const Orange: Story = {
  args: {
    color: "orange",
    showLabel: true,
  },
}

export const Red: Story = {
  args: {
    color: "red",
    showLabel: true,
  },
}

export const Purple: Story = {
  args: {
    color: "purple",
    showLabel: true,
  },
}

export const Gray: Story = {
  args: {
    color: "gray",
    showLabel: true,
  },
}

// All sizes showcase
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <div className="text-center">
        <Spinner size="small" />
        <Typography variant="caption2" className="mt-2">
          Small
        </Typography>
      </div>
      <div className="text-center">
        <Spinner size="medium" />
        <Typography variant="caption2" className="mt-2">
          Medium
        </Typography>
      </div>
      <div className="text-center">
        <Spinner size="large" />
        <Typography variant="caption2" className="mt-2">
          Large
        </Typography>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All spinner sizes displayed together.",
      },
    },
  },
}

// All colors showcase
export const AllColors: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-6">
      <div className="text-center">
        <Spinner color="blue" />
        <Typography variant="caption2" className="mt-2">
          Blue
        </Typography>
      </div>
      <div className="text-center">
        <Spinner color="green" />
        <Typography variant="caption2" className="mt-2">
          Green
        </Typography>
      </div>
      <div className="text-center">
        <Spinner color="orange" />
        <Typography variant="caption2" className="mt-2">
          Orange
        </Typography>
      </div>
      <div className="text-center">
        <Spinner color="red" />
        <Typography variant="caption2" className="mt-2">
          Red
        </Typography>
      </div>
      <div className="text-center">
        <Spinner color="purple" />
        <Typography variant="caption2" className="mt-2">
          Purple
        </Typography>
      </div>
      <div className="text-center">
        <Spinner color="gray" />
        <Typography variant="caption2" className="mt-2">
          Gray
        </Typography>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All spinner colors displayed together.",
      },
    },
  },
}

// Usage examples
export const InButton: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button disabled>
        <Spinner size="small" color="gray" />
        <span className="ml-2">Loading...</span>
      </Button>
      <Button variant="secondary" disabled>
        <Spinner size="small" />
        <span className="ml-2">Saving...</span>
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Spinners used inside buttons for loading states.",
      },
    },
  },
}

export const InCard: Story = {
  render: () => (
    <Card className="w-80 text-center">
      <div className="py-8">
        <Spinner size="large" showLabel label="Loading content..." />
      </div>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "Spinner used in a card for content loading.",
      },
    },
  },
}

export const LoadingStates: Story = {
  render: () => (
    <div className="w-80 space-y-6">
      <Typography variant="headline">Loading States</Typography>

      <div className="space-y-4">
        <div className="flex items-center gap-3 rounded-ios bg-fill-quaternary p-3 dark:bg-fill-quaternary-dark">
          <Spinner size="small" />
          <Typography variant="body">Fetching data...</Typography>
        </div>

        <div className="flex items-center gap-3 rounded-ios bg-fill-quaternary p-3 dark:bg-fill-quaternary-dark">
          <Spinner size="small" color="green" />
          <Typography variant="body">Uploading file...</Typography>
        </div>

        <div className="flex items-center gap-3 rounded-ios bg-fill-quaternary p-3 dark:bg-fill-quaternary-dark">
          <Spinner size="small" color="orange" />
          <Typography variant="body">Processing...</Typography>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Various loading states with different contexts.",
      },
    },
  },
}

// Interactive example
export const InteractiveExample: Story = {
  render: () => {
    const [isLoading, setIsLoading] = React.useState(false)
    const [loadingType, setLoadingType] = React.useState<"save" | "delete" | "upload">("save")

    const handleAction = (type: "save" | "delete" | "upload") => {
      setLoadingType(type)
      setIsLoading(true)

      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    }

    const getSpinnerColor = () => {
      switch (loadingType) {
        case "save":
          return "blue"
        case "delete":
          return "red"
        case "upload":
          return "green"
        default:
          return "blue"
      }
    }

    const getLoadingText = () => {
      switch (loadingType) {
        case "save":
          return "Saving..."
        case "delete":
          return "Deleting..."
        case "upload":
          return "Uploading..."
        default:
          return "Loading..."
      }
    }

    return (
      <div className="w-80 space-y-6">
        <Typography variant="headline">Interactive Loading</Typography>

        {isLoading ? (
          <Card className="py-8 text-center">
            <Spinner size="large" color={getSpinnerColor()} showLabel label={getLoadingText()} />
          </Card>
        ) : (
          <div className="space-y-3">
            <Button fullWidth onClick={() => handleAction("save")}>
              Save Document
            </Button>
            <Button fullWidth variant="destructive" onClick={() => handleAction("delete")}>
              Delete Item
            </Button>
            <Button fullWidth variant="secondary" onClick={() => handleAction("upload")}>
              Upload File
            </Button>
          </div>
        )}
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive example showing different loading scenarios.",
      },
    },
  },
}
