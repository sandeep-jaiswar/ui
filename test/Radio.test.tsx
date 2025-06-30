import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import { describe, expect, it, vi } from "vitest"
import { Radio } from "../src/Radio"

describe("Radio", () => {
  it("renders with default props", () => {
    render(<Radio value="test" testId="radio" />)
    const radio = screen.getByTestId("radio")
    expect(radio).toBeInTheDocument()
    expect(radio).not.toBeChecked()
  })

  it("renders with checked state", () => {
    render(<Radio value="test" checked testId="radio" />)
    const radio = screen.getByTestId("radio")
    expect(radio).toBeChecked()
  })

  it("handles change events", () => {
    const handleChange = vi.fn()
    render(<Radio value="test" onChange={handleChange} testId="radio" />)

    fireEvent.click(screen.getByTestId("radio"))
    expect(handleChange).toHaveBeenCalledWith("test")
  })

  it("does not call onChange when disabled", () => {
    const handleChange = vi.fn()
    render(<Radio value="test" disabled onChange={handleChange} testId="radio" />)

    fireEvent.click(screen.getByTestId("radio"))
    expect(handleChange).not.toHaveBeenCalled()
  })

  it("renders with different sizes", () => {
    const { rerender } = render(<Radio value="test" size="small" testId="radio" />)
    expect(screen.getByTestId("radio")).toHaveClass("w-4", "h-4")

    rerender(<Radio value="test" size="medium" testId="radio" />)
    expect(screen.getByTestId("radio")).toHaveClass("w-5", "h-5")

    rerender(<Radio value="test" size="large" testId="radio" />)
    expect(screen.getByTestId("radio")).toHaveClass("w-6", "h-6")
  })

  it("renders with label", () => {
    render(<Radio value="test" label="Select option" testId="radio" />)
    expect(screen.getByText("Select option")).toBeInTheDocument()
  })

  it("handles label click", () => {
    const handleChange = vi.fn()
    render(<Radio value="test" label="Click me" onChange={handleChange} testId="radio" />)

    fireEvent.click(screen.getByText("Click me"))
    expect(handleChange).toHaveBeenCalledWith("test")
  })

  it("applies disabled styles when disabled", () => {
    render(<Radio value="test" disabled testId="radio" />)
    const radio = screen.getByTestId("radio")
    expect(radio).toBeDisabled()
    expect(radio).toHaveClass("opacity-50", "cursor-not-allowed")
  })
})
