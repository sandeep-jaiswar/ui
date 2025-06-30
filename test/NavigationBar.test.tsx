import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import { describe, expect, it, vi } from "vitest"
import { NavigationBar } from "../src/NavigationBar"

describe("NavigationBar", () => {
  it("renders with title", () => {
    render(<NavigationBar title="Home" testId="navbar" />)
    expect(screen.getByText("Home")).toBeInTheDocument()
  })

  it("renders back button when showBack is true", () => {
    const handleBack = vi.fn()
    render(<NavigationBar showBack onBack={handleBack} testId="navbar" />)

    const backButton = screen.getByLabelText("Go back")
    expect(backButton).toBeInTheDocument()

    fireEvent.click(backButton)
    expect(handleBack).toHaveBeenCalled()
  })

  it("renders left and right content", () => {
    render(<NavigationBar leftContent={<span>Left</span>} rightContent={<span>Right</span>} testId="navbar" />)
    expect(screen.getByText("Left")).toBeInTheDocument()
    expect(screen.getByText("Right")).toBeInTheDocument()
  })

  it("applies different variants", () => {
    const { rerender } = render(<NavigationBar variant="large" title="Large" testId="navbar" />)
    expect(screen.getByText("Large")).toHaveClass("text-ios-large-title")

    rerender(<NavigationBar variant="transparent" title="Transparent" testId="navbar" />)
    expect(screen.getByTestId("navbar")).toHaveClass("bg-transparent")
  })
})
