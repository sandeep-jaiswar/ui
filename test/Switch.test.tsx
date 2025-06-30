import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import { describe, expect, it, vi } from "vitest"
import { Switch } from "../src/Switch"

describe("Switch", () => {
  it("renders with default props", () => {
    render(<Switch testId="switch" />)
    const switchElement = screen.getByTestId("switch")
    expect(switchElement).toBeInTheDocument()
    expect(switchElement).toHaveAttribute("role", "switch")
    expect(switchElement).toHaveAttribute("aria-checked", "false")
  })

  it("renders with checked state", () => {
    render(<Switch checked testId="switch" />)
    const switchElement = screen.getByTestId("switch")
    expect(switchElement).toHaveAttribute("aria-checked", "true")
  })

  it("handles click events", () => {
    const handleChange = vi.fn()
    render(<Switch onChange={handleChange} testId="switch" />)

    fireEvent.click(screen.getByTestId("switch"))
    expect(handleChange).toHaveBeenCalledWith(true)
  })

  it("does not call onChange when disabled", () => {
    const handleChange = vi.fn()
    render(<Switch disabled onChange={handleChange} testId="switch" />)

    fireEvent.click(screen.getByTestId("switch"))
    expect(handleChange).not.toHaveBeenCalled()
  })

  it("renders with different sizes", () => {
    const { rerender } = render(<Switch size="small" testId="switch" />)
    expect(screen.getByTestId("switch")).toHaveClass("w-8", "h-5")

    rerender(<Switch size="medium" testId="switch" />)
    expect(screen.getByTestId("switch")).toHaveClass("w-12", "h-7")

    rerender(<Switch size="large" testId="switch" />)
    expect(screen.getByTestId("switch")).toHaveClass("w-16", "h-9")
  })

  it("renders with different colors", () => {
    const { rerender } = render(<Switch checked color="green" testId="switch" />)
    expect(screen.getByTestId("switch")).toHaveClass("bg-systemGreen-500")

    rerender(<Switch checked color="blue" testId="switch" />)
    expect(screen.getByTestId("switch")).toHaveClass("bg-systemBlue-500")
  })

  it("renders with label", () => {
    render(<Switch label="Enable notifications" testId="switch" />)
    expect(screen.getByText("Enable notifications")).toBeInTheDocument()
  })

  it("handles label click", () => {
    const handleChange = vi.fn()
    render(<Switch label="Toggle me" onChange={handleChange} testId="switch" />)

    fireEvent.click(screen.getByText("Toggle me"))
    expect(handleChange).toHaveBeenCalledWith(true)
  })

  it("applies disabled styles when disabled", () => {
    render(<Switch disabled testId="switch" />)
    const switchElement = screen.getByTestId("switch")
    expect(switchElement).toBeDisabled()
    expect(switchElement).toHaveClass("opacity-50", "cursor-not-allowed")
  })
})
