// @vitest-environment jsdom
import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { CoreProvider } from "../../core"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./Accordion"

describe("Accordion", () => {
  it("renders and toggles content (single mode)", () => {
    render(
      <CoreProvider>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Trigger 1</AccordionTrigger>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Trigger 2</AccordionTrigger>
            <AccordionContent>Content 2</AccordionContent>
          </AccordionItem>
        </Accordion>
      </CoreProvider>
    )

    fireEvent.click(screen.getByText("Trigger 1"))
    expect(screen.getByText("Content 1")).toBeInTheDocument()

    // Open second item, first should close in single mode
    fireEvent.click(screen.getByText("Trigger 2"))
    expect(screen.getByText("Content 2")).toBeInTheDocument()

    // Close second item (collapsible=true)
    fireEvent.click(screen.getByText("Trigger 2"))
  })

  it("supports multiple mode", () => {
    render(
      <CoreProvider>
        <Accordion type="multiple">
          <AccordionItem value="item-1">
            <AccordionTrigger>Trigger 1</AccordionTrigger>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Trigger 2</AccordionTrigger>
            <AccordionContent>Content 2</AccordionContent>
          </AccordionItem>
        </Accordion>
      </CoreProvider>
    )

    fireEvent.click(screen.getByText("Trigger 1"))
    fireEvent.click(screen.getByText("Trigger 2"))

    expect(screen.getByText("Content 1")).toBeInTheDocument()
    expect(screen.getByText("Content 2")).toBeInTheDocument()

    // Close one
    fireEvent.click(screen.getByText("Trigger 1"))

    expect(screen.getByText("Content 2")).toBeInTheDocument()
  })

  it("renders default value", () => {
    render(
      <CoreProvider>
        <Accordion type="single" defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>Trigger 1</AccordionTrigger>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
        </Accordion>
      </CoreProvider>
    )
    expect(screen.getByText("Content 1")).toBeInTheDocument()
  })
  it("supports keyboard navigation", () => {
    render(
      <CoreProvider>
        <Accordion type="single">
          <AccordionItem value="item-1">
            <AccordionTrigger>Trigger 1</AccordionTrigger>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Trigger 2</AccordionTrigger>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Trigger 3</AccordionTrigger>
          </AccordionItem>
        </Accordion>
      </CoreProvider>
    )

    const triggers = screen.getAllByRole("button")
    triggers[0].focus()
    expect(document.activeElement).toBe(triggers[0])

    // Arrow Down -> next
    fireEvent.keyDown(triggers[0], { key: "ArrowDown" })
    expect(document.activeElement).toBe(triggers[1])

    // Arrow Down -> next
    fireEvent.keyDown(triggers[1], { key: "ArrowDown" })
    expect(document.activeElement).toBe(triggers[2])

    // Arrow Down -> loop to start
    fireEvent.keyDown(triggers[2], { key: "ArrowDown" })
    expect(document.activeElement).toBe(triggers[0])

    // End -> last
    fireEvent.keyDown(triggers[0], { key: "End" })
    expect(document.activeElement).toBe(triggers[2])

    // Home -> first
    fireEvent.keyDown(triggers[2], { key: "Home" })
    expect(document.activeElement).toBe(triggers[0])
  })
})
