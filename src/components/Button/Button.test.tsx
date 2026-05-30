// @vitest-environment jsdom
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

  it("renders with different intents", () => {
    const { rerender } = render(<Button intent="danger">Danger</Button>)
    expect(screen.getByRole("button")).toHaveAttribute("data-intent", "danger")

    rerender(<Button intent="success">Success</Button>)
    expect(screen.getByRole("button")).toHaveAttribute("data-intent", "success")
  })

  it("renders with different variants", () => {
    render(<Button variant="outline">Outline</Button>)
    expect(screen.getByRole("button")).toHaveAttribute("data-variant", "outline")
  })

  it("renders with different sizes", () => {
    render(<Button size="lg">Large</Button>)
    expect(screen.getByRole("button")).toHaveAttribute("data-size", "lg")
  })

  it("handles disabled state", () => {
    const onClick = vi.fn()
    render(
      <Button disabled onClick={onClick}>
        Disabled
      </Button>
    )
    const btn = screen.getByRole("button")
    expect(btn).toBeDisabled()
    fireEvent.click(btn)
    expect(onClick).not.toHaveBeenCalled()
  })

  it("handles loading state", () => {
    const onClick = vi.fn()
    // Loading should disable the button and show spinner
    render(
      <Button loading onClick={onClick}>
        Loading
      </Button>
    )
    const btn = screen.getByRole("button")

    // BaseUI button usually passes disabled if aria-busy logic is handled or we explictly passed disabled={isDisabled}
    expect(btn).toBeDisabled()
    expect(btn).toHaveAttribute("aria-busy", "true")

    // Spinner presence (class animate-spin)
    // Note: we can't easily query by text "Loading" because it might be hidden or wrapped differently
    // But we can check if children are hidden? Our implementation wraps children in opacity-0 if loading.
    const childrenWrapper = btn.querySelector(".btn__content--hidden")
    expect(childrenWrapper).toBeInTheDocument()

    fireEvent.click(btn)
    expect(onClick).not.toHaveBeenCalled()
  })

  it("renders leading and trailing icons", () => {
    render(
      <Button leadingIcon={<span data-testid="leading">L</span>} trailingIcon={<span data-testid="trailing">R</span>}>
        Content
      </Button>
    )
    expect(screen.getByTestId("leading")).toBeInTheDocument()
    expect(screen.getByTestId("trailing")).toBeInTheDocument()
  })

  it("renders as icon-only when no children provided", () => {
    // Should warn in console in dev, but functionally just renders.
    // We can check if it has appropriate classes or structure.
    const spy = vi.spyOn(console, "warn").mockImplementation(() => {})
    render(<Button leadingIcon={<span data-testid="icon">I</span>} aria-label="Icon Button" title="Icon Button" />)
    expect(screen.getByTestId("icon")).toBeInTheDocument()
    // Check structure logic: content wrapper exists
    expect(spy).not.toHaveBeenCalled() // We provided aria-label
    spy.mockRestore()
  })
})
