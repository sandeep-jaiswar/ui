import type { Meta, StoryObj } from "@storybook/react"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage } from "./Breadcrumb"

const meta = {
  title: "Components/Navigation/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumb>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </>
    ),
  },
  render: (args) => <Breadcrumb {...args}>{args.children}</Breadcrumb>,
}

export const CustomSeparator: Story = {
  args: {
    separator: ">",
    children: (
      <>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="/settings">Settings</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbPage>Profile</BreadcrumbPage>
        </BreadcrumbItem>
      </>
    ),
  },
  render: (args) => <Breadcrumb {...args}>{args.children}</Breadcrumb>,
}
