import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { Button } from "../src/Button"
import { ProgressBar } from "../src/ProgressBar"
import { Typography } from "../src/Typography"

const meta = {
  title: "Components/ProgressBar",
  component: ProgressBar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "iOS-inspired progress bar component for showing task completion, loading states, and progress indicators.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description: "Progress value (0-100)",
    },
    max: {
      control: { type: "number", min: 1 },
      description: "Maximum value",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Progress bar size",
    },
    color: {
      control: "select",
      options: ["blue", "green", "orange", "red", "purple"],
      description: "Progress bar color",
    },
    showLabel: {
      control: "boolean",
      description: "Show percentage label",
    },
    indeterminate: {
      control: "boolean",
      description: "Indeterminate progress",
    },
    label: {
      control: "text",
      description: "Custom label",
    },
  },
  args: {
    value: 65,
  },
} satisfies Meta<typeof ProgressBar>

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
    label: "Downloading...",
    value: 45,
  },
}

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    label: "Loading...",
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

// Progress states
export const Empty: Story = {
  args: {
    value: 0,
    showLabel: true,
  },
}

export const Quarter: Story = {
  args: {
    value: 25,
    showLabel: true,
  },
}

export const Half: Story = {
  args: {
    value: 50,
    showLabel: true,
  },
}

export const ThreeQuarters: Story = {
  args: {
    value: 75,
    showLabel: true,
  },
}

export const Complete: Story = {
  args: {
    value: 100,
    showLabel: true,
    color: "green",
  },
}

// All sizes showcase
export const AllSizes: Story = {
  render: () => (
    <div className="w-80 space-y-6">
      <div>
        <Typography variant="subhead" className="mb-2">
          Small
        </Typography>
        <ProgressBar size="small" value={65} showLabel />
      </div>
      <div>
        <Typography variant="subhead" className="mb-2">
          Medium
        </Typography>
        <ProgressBar size="medium" value={65} showLabel />
      </div>
      <div>
        <Typography variant="subhead" className="mb-2">
          Large
        </Typography>
        <ProgressBar size="large" value={65} showLabel />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All progress bar sizes displayed together.",
      },
    },
  },
}

// All colors showcase
export const AllColors: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <ProgressBar color="blue" value={65} label="Blue Progress" />
      <ProgressBar color="green" value={65} label="Green Progress" />
      <ProgressBar color="orange" value={65} label="Orange Progress" />
      <ProgressBar color="red" value={65} label="Red Progress" />
      <ProgressBar color="purple" value={65} label="Purple Progress" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All progress bar colors displayed together.",
      },
    },
  },
}

// Usage examples
export const DownloadProgress: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <Typography variant="headline">File Downloads</Typography>

      <div className="space-y-3">
        <ProgressBar value={100} color="green" label="document.pdf" showLabel />
        <ProgressBar value={75} color="blue" label="image.jpg" showLabel />
        <ProgressBar value={45} color="orange" label="video.mp4" showLabel />
        <ProgressBar indeterminate color="blue" label="archive.zip" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Example download progress interface.",
      },
    },
  },
}

export const TaskProgress: Story = {
  render: () => (
    <div className="w-80 space-y-6">
      <Typography variant="headline">Project Tasks</Typography>

      <div className="space-y-4">
        <div>
          <Typography variant="body">Design Phase</Typography>
          <ProgressBar value={100} color="green" showLabel size="small" />
        </div>

        <div>
          <Typography variant="body">Development</Typography>
          <ProgressBar value={68} color="blue" showLabel size="small" />
        </div>

        <div>
          <Typography variant="body">Testing</Typography>
          <ProgressBar value={25} color="orange" showLabel size="small" />
        </div>

        <div>
          <Typography variant="body">Deployment</Typography>
          <ProgressBar value={0} color="red" showLabel size="small" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Example task progress tracking interface.",
      },
    },
  },
}

// Interactive example
export const InteractiveExample: Story = {
  render: () => {
    const [progress, setProgress] = React.useState(0)
    const [isRunning, setIsRunning] = React.useState(false)

    React.useEffect(() => {
      if (!isRunning) return

      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsRunning(false)
            return 100
          }
          return prev + 1
        })
      }, 50)

      return () => clearInterval(interval)
    }, [isRunning])

    const handleStart = () => {
      setIsRunning(true)
    }

    const handleReset = () => {
      setProgress(0)
      setIsRunning(false)
    }

    const handlePause = () => {
      setIsRunning(false)
    }

    return (
      <div className="w-80 space-y-6">
        <Typography variant="headline">Interactive Progress</Typography>

        <ProgressBar value={progress} color={progress === 100 ? "green" : "blue"} showLabel />

        <div className="flex gap-2">
          <Button size="small" onClick={handleStart} disabled={isRunning || progress === 100}>
            Start
          </Button>
          <Button size="small" variant="secondary" onClick={handlePause} disabled={!isRunning}>
            Pause
          </Button>
          <Button size="small" variant="ghost" onClick={handleReset}>
            Reset
          </Button>
        </div>

        <Typography variant="footnote" color="secondary">
          Status: {progress === 100 ? "Complete" : isRunning ? "Running" : "Paused"}
        </Typography>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive example with start, pause, and reset controls.",
      },
    },
  },
}
