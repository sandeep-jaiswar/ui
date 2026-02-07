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
    spy.mockImplementation(() => {})

    expect(() => render(<TestComponent />)).toThrow("useCore must be used within a CoreProvider")

    spy.mockRestore()
  })
})
