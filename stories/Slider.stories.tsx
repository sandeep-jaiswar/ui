import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { Slider } from "../src/Slider"
import { Typography } from "../src/Typography"

// Mock function for onChange handlers
const fn = () => {}

const meta = {
  title: "Form Controls/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "iOS-inspired slider component for selecting numeric values within a range. Perfect for settings, filters, and value selection.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description: "Slider value",
    },
    min: {
      control: { type: "number" },
      description: "Minimum value",
    },
    max: {
      control: { type: "number" },
      description: "Maximum value",
    },
    step: {
      control: { type: "number", min: 0.1, step: 0.1 },
      description: "Step increment",
    },
    disabled: {
      control: "boolean",
      description: "Disable the slider",
    },
    color: {
      control: "select",
      options: ["blue", "green", "orange", "red", "purple"],
      description: "Slider color",
    },
    showValue: {
      control: "boolean",
      description: "Show current value",
    },
    label: {
      control: "text",
      description: "Slider label",
    },
  },
  args: {
    onChange: fn,
    value: 50,
  },
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

// Basic variants
export const Default: Story = {
  args: {},
}

export const WithLabel: Story = {
  args: {
    label: "Volume",
    showValue: true,
  },
}

export const WithValue: Story = {
  args: {
    showValue: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Disabled slider",
  },
}

// Colors
export const Blue: Story = {
  args: {
    color: "blue",
    label: "Blue slider",
    showValue: true,
  },
}

export const Green: Story = {
  args: {
    color: "green",
    label: "Green slider",
    showValue: true,
  },
}

export const Orange: Story = {
  args: {
    color: "orange",
    label: "Orange slider",
    showValue: true,
  },
}

export const Red: Story = {
  args: {
    color: "red",
    label: "Red slider",
    showValue: true,
  },
}

export const Purple: Story = {
  args: {
    color: "purple",
    label: "Purple slider",
    showValue: true,
  },
}

// Custom ranges
export const CustomRange: Story = {
  args: {
    min: 10,
    max: 90,
    value: 50,
    label: "Custom range (10-90)",
    showValue: true,
  },
}

export const DecimalStep: Story = {
  args: {
    min: 0,
    max: 1,
    step: 0.1,
    value: 0.5,
    label: "Decimal step (0.1)",
    showValue: true,
    formatValue: (value) => value.toFixed(1),
  },
}

export const LargeRange: Story = {
  args: {
    min: 0,
    max: 1000,
    step: 10,
    value: 500,
    label: "Large range (0-1000)",
    showValue: true,
  },
}

// Formatted values
export const PercentageSlider: Story = {
  args: {
    min: 0,
    max: 100,
    value: 75,
    label: "Opacity",
    showValue: true,
    formatValue: (value) => `${value}%`,
  },
}

export const TemperatureSlider: Story = {
  args: {
    min: -10,
    max: 40,
    value: 22,
    label: "Temperature",
    showValue: true,
    formatValue: (value) => `${value}°C`,
    color: "orange",
  },
}

export const PriceSlider: Story = {
  args: {
    min: 0,
    max: 1000,
    step: 10,
    value: 250,
    label: "Price Range",
    showValue: true,
    formatValue: (value) => `$${value}`,
    color: "green",
  },
}

// All colors showcase
export const AllColors: Story = {
  render: () => (
    <div className="w-80 space-y-6">
      <Slider color="blue" value={20} label="Blue" showValue />
      <Slider color="green" value={40} label="Green" showValue />
      <Slider color="orange" value={60} label="Orange" showValue />
      <Slider color="red" value={80} label="Red" showValue />
      <Slider color="purple" value={100} label="Purple" showValue />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All slider colors displayed together.",
      },
    },
  },
}

// Settings panel example
export const SettingsPanel: Story = {
  render: () => (
    <div className="max-w-sm space-y-8">
      <Typography variant="headline">Audio Settings</Typography>

      <div className="space-y-6">
        <Slider label="Master Volume" value={75} showValue formatValue={(value) => `${value}%`} color="blue" />

        <Slider label="Music Volume" value={60} showValue formatValue={(value) => `${value}%`} color="green" />

        <Slider label="Effects Volume" value={80} showValue formatValue={(value) => `${value}%`} color="orange" />

        <Slider label="Voice Volume" value={90} showValue formatValue={(value) => `${value}%`} color="purple" />

        <Slider
          label="Bass"
          min={-10}
          max={10}
          value={2}
          showValue
          formatValue={(value) => (value > 0 ? `+${value}` : `${value}`)}
          color="red"
        />

        <Slider
          label="Treble"
          min={-10}
          max={10}
          value={-1}
          showValue
          formatValue={(value) => (value > 0 ? `+${value}` : `${value}`)}
          color="red"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Example audio settings panel with various slider configurations.",
      },
    },
  },
}

// Interactive example
export const InteractiveExample: Story = {
  render: () => {
    const [settings, setSettings] = React.useState({
      brightness: 75,
      contrast: 50,
      saturation: 60,
      temperature: 6500,
    })

    return (
      <div className="max-w-md space-y-8">
        <Typography variant="headline">Display Settings</Typography>

        <div className="space-y-6">
          <Slider
            label="Brightness"
            value={settings.brightness}
            onChange={(value) => setSettings((prev) => ({ ...prev, brightness: value }))}
            showValue
            formatValue={(value) => `${value}%`}
            color="blue"
          />

          <Slider
            label="Contrast"
            value={settings.contrast}
            onChange={(value) => setSettings((prev) => ({ ...prev, contrast: value }))}
            showValue
            formatValue={(value) => `${value}%`}
            color="green"
          />

          <Slider
            label="Saturation"
            value={settings.saturation}
            onChange={(value) => setSettings((prev) => ({ ...prev, saturation: value }))}
            showValue
            formatValue={(value) => `${value}%`}
            color="orange"
          />

          <Slider
            label="Color Temperature"
            min={2700}
            max={6500}
            step={100}
            value={settings.temperature}
            onChange={(value) => setSettings((prev) => ({ ...prev, temperature: value }))}
            showValue
            formatValue={(value) => `${value}K`}
            color="red"
          />
        </div>

        <div className="mt-8 rounded-ios bg-fill-quaternary p-4 dark:bg-fill-quaternary-dark">
          <Typography variant="subhead">Current Settings:</Typography>
          <div className="mt-2 space-y-1">
            <Typography variant="footnote" color="secondary">
              Brightness: {settings.brightness}%
            </Typography>
            <Typography variant="footnote" color="secondary">
              Contrast: {settings.contrast}%
            </Typography>
            <Typography variant="footnote" color="secondary">
              Saturation: {settings.saturation}%
            </Typography>
            <Typography variant="footnote" color="secondary">
              Temperature: {settings.temperature}K
            </Typography>
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive example showing real-time slider value updates.",
      },
    },
  },
}
