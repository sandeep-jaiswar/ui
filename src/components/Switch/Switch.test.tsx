// @vitest-environment jsdom
import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import { CoreProvider } from "../../core"
import { Switch } from "./Switch"

describe("Switch", () => {
  it("renders with label", () => {
    render(
      <CoreProvider>
        <Switch label="Toggle me" />
      </CoreProvider>
    )
    expect(screen.getByLabelText("Toggle me")).toBeInTheDocument()
  })

  it("toggles checked state", () => {
    const handleChange = vi.fn()
    render(
      <CoreProvider>
        <Switch label="Enable feature" onChange={handleChange} />
      </CoreProvider>
    )
    const switchInput = screen.getByLabelText("Enable feature")
    fireEvent.click(switchInput)
    expect(handleChange).toHaveBeenCalled()
    expect(switchInput).toBeChecked()
  })

  it("respects disabled state", () => {
    render(
      <CoreProvider>
        <Switch label="Disabled" disabled />
      </CoreProvider>
    )
    const switchInput = screen.getByLabelText("Disabled")
    expect(switchInput).toBeDisabled()
  })

  it("renders different sizes", () => {
    const { container } = render(
      <CoreProvider>
        <Switch size="lg" />
      </CoreProvider>
    )
    // Implementation: sizeClasses.lg.track = "w-14 h-8"
    // We need to find the track div which is a sibling of input or parent?
    // Structure: label > input, div(track) > div(thumb)
    // We can query selector by class
    const track = container.querySelector(".w-14.h-8")
    expect(track).toBeInTheDocument()
  })

  it("renders different intents", () => {
    // Init with checked to see intent color (peer-checked:bg-...)
    const { container } = render(
      <CoreProvider>
        <Switch intent="success" defaultChecked />
      </CoreProvider>
    )
    // intentClasses.success = "peer-checked:bg-green-600 ..."
    const track = container.querySelector(".peer-checked\\:bg-green-600")
    expect(track).toBeInTheDocument()
  })
})
