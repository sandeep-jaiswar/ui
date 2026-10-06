// @vitest-environment jsdom
import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Badge } from "./Badge"

describe("Badge", () => {
  it("renders with default props", () => {
    render(<Badge>Default</Badge>)
    const badge = screen.getByText("Default")
    expect(badge).toBeInTheDocument()
    expect(badge).toHaveAttribute("data-intent", "neutral") // Neutral default
  })

  it("applies intent classes", () => {
    render(<Badge intent="success">Success</Badge>)
    const badge = screen.getByText("Success")
    expect(badge).toHaveAttribute("data-intent", "success")
  })

  it("applies shape classes", () => {
    render(<Badge shape="pill">Pill</Badge>)
    const badge = screen.getByText("Pill")
    expect(badge).toHaveAttribute("data-shape", "pill")
  })

  it("applies size classes", () => {
    render(<Badge size="sm">Small</Badge>)
    const badge = screen.getByText("Small")
    expect(badge).toHaveAttribute("data-size", "sm")
  })

  it("renders all intents coverage", () => {
    const intents = ["primary", "secondary", "warning", "danger"] as const
    intents.forEach((intent) => {
      const { unmount } = render(<Badge intent={intent}>{intent}</Badge>)
      const badge = screen.getByText(intent)
      expect(badge).toBeInTheDocument()
      unmount()
    })
  })
})
