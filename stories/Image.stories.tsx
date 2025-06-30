import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { Image } from "../src/Image"

const meta = {
  title: "Data Display/Image",
  component: Image,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "iOS-inspired image component with aspect ratio and fallback support.",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    src: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "Beautiful landscape",
  },
} satisfies Meta<typeof Image>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const AspectRatios: Story = {
  render: () => (
    <div className="grid w-96 grid-cols-2 gap-4">
      <div>
        <h4 className="mb-2 font-semibold">Square</h4>
        <Image
          src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Square"
          aspectRatio="square"
        />
      </div>
      <div>
        <h4 className="mb-2 font-semibold">16:9</h4>
        <Image
          src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="16:9"
          aspectRatio="16:9"
        />
      </div>
    </div>
  ),
}

export const ObjectFit: Story = {
  render: () => (
    <div className="grid w-96 grid-cols-2 gap-4">
      <div>
        <h4 className="mb-2 font-semibold">Cover</h4>
        <Image
          src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Cover"
          aspectRatio="square"
          objectFit="cover"
        />
      </div>
      <div>
        <h4 className="mb-2 font-semibold">Contain</h4>
        <Image
          src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Contain"
          aspectRatio="square"
          objectFit="contain"
        />
      </div>
    </div>
  ),
}

export const WithFallback: Story = {
  args: {
    src: "https://invalid-url.com/image.jpg",
    alt: "Broken image",
    fallback: (
      <div className="flex h-full w-full items-center justify-center bg-fill-tertiary dark:bg-fill-tertiary-dark">
        <span className="text-label-tertiary">Image not found</span>
      </div>
    ),
  },
}

export const Rounded: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      <Image
        src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=200"
        alt="Rounded"
        aspectRatio="square"
        rounded="lg"
        className="w-24"
      />
      <Image
        src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=200"
        alt="More rounded"
        aspectRatio="square"
        rounded="xl"
        className="w-24"
      />
      <Image
        src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=200"
        alt="Circular"
        aspectRatio="square"
        rounded="full"
        className="w-24"
      />
    </div>
  ),
}
