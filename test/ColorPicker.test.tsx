import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import { describe, expect, it, vi } from "vitest"
import { ColorPicker } from "../src/ColorPicker"

describe("ColorPicker", () => {
  it("renders with default props", () => {
    render(<ColorPicker testId="colorpicker" />)
    const colorpicker = screen.getByTestId("colorpicker")
    expect(colorpicker).toBeInTheDocument()
  })

  it("opens color palette when clicked", () => {
    render(<ColorPicker testId="colorpicker" />)

    const button = screen.getByLabelText(/Selected color/)
    fireEvent.click(button)

    expect(screen.getByText("Choose Color")).toBeInTheDocument()
  })

  it("handles color selection", () => {
    const handleChange = vi.fn()
    render(<ColorPicker onChange={handleChange} testId="colorpicker" />)

    const button = screen.getByLabelText(/Selected color/)
    fireEvent.click(button)

    const colorButton = screen.getByLabelText("Select color #34C759")
    fireEvent.click(colorButton)

    expect(handleChange).toHaveBeenCalledWith("#34C759")
  })

  it("handles custom color input", () => {
    const handleChange = vi.fn()
    render(<ColorPicker onChange={handleChange} testId="colorpicker" />)

    const button = screen.getByLabelText(/Selected color/)
    fireEvent.click(button)

    const customInput = screen.getByPlaceholderText("#000000")
    fireEvent.change(customInput, { target: { value: "#FF0000" } })
    fireEvent.blur(customInput)

    expect(handleChange).toHaveBeenCalledWith("#FF0000")
  })

  it("shows selected color correctly", () => {
    render(<ColorPicker value="#FF0000" testId="colorpicker" />)

    const button = screen.getByLabelText("Selected color: #FF0000")
    expect(button).toHaveStyle({ backgroundColor: "#FF0000" })
  })
})
