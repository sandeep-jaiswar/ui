// @vitest-environment jsdom
import { render, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import { CoreProvider } from "../../core"
import { Slider } from "./Slider"

describe("Slider", () => {
  it("renders with default value", () => {
    // We can't easily see the visual position, but we can access the component properties if we could spy on them.
    // Or we check the DOM structure.
    const { container } = render(
      <CoreProvider>
        <Slider defaultValue={[50]} max={100} />
      </CoreProvider>
    )
    // The blue fill bar should have width 50%
    const fillBar = container.querySelector(".bg-blue-600")
    expect(fillBar).toHaveStyle({ width: "50%" })
  })

  it("handles pointer events to change value", () => {
    const handleChange = vi.fn()
    const { container } = render(
      <CoreProvider>
        <Slider onValueChange={handleChange} max={100} />
      </CoreProvider>
    )

    const track = container.querySelector(".bg-gray-200") // track
    expect(track).toBeInTheDocument()

    // Simulate pointer down. Since getBoundingClientRect is 0 in jsdom, we might need to mock it
    // or just verify event handlers are attached.
    // To properly test pointer interactions in jsdom usually requires mocking size.

    // Mock getBoundingClientRect
    vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockReturnValue({
      left: 0,
      top: 0,
      width: 100,
      height: 10,
      bottom: 10,
      right: 100,
      x: 0,
      y: 0,
      toJSON: () => {},
    })

    if (track) {
      fireEvent.pointerDown(track, { clientX: 50 })
      // Should be 50%
      expect(handleChange).toHaveBeenCalledWith([50])
    }
  })

  it("respects disabled state", () => {
    const handleChange = vi.fn()
    const { container } = render(
      <CoreProvider>
        <Slider disabled onValueChange={handleChange} />
      </CoreProvider>
    )
    const root = container.firstChild
    expect(root).toHaveClass("pointer-events-none")

    const track = container.querySelector(".bg-gray-200")
    if (track) {
      fireEvent.pointerDown(track, { clientX: 50 })
      expect(handleChange).not.toHaveBeenCalled()
    }
  })
})
