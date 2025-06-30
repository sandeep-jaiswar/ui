import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { Radio } from "../src/Radio"
import { RadioGroup } from "../src/RadioGroup"
import { Typography } from "../src/Typography"

// Mock function for onChange handlers
const fn = () => {}

const meta = {
  title: "Form Controls/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "iOS-inspired radio component following Apple's design patterns. Use RadioGroup for managing multiple radio buttons.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "text",
      description: "Radio value",
    },
    checked: {
      control: "boolean",
      description: "Is the radio checked?",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Radio size",
    },
    color: {
      control: "select",
      options: ["blue", "green", "orange", "red", "purple"],
      description: "Radio color when checked",
    },
    disabled: {
      control: "boolean",
      description: "Disable the radio",
    },
    label: {
      control: "text",
      description: "Radio label",
    },
    labelPosition: {
      control: "select",
      options: ["left", "right"],
      description: "Label position",
    },
  },
  args: {
    value: "option1",
    onChange: fn,
  },
} satisfies Meta<typeof Radio>

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
    label: "Select this option",
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Disabled radio",
  },
}

// Sizes
export const Small: Story = {
  args: {
    size: "small",
    label: "Small radio",
  },
}

export const Medium: Story = {
  args: {
    size: "medium",
    label: "Medium radio",
  },
}

export const Large: Story = {
  args: {
    size: "large",
    label: "Large radio",
  },
}

// Colors
export const Blue: Story = {
  args: {
    checked: true,
    color: "blue",
    label: "Blue radio",
  },
}

export const Green: Story = {
  args: {
    checked: true,
    color: "green",
    label: "Green radio",
  },
}

export const Orange: Story = {
  args: {
    checked: true,
    color: "orange",
    label: "Orange radio",
  },
}

export const Red: Story = {
  args: {
    checked: true,
    color: "red",
    label: "Red radio",
  },
}

export const Purple: Story = {
  args: {
    checked: true,
    color: "purple",
    label: "Purple radio",
  },
}

// Radio Group examples
export const RadioGroupVertical: Story = {
  render: () => (
    <RadioGroup
      name="vertical-group"
      defaultValue="option2"
      options={[
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
      ]}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: "Radio group with vertical layout.",
      },
    },
  },
}

export const RadioGroupHorizontal: Story = {
  render: () => (
    <RadioGroup
      name="horizontal-group"
      direction="horizontal"
      defaultValue="medium"
      options={[
        { value: "small", label: "Small" },
        { value: "medium", label: "Medium" },
        { value: "large", label: "Large" },
      ]}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: "Radio group with horizontal layout.",
      },
    },
  },
}

// Form example
export const FormExample: Story = {
  render: () => (
    <div className="max-w-sm space-y-8">
      <Typography variant="headline">Survey Form</Typography>

      <div className="space-y-4">
        <Typography variant="subhead">How satisfied are you with our service?</Typography>
        <RadioGroup
          name="satisfaction"
          options={[
            { value: "very-satisfied", label: "Very Satisfied" },
            { value: "satisfied", label: "Satisfied" },
            { value: "neutral", label: "Neutral" },
            { value: "dissatisfied", label: "Dissatisfied" },
            { value: "very-dissatisfied", label: "Very Dissatisfied" },
          ]}
          color="green"
        />
      </div>

      <div className="space-y-4">
        <Typography variant="subhead">How did you hear about us?</Typography>
        <RadioGroup
          name="source"
          options={[
            { value: "search", label: "Search Engine" },
            { value: "social", label: "Social Media" },
            { value: "friend", label: "Friend/Family" },
            { value: "ad", label: "Advertisement" },
            { value: "other", label: "Other" },
          ]}
          color="blue"
        />
      </div>

      <div className="space-y-4">
        <Typography variant="subhead">Preferred contact method</Typography>
        <RadioGroup
          name="contact"
          direction="horizontal"
          options={[
            { value: "email", label: "Email" },
            { value: "phone", label: "Phone" },
            { value: "sms", label: "SMS" },
          ]}
          color="orange"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Example survey form with multiple radio groups.",
      },
    },
  },
}

// Interactive example
export const InteractiveExample: Story = {
  render: () => {
    const [formData, setFormData] = React.useState({
      plan: "basic",
      billing: "monthly",
      support: "email",
    })

    return (
      <div className="max-w-md space-y-8">
        <Typography variant="headline">Choose Your Plan</Typography>

        <div className="space-y-4">
          <Typography variant="subhead">Select Plan</Typography>
          <RadioGroup
            name="plan"
            value={formData.plan}
            onChange={(value) => setFormData((prev) => ({ ...prev, plan: value }))}
            options={[
              { value: "basic", label: "Basic - $9/month" },
              { value: "pro", label: "Pro - $19/month" },
              { value: "enterprise", label: "Enterprise - $49/month" },
            ]}
            color="blue"
          />
        </div>

        <div className="space-y-4">
          <Typography variant="subhead">Billing Cycle</Typography>
          <RadioGroup
            name="billing"
            value={formData.billing}
            onChange={(value) => setFormData((prev) => ({ ...prev, billing: value }))}
            direction="horizontal"
            options={[
              { value: "monthly", label: "Monthly" },
              { value: "yearly", label: "Yearly (Save 20%)" },
            ]}
            color="green"
          />
        </div>

        <div className="space-y-4">
          <Typography variant="subhead">Support Level</Typography>
          <RadioGroup
            name="support"
            value={formData.support}
            onChange={(value) => setFormData((prev) => ({ ...prev, support: value }))}
            options={[
              { value: "email", label: "Email Support" },
              { value: "chat", label: "Live Chat" },
              { value: "phone", label: "Phone Support" },
            ]}
            color="purple"
          />
        </div>

        <div className="mt-8 rounded-ios bg-fill-quaternary p-4 dark:bg-fill-quaternary-dark">
          <Typography variant="subhead">Selected Options:</Typography>
          <Typography variant="footnote" color="secondary">
            Plan: {formData.plan}
            <br />
            Billing: {formData.billing}
            <br />
            Support: {formData.support}
          </Typography>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive example showing controlled radio groups with form state.",
      },
    },
  },
}
