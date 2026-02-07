// @vitest-environment jsdom
import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import { CoreProvider, useCore } from "./CoreProvider"

const TestComponent = () => {
  const { theme, behavior } = useCore()
  return (
    <div>
      <span data-testid="primary-color">{theme?.primaryColor}</span>
      <span data-testid="reduced-motion">{String(behavior?.reducedMotion)}</span>
    </div>
  )
}

describe("CoreProvider", () => {
  it("provides default configuration", () => {
    render(
      <CoreProvider>
        <TestComponent />
      </CoreProvider>
    )
    expect(screen.getByTestId("primary-color").textContent).toBe("blue")
    expect(screen.getByTestId("reduced-motion").textContent).toBe("false")
  })

  it("overrides configuration", () => {
    render(
      <CoreProvider config={{ theme: { primaryColor: "red" }, behavior: { reducedMotion: true } }}>
        <TestComponent />
      </CoreProvider>
    )
    expect(screen.getByTestId("primary-color").textContent).toBe("red")
    expect(screen.getByTestId("reduced-motion").textContent).toBe("true")
  })

  it("throws if useCore is used outside provider", () => {
    // Suppress console.error for this test as React logs the error
    const spy = vi.spyOn(console, "error")
    spy.mockImplementation(() => { })

    expect(() => render(<TestComponent />)).toThrow("useCore must be used within a CoreProvider")

    spy.mockRestore()
  })
  it("applies dark mode by default", () => {
    const root = document.documentElement
    root.className = "" // reset
    render(
      <CoreProvider>
        <div />
      </CoreProvider>
    )
    expect(root.classList.contains("dark")).toBe(true)
    expect(root.classList.contains("light")).toBe(false)
  })

  it("applies light mode when configured", () => {
    const root = document.documentElement
    root.className = "" // reset
    render(
      <CoreProvider config={{ theme: { mode: "light" } }}>
        <div />
      </CoreProvider>
    )
    expect(root.classList.contains("light")).toBe(true)
    expect(root.classList.contains("dark")).toBe(false)
  })

  it("applies system preference (dark)", () => {
    const root = document.documentElement
    root.className = "" // reset
    // Mock matchMedia
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: query === "(prefers-color-scheme: dark)", // Simulate dark mode preference
        media: query,
        onchange: null,
        addListener: vi.fn(), // Deprecated
        removeListener: vi.fn(), // Deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    })

    render(
      <CoreProvider config={{ theme: { mode: "system" } }}>
        <div />
      </CoreProvider>
    )

    expect(root.classList.contains("dark")).toBe(true)
  })
})
