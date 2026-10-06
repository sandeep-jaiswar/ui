// @vitest-environment jsdom
import { render, fireEvent, screen } from "@testing-library/react"
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
    const fillBar = container.querySelector(".slider__range")
    expect(fillBar).toHaveStyle({ width: "50%" })
  })

  it("handles pointer events to change value", () => {
    const handleChange = vi.fn()
    const { container } = render(
      <CoreProvider>
        <Slider onValueChange={handleChange} max={100} />
      </CoreProvider>
    )

    const track = container.querySelector(".slider__track") // track
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
    expect(root).toHaveAttribute("data-disabled", "true")

    const track = container.querySelector(".bg-secondary")
    if (track) {
      fireEvent.pointerDown(track, { clientX: 50 })
      expect(handleChange).not.toHaveBeenCalled()
    }
  })

  it("supports keyboard navigation", () => {
    const handleChange = vi.fn()
    // Need to mock getBoundingClientRect again for the component rendering logic?
    // Slider uses getBoundingClientRect for pointer events, but keyboard events rely on state.
    // So mocking might not be needed for keyboard if we don't trigger layout dependent logic.
    // BUT Slider implementation uses min/max/step.

    render(
      <CoreProvider>
        <Slider defaultValue={[50]} min={0} max={100} step={10} onValueChange={handleChange} />
      </CoreProvider>
    )

    const thumb = screen.getByRole("slider")
    thumb.focus()
    expect(document.activeElement).toBe(thumb)

    // Arrow Right -> +10 (50 -> 60)
    fireEvent.keyDown(thumb, { key: "ArrowRight" })
    expect(handleChange).toHaveBeenCalledWith([60])
    expect(thumb).toHaveAttribute("aria-valuenow", "60")

    // Arrow Left -> -10 (60 -> 50)
    fireEvent.keyDown(thumb, { key: "ArrowLeft" })
    expect(handleChange).toHaveBeenCalledWith([50])

    // Home -> 0
    fireEvent.keyDown(thumb, { key: "Home" })
    expect(handleChange).toHaveBeenCalledWith([0])

    // End -> 100
    fireEvent.keyDown(thumb, { key: "End" })
    expect(handleChange).toHaveBeenCalledWith([100])
  })
})
