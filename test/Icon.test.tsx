import { render, screen } from "@testing-library/react"
import React from "react"
import { describe, expect, it } from "vitest"
import { Icon } from "../src/Icon"

describe("Icon", () => {
  it("renders with default props", () => {
    render(<Icon testId="icon" />)
    const icon = screen.getByTestId("icon")
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveAttribute("width", "20")
    expect(icon).toHaveAttribute("height", "20")
  })

  it("renders system icons by name", () => {
    render(<Icon name="plus" testId="plus-icon" />)
    const icon = screen.getByTestId("plus-icon")
    expect(icon).toBeInTheDocument()
  })

  it("renders custom SVG children", () => {
    render(
      <Icon testId="custom-icon">
        <circle cx="8" cy="8" r="4" />
      </Icon>
    )
    const icon = screen.getByTestId("custom-icon")
    const circle = icon.querySelector("circle")
    expect(circle).toBeInTheDocument()
  })

  it("applies different sizes", () => {
    const { rerender } = render(<Icon size="small" testId="icon" />)
    expect(screen.getByTestId("icon")).toHaveAttribute("width", "16")

    rerender(<Icon size={32} testId="icon" />)
    expect(screen.getByTestId("icon")).toHaveAttribute("width", "32")
  })

  it("applies color classes", () => {
    render(<Icon color="system" testId="icon" />)
    expect(screen.getByTestId("icon")).toHaveClass("text-systemBlue-500")
  })

  it("applies custom color", () => {
    render(<Icon color="custom" customColor="#FF0000" testId="icon" />)
    const icon = screen.getByTestId("icon")
    expect(icon).toHaveStyle({ color: "#FF0000" })
  })
})
