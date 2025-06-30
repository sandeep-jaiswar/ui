import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import { describe, expect, it, vi } from "vitest"
import { Tabs } from "../src/Tabs"

const mockItems = [
  { id: "tab1", label: "Tab 1", content: <div>Content 1</div> },
  { id: "tab2", label: "Tab 2", content: <div>Content 2</div> },
  { id: "tab3", label: "Tab 3", content: <div>Content 3</div>, disabled: true },
]

describe("Tabs", () => {
  it("renders all tab labels", () => {
    render(<Tabs items={mockItems} testId="tabs" />)
    expect(screen.getByText("Tab 1")).toBeInTheDocument()
    expect(screen.getByText("Tab 2")).toBeInTheDocument()
    expect(screen.getByText("Tab 3")).toBeInTheDocument()
  })

  it("shows content for active tab", () => {
    render(<Tabs items={mockItems} defaultActiveTab="tab1" testId="tabs" />)
    expect(screen.getByText("Content 1")).toBeInTheDocument()
    expect(screen.queryByText("Content 2")).not.toBeInTheDocument()
  })

  it("changes content when tab is clicked", () => {
    render(<Tabs items={mockItems} testId="tabs" />)

    fireEvent.click(screen.getByText("Tab 2"))
    expect(screen.getByText("Content 2")).toBeInTheDocument()
    expect(screen.queryByText("Content 1")).not.toBeInTheDocument()
  })

  it("calls onChange when tab changes", () => {
    const handleChange = vi.fn()
    render(<Tabs items={mockItems} onChange={handleChange} testId="tabs" />)

    fireEvent.click(screen.getByText("Tab 2"))
    expect(handleChange).toHaveBeenCalledWith("tab2")
  })

  it("does not change to disabled tab", () => {
    const handleChange = vi.fn()
    render(<Tabs items={mockItems} onChange={handleChange} testId="tabs" />)

    fireEvent.click(screen.getByText("Tab 3"))
    expect(handleChange).not.toHaveBeenCalledWith("tab3")
  })

  it("applies segmented variant styles", () => {
    render(<Tabs items={mockItems} variant="segmented" testId="tabs" />)
    const tabList = screen.getByRole("tablist")
    expect(tabList).toHaveClass("bg-fill-secondary")
  })
})
