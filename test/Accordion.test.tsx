import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import { describe, expect, it, vi } from "vitest"
import { Accordion, AccordionItem } from "../src/Accordion"

describe("Accordion", () => {
  it("renders with children", () => {
    render(
      <Accordion testId="accordion">
        <AccordionItem title="Item 1">Content 1</AccordionItem>
        <AccordionItem title="Item 2">Content 2</AccordionItem>
      </Accordion>
    )
    expect(screen.getByTestId("accordion")).toBeInTheDocument()
    expect(screen.getByText("Item 1")).toBeInTheDocument()
    expect(screen.getByText("Item 2")).toBeInTheDocument()
  })

  it("applies different variants", () => {
    const { rerender } = render(<Accordion variant="grouped" testId="accordion" />)
    expect(screen.getByTestId("accordion")).toHaveClass("bg-background-secondary")

    rerender(<Accordion variant="separated" testId="accordion" />)
    expect(screen.getByTestId("accordion")).toHaveClass("space-y-2")
  })
})

describe("AccordionItem", () => {
  it("renders with title and content", () => {
    render(
      <AccordionItem title="Test Title" testId="item">
        Test Content
      </AccordionItem>
    )
    expect(screen.getByText("Test Title")).toBeInTheDocument()
  })

  it("toggles expansion on click", () => {
    render(
      <AccordionItem title="Toggle Test" testId="item">
        Hidden Content
      </AccordionItem>
    )

    const button = screen.getByText("Toggle Test")
    expect(button).toHaveAttribute("aria-expanded", "false")

    fireEvent.click(button)
    expect(button).toHaveAttribute("aria-expanded", "true")
  })

  it("calls onToggle when expanded state changes", () => {
    const handleToggle = vi.fn()
    render(
      <AccordionItem title="Callback Test" onToggle={handleToggle} testId="item">
        Content
      </AccordionItem>
    )

    fireEvent.click(screen.getByText("Callback Test"))
    expect(handleToggle).toHaveBeenCalledWith(true)
  })

  it("does not toggle when disabled", () => {
    const handleToggle = vi.fn()
    render(
      <AccordionItem title="Disabled Test" disabled onToggle={handleToggle} testId="item">
        Content
      </AccordionItem>
    )

    fireEvent.click(screen.getByText("Disabled Test"))
    expect(handleToggle).not.toHaveBeenCalled()
  })

  it("starts expanded when defaultExpanded is true", () => {
    render(
      <AccordionItem title="Default Expanded" defaultExpanded testId="item">
        Visible Content
      </AccordionItem>
    )

    const button = screen.getByText("Default Expanded")
    expect(button).toHaveAttribute("aria-expanded", "true")
  })
})
