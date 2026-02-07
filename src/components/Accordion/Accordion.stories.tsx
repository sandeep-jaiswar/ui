import type { Meta, StoryObj } from "@storybook/react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./Accordion"

const meta = {
  title: "Components/Surfaces/Accordion",
  component: Accordion,
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern, making it fully accessible to screen readers and keyboard
            users.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Why use it?</AccordionTrigger>
          <AccordionContent>
            Because it&apos;s built for speed and simplicity. It uses native CSS variables for customization and
            includes a built-in dark mode.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I use it in production?</AccordionTrigger>
          <AccordionContent>Absolutely! It&apos;s production-ready and optimized for performance.</AccordionContent>
        </AccordionItem>
      </>
    ),
  },
  render: (args) => (
    <Accordion type="single" collapsible className="w-full" {...args}>
      {args.children}
    </Accordion>
  ),
}
