import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { Switch } from "../src/Switch"
import { Typography } from "../src/Typography"

const fn = () => {}

const meta = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "iOS-inspired switch component following Apple's toggle design. Perfect for boolean settings and preferences.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
      description: "Is the switch checked?",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Switch size",
    },
    color: {
      control: "select",
      options: ["green", "blue", "orange", "red", "purple"],
      description: "Switch color when checked",
    },
    disabled: {
      control: "boolean",
      description: "Disable the switch",
    },
    label: {
      control: "text",
      description: "Switch label",
    },
    labelPosition: {
      control: "select",
      options: ["left", "right"],
      description: "Label position",
    },
  },
  args: {
    onChange: fn,
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

// Basic variants
export const Default: Story = {
  args: {},
}

export const Checked: Story = {
  args: {
    checked: true,
  },
}

export const WithLabel: Story = {
  args: {
    label: "Enable notifications",
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Disabled switch",
  },
}

// Sizes
export const Small: Story = {
  args: {
    size: "small",
    label: "Small switch",
  },
}

export const Medium: Story = {
  args: {
    size: "medium",
    label: "Medium switch",
  },
}

export const Large: Story = {
  args: {
    size: "large",
    label: "Large switch",
  },
}

// Colors
export const Green: Story = {
  args: {
    checked: true,
    color: "green",
    label: "Green switch",
  },
}

export const Blue: Story = {
  args: {
    checked: true,
    color: "blue",
    label: "Blue switch",
  },
}

export const Orange: Story = {
  args: {
    checked: true,
    color: "orange",
    label: "Orange switch",
  },
}

export const Red: Story = {
  args: {
    checked: true,
    color: "red",
    label: "Red switch",
  },
}

export const Purple: Story = {
  args: {
    checked: true,
    color: "purple",
    label: "Purple switch",
  },
}

// Label positions
export const LabelLeft: Story = {
  args: {
    label: "Label on left",
    labelPosition: "left",
  },
}

export const LabelRight: Story = {
  args: {
    label: "Label on right",
    labelPosition: "right",
  },
}

// All sizes showcase
export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Switch size="small" label="Small" />
      <Switch size="medium" label="Medium" />
      <Switch size="large" label="Large" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All switch sizes displayed together.",
      },
    },
  },
}

// All colors showcase
export const AllColors: Story = {
  render: () => (
    <div className="space-y-4">
      <Switch checked color="green" label="Green" />
      <Switch checked color="blue" label="Blue" />
      <Switch checked color="orange" label="Orange" />
      <Switch checked color="red" label="Red" />
      <Switch checked color="purple" label="Purple" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All switch colors displayed together.",
      },
    },
  },
}

// Settings panel example
export const SettingsPanel: Story = {
  render: () => (
    <div className="max-w-sm space-y-6 rounded-ios-lg bg-background-secondary p-6 dark:bg-background-secondary-dark">
      <Typography variant="headline">Settings</Typography>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <Typography variant="body">Push Notifications</Typography>
            <Typography variant="footnote" color="secondary">
              Receive notifications on your device
            </Typography>
          </div>
          <Switch defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <Typography variant="body">Dark Mode</Typography>
            <Typography variant="footnote" color="secondary">
              Use dark appearance
            </Typography>
          </div>
          <Switch color="blue" />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <Typography variant="body">Location Services</Typography>
            <Typography variant="footnote" color="secondary">
              Allow location access
            </Typography>
          </div>
          <Switch color="orange" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <Typography variant="body">Analytics</Typography>
            <Typography variant="footnote" color="secondary">
              Share usage data
            </Typography>
          </div>
          <Switch disabled />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Example settings panel with various switch configurations.",
      },
    },
  },
}

// Interactive example
export const InteractiveExample: Story = {
  render: () => {
    const [settings, setSettings] = React.useState({
      notifications: true,
      darkMode: false,
      location: true,
      analytics: false,
    })

    return (
      <div className="max-w-md space-y-6">
        <Typography variant="headline">Interactive Settings</Typography>

        <div className="space-y-4">
          <Switch
            checked={settings.notifications}
            onChange={(checked) => setSettings((prev) => ({ ...prev, notifications: checked }))}
            label="Push Notifications"
            color="green"
          />

          <Switch
            checked={settings.darkMode}
            onChange={(checked) => setSettings((prev) => ({ ...prev, darkMode: checked }))}
            label="Dark Mode"
            color="blue"
          />

          <Switch
            checked={settings.location}
            onChange={(checked) => setSettings((prev) => ({ ...prev, location: checked }))}
            label="Location Services"
            color="orange"
          />

          <Switch
            checked={settings.analytics}
            onChange={(checked) => setSettings((prev) => ({ ...prev, analytics: checked }))}
            label="Analytics"
            color="purple"
          />
        </div>

        <div className="mt-6 rounded-ios bg-fill-quaternary p-4 dark:bg-fill-quaternary-dark">
          <Typography variant="subhead">Current Settings:</Typography>
          <Typography variant="footnote" color="secondary">
            {JSON.stringify(settings, null, 2)}
          </Typography>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive example showing switch state management.",
      },
    },
  },
}
