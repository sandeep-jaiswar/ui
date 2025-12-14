import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import { describe, it, expect, vi } from "vitest"

import { Input } from "./index"

describe("Input", () => {
  it("renders with placeholder and responds to changes", () => {
    const onChange = vi.fn()
    render(<Input placeholder="Email" onChange={onChange} />)

    const input = screen.getByPlaceholderText(/email/i)
    expect(input).toBeInTheDocument()

    fireEvent.change(input, { target: { value: "a@b.com" } })
    expect(onChange).toHaveBeenCalled()
  })

  it("applies custom className", () => {
    render(<Input aria-label="name" className="my-test-class" />)
    expect(screen.getByRole("textbox", { name: /name/i })).toHaveClass("my-test-class")
  })
})
