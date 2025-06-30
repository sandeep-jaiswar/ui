import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { Button } from "../src/Button"
import { Menu } from "../src/Menu"

const mockItems = [
  { id: "edit", label: "Edit", icon: "settings", onClick: () => console.log("Edit") },
  { id: "copy", label: "Copy", icon: "plus", onClick: () => console.log("Copy") },
  { id: "separator1", separator: true },
  { id: "share", label: "Share", icon: "heart", onClick: () => console.log("Share") },
  { id: "separator2", separator: true },
  { id: "delete", label: "Delete", icon: "close", destructive: true, onClick: () => console.log("Delete") },
]

const meta = {
  title: "Advanced/Menu",
  component: Menu,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "iOS-inspired context menu component.",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    items: mockItems,
    open: true,
    onClose: () => {},
  },
} satisfies Meta<typeof Menu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithTrigger: Story = {
  args: {
    open: false,
    trigger: <Button>Open Menu</Button>,
  },
}

export const Positions: Story = {
  render: () => {
    const [openMenu, setOpenMenu] = React.useState<string | null>(null)

    return (
      <div className="grid grid-cols-2 gap-8 p-8">
        <Menu
          items={mockItems.slice(0, 3)}
          open={openMenu === "bottom-left"}
          onClose={() => setOpenMenu(null)}
          position="bottom-left"
          trigger={
            <Button onClick={() => setOpenMenu(openMenu === "bottom-left" ? null : "bottom-left")}>Bottom Left</Button>
          }
        />

        <Menu
          items={mockItems.slice(0, 3)}
          open={openMenu === "bottom-right"}
          onClose={() => setOpenMenu(null)}
          position="bottom-right"
          trigger={
            <Button onClick={() => setOpenMenu(openMenu === "bottom-right" ? null : "bottom-right")}>
              Bottom Right
            </Button>
          }
        />

        <Menu
          items={mockItems.slice(0, 3)}
          open={openMenu === "top-left"}
          onClose={() => setOpenMenu(null)}
          position="top-left"
          trigger={<Button onClick={() => setOpenMenu(openMenu === "top-left" ? null : "top-left")}>Top Left</Button>}
        />

        <Menu
          items={mockItems.slice(0, 3)}
          open={openMenu === "top-right"}
          onClose={() => setOpenMenu(null)}
          position="top-right"
          trigger={
            <Button onClick={() => setOpenMenu(openMenu === "top-right" ? null : "top-right")}>Top Right</Button>
          }
        />
      </div>
    )
  },
}

export const Interactive: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [lastAction, setLastAction] = React.useState<string>("")

    const items = [
      { id: "edit", label: "Edit", icon: "settings", onClick: () => setLastAction("Edit clicked") },
      { id: "copy", label: "Copy", icon: "plus", onClick: () => setLastAction("Copy clicked") },
      { id: "separator", separator: true },
      {
        id: "delete",
        label: "Delete",
        icon: "close",
        destructive: true,
        onClick: () => setLastAction("Delete clicked"),
      },
    ]

    return (
      <div className="space-y-4">
        <Menu
          items={items}
          open={isOpen}
          onClose={() => setIsOpen(false)}
          trigger={<Button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Close Menu" : "Open Menu"}</Button>}
        />

        {lastAction && (
          <div className="rounded-ios bg-fill-quaternary p-3 dark:bg-fill-quaternary-dark">
            Last action: {lastAction}
          </div>
        )}
      </div>
    )
  },
}
