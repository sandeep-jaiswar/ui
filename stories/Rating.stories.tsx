import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { Rating } from "../src/Rating"

const meta = {
  title: "Advanced/Rating",
  component: Rating,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "iOS-inspired rating component with star ratings.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Rating>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithValue: Story = {
  args: {
    value: 3.5,
    allowHalf: true,
    showValue: true,
  },
}

export const ReadOnly: Story = {
  args: {
    value: 4,
    readOnly: true,
    showValue: true,
  },
}

export const Colors: Story = {
  render: () => (
    <div className="space-y-4">
      <Rating value={4} color="yellow" showValue />
      <Rating value={4} color="red" showValue />
      <Rating value={4} color="blue" showValue />
      <Rating value={4} color="green" showValue />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Rating value={4} size="small" showValue />
      <Rating value={4} size="medium" showValue />
      <Rating value={4} size="large" showValue />
    </div>
  ),
}

export const Interactive: Story = {
  render: () => {
    const [rating, setRating] = React.useState(0)

    return (
      <div className="space-y-4 text-center">
        <h3 className="text-lg font-semibold">Rate this product</h3>

        <Rating value={rating} onChange={setRating} allowHalf showValue size="large" />

        <p className="text-sm text-label-secondary">
          {rating === 0 && "Click to rate"}
          {rating > 0 && rating <= 2 && "Poor"}
          {rating > 2 && rating <= 3 && "Fair"}
          {rating > 3 && rating <= 4 && "Good"}
          {rating > 4 && "Excellent"}
        </p>
      </div>
    )
  },
}
