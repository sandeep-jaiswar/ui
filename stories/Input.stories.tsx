import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { Input } from "../src/Input"
import { Typography } from "../src/Typography"

// Mock function for onChange handlers
const fn = () => {}

// Icons for demonstration
const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
  </svg>
)

const EyeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
  </svg>
)

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "iOS-inspired input component with various styles, states, and features. Supports icons, validation, and different variants.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["filled", "outlined", "plain"],
      description: "Input variant",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Input size",
    },
    state: {
      control: "select",
      options: ["default", "error", "success"],
      description: "Input state",
    },
    disabled: {
      control: "boolean",
      description: "Disable the input",
    },
    clearable: {
      control: "boolean",
      description: "Show clear button when input has value",
    },
    fullWidth: {
      control: "boolean",
      description: "Make input full width",
    },
    label: {
      control: "text",
      description: "Input label",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
    helperText: {
      control: "text",
      description: "Helper text",
    },
    errorText: {
      control: "text",
      description: "Error text",
    },
  },
  args: {
    onChange: fn,
    placeholder: "Enter text...",
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

// Basic variants
export const Filled: Story = {
  args: {
    variant: "filled",
  },
}

export const Outlined: Story = {
  args: {
    variant: "outlined",
  },
}

export const Plain: Story = {
  args: {
    variant: "plain",
  },
}

// Sizes
export const Small: Story = {
  args: {
    size: "small",
  },
}

export const Medium: Story = {
  args: {
    size: "medium",
  },
}

export const Large: Story = {
  args: {
    size: "large",
  },
}

// States
export const Default: Story = {
  args: {
    state: "default",
  },
}

export const Error: Story = {
  args: {
    state: "error",
    errorText: "This field is required",
  },
}

export const Success: Story = {
  args: {
    state: "success",
    helperText: "Looks good!",
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "Disabled input",
  },
}

// With labels and helper text
export const WithLabel: Story = {
  args: {
    label: "Email Address",
    placeholder: "Enter your email",
  },
}

export const WithHelperText: Story = {
  args: {
    label: "Username",
    placeholder: "Enter username",
    helperText: "Must be at least 3 characters long",
  },
}

export const WithErrorText: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    state: "error",
    errorText: "Password must be at least 8 characters",
  },
}

// With icons
export const WithStartIcon: Story = {
  args: {
    startIcon: <SearchIcon />,
    placeholder: "Search...",
  },
}

export const WithEndIcon: Story = {
  args: {
    endIcon: <EyeIcon />,
    placeholder: "Enter password",
    type: "password",
  },
}

export const WithBothIcons: Story = {
  args: {
    startIcon: <SearchIcon />,
    endIcon: <EyeIcon />,
    placeholder: "Search with visibility",
  },
}

// Clearable
export const Clearable: Story = {
  args: {
    clearable: true,
    value: "Clear me",
    placeholder: "Type something...",
  },
}

// Full width
export const FullWidth: Story = {
  args: {
    fullWidth: true,
    label: "Full Width Input",
  },
  parameters: {
    layout: "padded",
  },
}

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <Input variant="filled" placeholder="Filled variant" />
      <Input variant="outlined" placeholder="Outlined variant" />
      <Input variant="plain" placeholder="Plain variant" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All input variants displayed together.",
      },
    },
  },
}

// All sizes showcase
export const AllSizes: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <Input size="small" placeholder="Small input" />
      <Input size="medium" placeholder="Medium input" />
      <Input size="large" placeholder="Large input" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All input sizes displayed together.",
      },
    },
  },
}

// Form example
export const FormExample: Story = {
  render: () => (
    <div className="w-80 space-y-6">
      <Typography variant="headline">Contact Form</Typography>

      <Input label="First Name" placeholder="Enter your first name" required />

      <Input label="Last Name" placeholder="Enter your last name" required />

      <Input label="Email" type="email" placeholder="Enter your email" startIcon={<SearchIcon />} required />

      <Input label="Phone" type="tel" placeholder="Enter your phone number" helperText="Include country code" />

      <Input label="Message" placeholder="Enter your message" helperText="Optional message" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Example contact form using various input configurations.",
      },
    },
  },
}

// Interactive example
export const InteractiveExample: Story = {
  render: () => {
    const [formData, setFormData] = React.useState({
      username: "",
      email: "",
      password: "",
    })

    const [errors, setErrors] = React.useState<Record<string, string>>({})

    const validateField = (name: string, value: string) => {
      const newErrors = { ...errors }

      switch (name) {
        case "username":
          if (value.length < 3) {
            newErrors.username = "Username must be at least 3 characters"
          } else {
            delete newErrors.username
          }
          break
        case "email":
          if (!/\S+@\S+\.\S+/.test(value)) {
            newErrors.email = "Please enter a valid email"
          } else {
            delete newErrors.email
          }
          break
        case "password":
          if (value.length < 8) {
            newErrors.password = "Password must be at least 8 characters"
          } else {
            delete newErrors.password
          }
          break
      }

      setErrors(newErrors)
    }

    const handleChange = (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      setFormData((prev) => ({ ...prev, [name]: value }))
      validateField(name, value)
    }

    return (
      <div className="w-80 space-y-6">
        <Typography variant="headline">Sign Up Form</Typography>

        <Input
          label="Username"
          placeholder="Enter username"
          value={formData.username}
          onChange={handleChange("username")}
          state={errors.username ? "error" : formData.username.length >= 3 ? "success" : "default"}
          errorText={errors.username}
          clearable
        />

        <Input
          label="Email"
          type="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange("email")}
          state={errors.email ? "error" : formData.email && !errors.email ? "success" : "default"}
          errorText={errors.email}
          clearable
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange("password")}
          state={errors.password ? "error" : formData.password.length >= 8 ? "success" : "default"}
          errorText={errors.password}
          endIcon={<EyeIcon />}
        />

        <div className="mt-6 rounded-ios bg-fill-quaternary p-4 dark:bg-fill-quaternary-dark">
          <Typography variant="subhead">Form Data:</Typography>
          <Typography variant="footnote" color="secondary">
            Valid:{" "}
            {Object.keys(errors).length === 0 && Object.values(formData).every((v) => v.length > 0) ? "Yes" : "No"}
          </Typography>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive form example with validation and state management.",
      },
    },
  },
}
