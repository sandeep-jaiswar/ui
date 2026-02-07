import type { Meta, StoryObj } from "@storybook/react"
import { cn } from "../../utils/cn"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "./NavigationMenu"

const meta = {
  title: "Components/Navigation/NavigationMenu",
  component: NavigationMenu,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="flex h-[300px] justify-center p-10">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof NavigationMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger value="getting-started">Getting Started</NavigationMenuTrigger>
          <NavigationMenuContent value="getting-started" className="w-[400px] p-4">
            <ul className="grid gap-3">
              <li className="row-span-3">
                <NavigationMenuLink href="#">
                  <div className="flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-gray-100/50 to-gray-100 p-6 no-underline outline-none select-none focus:shadow-md dark:from-gray-900/50 dark:to-gray-900">
                    <div className="mt-4 mb-2 text-lg font-medium">Shadcn/UI</div>
                    <p className="text-muted-foreground text-sm leading-tight text-gray-500">
                      Beautifully designed components built with Radix UI and Tailwind CSS.
                    </p>
                  </div>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#">Introduction</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#">Installation</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#">Typography</NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger value="components">Components</NavigationMenuTrigger>
          <NavigationMenuContent value="components" className="w-[500px] p-4">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <li>
                <NavigationMenuLink href="#">Alert</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#">Button</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#">Card</NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="#"
            className={cn(
              "group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800"
            )}
          >
            Documentation
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    ),
  },
  render: (args) => <NavigationMenu {...args}>{args.children}</NavigationMenu>,
}
