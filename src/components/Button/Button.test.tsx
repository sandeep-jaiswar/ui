import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"

import { Button } from "./index"

describe("Button", () => {
  it("renders children and responds to clicks", () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick}>Click me</Button>)
    const btn = screen.getByRole("button", { name: /click me/i })
    expect(btn).toBeInTheDocument()
    fireEvent.click(btn)
    expect(onClick).toHaveBeenCalled()
  })

  it("applies custom className", () => {
    render(<Button className="my-test-class">Hi</Button>)
    expect(screen.getByRole("button", { name: /hi/i })).toHaveClass("my-test-class")
  })
})
