import type React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./index"

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Buttons encode user intent (priority/risk/outcome) and visual treatment (variant).\n\n" +
          "Guardrails:\n" +
          "- Prefer a single `intent=\"primary\"` per hierarchy level.\n" +
          "- Avoid default focus for `intent=\"danger\"` (don’t use `autoFocus`).\n" +
          "- Icon-only buttons must include `aria-label` (or `aria-labelledby`) and should include a `title` tooltip.",
      },
    },
  },
  argTypes: {
    intent: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary", "danger", "success", "warning"],
      description: "Meaning-driven intent (priority/risk/outcome).",
      table: {
        type: { summary: "primary | secondary | tertiary | danger | success | warning" },
        defaultValue: { summary: "primary" },
      },
    },
    variant: {
      control: { type: "select" },
      options: ["solid", "outline", "ghost", "link"],
      description: "Visual treatment orthogonal to intent.",
      table: {
        type: { summary: "solid | outline | ghost | link" },
        defaultValue: { summary: "solid" },
      },
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Density control.",
      table: {
        type: { summary: "xs | sm | md | lg | xl" },
        defaultValue: { summary: "md" },
      },
    },
    shape: {
      control: { type: "select" },
      options: ["rounded", "pill", "square"],
      description: "Shape control.",
      table: {
        type: { summary: "rounded | pill | square" },
        defaultValue: { summary: "rounded" },
      },
    },
    loading: {
      control: { type: "boolean" },
      description: "Shows a spinner; disables interaction; preserves width.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    leadingIcon: {
      control: false,
      description: "Optional leading icon ReactNode.",
      table: { type: { summary: "ReactNode" } },
    },
    trailingIcon: {
      control: false,
      description: "Optional trailing icon ReactNode.",
      table: { type: { summary: "ReactNode" } },
    },
    className: {
      control: { type: "text" },
      description: "Optional Tailwind class overrides (appended).",
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

const Row = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>{children}</div>
)

const Stack = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: "grid", gap: 12 }}>{children}</div>
)

const Icon = ({ label }: { label: string }) => (
  <span aria-hidden="true" style={{ display: "inline-flex", width: 16, justifyContent: "center" }}>
    {label}
  </span>
)

export const Primary: Story = {
  args: {
    children: "Primary Button",
    intent: "primary",
    variant: "solid",
  },
}

export const Secondary: Story = {
  args: {
    children: "Secondary",
    intent: "secondary",
    variant: "outline",
  },
}

export const WithOnClick: Story = {
  args: {
    children: "Click Me",
    onClick: () => alert("clicked"),
  },
}

export const IntentMatrix: Story = {
  name: "Intent × Variant",
  parameters: {
    docs: {
      description: {
        story: "Canonical matrix: intent (meaning) × variant (visual treatment).",
      },
    },
  },
  render: (args) => {
    const intents = ["primary", "secondary", "tertiary", "danger", "success", "warning"] as const
    const variants = ["solid", "outline", "ghost", "link"] as const

    return (
      <Stack>
        {variants.map((variant) => (
          <div key={variant}>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>{variant}</div>
            <Row>
              {intents.map((intent) => (
                <Button key={`${variant}-${intent}`} {...args} intent={intent} variant={variant}>
                  {intent}
                </Button>
              ))}
            </Row>
          </div>
        ))}
      </Stack>
    )
  },
}

export const Sizes: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Size variants control density. UX rule: don’t mix sizes within the same action group.",
      },
    },
  },
  render: (args) => {
    const sizes = ["xs", "sm", "md", "lg", "xl"] as const
    return (
      <Row>
        {sizes.map((size) => (
          <Button key={size} {...args} size={size}>
            {size}
          </Button>
        ))}
      </Row>
    )
  },
}

export const Shapes: Story = {
  parameters: {
    docs: {
      description: {
        story: "Shape variants are intentionally minimal: rounded (default), pill, square (icon-only).",
      },
    },
  },
  render: (args) => (
    <Row>
      <Button {...args} shape="rounded">
        Rounded
      </Button>
      <Button {...args} shape="pill">
        Pill
      </Button>
      <Button {...args} shape="square" aria-label="Settings" title="Settings" leadingIcon={<Icon label="⚙" />} />
    </Row>
  ),
}

export const States: Story = {
  parameters: {
    docs: {
      description: {
        story: "Mandatory states: default, hover/active/focus-visible, disabled, loading.",
      },
    },
  },
  render: (args) => (
    <Row>
      <Button {...args}>Default</Button>
      <Button {...args} disabled>
        Disabled
      </Button>
      <Button {...args} loading>
        Loading
      </Button>
    </Row>
  ),
}

export const Icons: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Content variants: leading icon, trailing icon, and icon-only (requires aria-label + recommended title tooltip).",
      },
    },
  },
  render: (args) => (
    <Row>
      <Button {...args} leadingIcon={<Icon label="←" />}>
        Back
      </Button>
      <Button {...args} trailingIcon={<Icon label="→" />}>
        Continue
      </Button>
      <Button
        {...args}
        shape="square"
        aria-label="Open menu"
        title="Open menu"
        leadingIcon={<Icon label="≡" />}
      />
    </Row>
  ),
}
