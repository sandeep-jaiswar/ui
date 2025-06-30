import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { FloatingActionButton } from "../src/FloatingActionButton"

const meta = {
  title: "Advanced/FloatingActionButton",
  component: FloatingActionButton,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "iOS-inspired floating action button component.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FloatingActionButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Positions: Story = {
  render: () => (
    <div className="relative h-96 bg-fill-quaternary dark:bg-fill-quaternary-dark">
      <FloatingActionButton position="top-left" icon="home" />
      <FloatingActionButton position="top-right" icon="search" />
      <FloatingActionButton position="bottom-left" icon="heart" />
      <FloatingActionButton position="bottom-right" icon="plus" />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="relative h-96 bg-fill-quaternary dark:bg-fill-quaternary-dark">
      <FloatingActionButton position="bottom-left" size="small" />
      <FloatingActionButton position="bottom-right" size="medium" className="right-20" />
      <FloatingActionButton position="bottom-right" size="large" className="right-36" />
    </div>
  ),
}

export const Colors: Story = {
  render: () => (
    <div className="relative h-96 bg-fill-quaternary dark:bg-fill-quaternary-dark">
      <FloatingActionButton position="bottom-left" color="blue" className="bottom-6" />
      <FloatingActionButton position="bottom-left" color="green" className="bottom-24" />
      <FloatingActionButton position="bottom-left" color="orange" className="bottom-40" />
      <FloatingActionButton position="bottom-left" color="red" className="bottom-56" />
      <FloatingActionButton position="bottom-left" color="purple" className="bottom-72" />
    </div>
  ),
}

export const Interactive: Story = {
  render: () => {
    const [count, setCount] = React.useState(0)

    return (
      <div className="relative h-96 bg-fill-quaternary p-6 dark:bg-fill-quaternary-dark">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold">Counter: {count}</h2>
          <p className="text-label-secondary">Click the floating button to increment</p>
        </div>

        <FloatingActionButton icon="plus" onClick={() => setCount(count + 1)} color="blue" />
      </div>
    )
  },
}

export const CustomContent: Story = {
  render: () => (
    <div className="relative h-96 bg-fill-quaternary dark:bg-fill-quaternary-dark">
      <FloatingActionButton>
        <span className="font-bold text-white">!</span>
      </FloatingActionButton>
    </div>
  ),
}
