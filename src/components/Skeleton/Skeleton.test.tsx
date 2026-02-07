// @vitest-environment jsdom
import { render } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Skeleton } from "./Skeleton"

describe("Skeleton", () => {
  it("renders with correct class", () => {
    const { container } = render(<Skeleton className="h-4 w-full" />)
    expect(container.firstChild).toHaveClass("animate-pulse")
    expect(container.firstChild).toHaveClass("bg-muted")
  })
})
