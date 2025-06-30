import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import { describe, expect, it, vi } from "vitest"
import { RadioGroup } from "../src/RadioGroup"

const mockOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
]

describe("RadioGroup", () => {
  it("renders with default props", () => {
    render(<RadioGroup name="test" options={mockOptions} testId="radio-group" />)
    const radioGroup = screen.getByTestId("radio-group")
    expect(radioGroup).toBeInTheDocument()
    expect(radioGroup).toHaveAttribute("role", "radiogroup")
  })

  it("renders all options", () => {
    render(<RadioGroup name="test" options={mockOptions} />)
    expect(screen.getByText("Option 1")).toBeInTheDocument()
    expect(screen.getByText("Option 2")).toBeInTheDocument()
    expect(screen.getByText("Option 3")).toBeInTheDocument()
  })

  it("handles selection changes", () => {
    const handleChange = vi.fn()
    render(<RadioGroup name="test" options={mockOptions} onChange={handleChange} />)

    fireEvent.click(screen.getByText("Option 2"))
    expect(handleChange).toHaveBeenCalledWith("option2")
  })

  it("renders with default value", () => {
    render(<RadioGroup name="test" options={mockOptions} defaultValue="option2" />)
    const radio = screen.getByDisplayValue("option2")
    expect(radio).toBeChecked()
  })

  it("renders with controlled value", () => {
    render(<RadioGroup name="test" options={mockOptions} value="option3" />)
    const radio = screen.getByDisplayValue("option3")
    expect(radio).toBeChecked()
  })

  it("renders horizontally when direction is horizontal", () => {
    render(<RadioGroup name="test" options={mockOptions} direction="horizontal" testId="radio-group" />)
    expect(screen.getByTestId("radio-group")).toHaveClass("flex-row")
  })

  it("disables all options when disabled", () => {
    render(<RadioGroup name="test" options={mockOptions} disabled />)
    const radios = screen.getAllByRole("radio")
    radios.forEach((radio) => {
      expect(radio).toBeDisabled()
    })
  })
})
