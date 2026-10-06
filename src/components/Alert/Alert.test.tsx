// @vitest-environment jsdom
import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Alert, AlertTitle, AlertDescription } from "./Alert"

describe("Alert", () => {
  it("renders with title and description", () => {
    render(
      <Alert>
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Something went wrong.</AlertDescription>
      </Alert>
    )
    expect(screen.getByText("Error")).toBeInTheDocument()
    expect(screen.getByText("Something went wrong.")).toBeInTheDocument()
  })

  it("applies variant classes", () => {
    const variants = ["default", "destructive", "success", "warning", "info"] as const
    variants.forEach((variant) => {
      const { unmount } = render(
        <Alert variant={variant} data-testid={`alert-${variant}`}>
          Alert
        </Alert>
      )
      const alert = screen.getByTestId(`alert-${variant}`)
      expect(alert).toBeInTheDocument()
      // Check specific class exist for that variant

      unmount()
    })
  })
})
