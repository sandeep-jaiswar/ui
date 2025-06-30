import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import { describe, expect, it, vi } from "vitest"
import { Select } from "../src/Select"

const mockOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
]

describe("Select", () => {
  it("renders with default props", () => {
    render(<Select options={mockOptions} testId="select" />)
    const select = screen.getByTestId("select")
    expect(select).toBeInTheDocument()
  })

  it("renders all options", () => {
    render(<Select options={mockOptions} testId="select" />)
    const select = screen.getByTestId("select")
    const options = select.querySelectorAll("option")
    expect(options).toHaveLength(4) // 3 options + placeholder
  })

  it("handles selection changes", () => {
    const handleChange = vi.fn()
    render(<Select options={mockOptions} onChange={handleChange} testId="select" />)

    fireEvent.change(screen.getByTestId("select"), { target: { value: "option2" } })
    expect(handleChange).toHaveBeenCalledWith("option2")
  })

  it("renders with label and helper text", () => {
    render(<Select options={mockOptions} label="Choose option" helperText="Select one option" testId="select" />)
    expect(screen.getByText("Choose option")).toBeInTheDocument()
    expect(screen.getByText("Select one option")).toBeInTheDocument()
  })

  it("shows error state", () => {
    render(<Select options={mockOptions} state="error" errorText="This field is required" testId="select" />)
    expect(screen.getByText("This field is required")).toBeInTheDocument()
    expect(screen.getByTestId("select")).toHaveClass("border-systemRed-500")
  })
})
