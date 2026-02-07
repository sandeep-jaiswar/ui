import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "../Button"
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
} from "./Drawer"

const meta = {
  title: "Components/Surfaces/Drawer",
  component: Drawer,
  tags: ["autodocs"],
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <DrawerTrigger>
          <Button variant="outline">Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          This is the drawer content. It&apos;s accessible and animated.
          <DrawerHeader>
            <DrawerTitle>Edit Profile</DrawerTitle>
            <DrawerDescription>Make changes to your profile here. Click save when you&apos;re done.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <p>Profile content...</p>
          </div>
          <DrawerFooter>
            <Button>Save changes</Button>
          </DrawerFooter>
        </DrawerContent>
      </>
    ),
  },
  render: (args) => <Drawer {...args}>{args.children}</Drawer>,
}

export const TopSide: Story = {
  args: {
    children: (
      <>
        <DrawerTrigger>
          <Button variant="outline">Open Top Drawer</Button>
        </DrawerTrigger>
        <DrawerContent side="top">
          <DrawerHeader>
            <DrawerTitle>Notifications</DrawerTitle>
          </DrawerHeader>
          <div className="p-4">
            <p>You have new messages.</p>
          </div>
        </DrawerContent>
      </>
    ),
  },
  render: (args) => <Drawer {...args}>{args.children}</Drawer>,
}
