import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import { describe, expect, it, vi } from "vitest"
import { Toast } from "../src/Toast"

describe("Toast", () => {
  it("renders when visible", () => {
    render(<Toast visible message="Test message" testId="toast" />)
    expect(screen.getByTestId("toast")).toBeInTheDocument()
    expect(screen.getByText("Test message")).toBeInTheDocument()
  })

  it("does not render when not visible", () => {
    render(<Toast visible={false} message="Test message" testId="toast" />)
    expect(screen.queryByTestId("toast")).not.toBeInTheDocument()
  })

  it("renders with title", () => {
    render(<Toast visible title="Success" message="Operation completed" testId="toast" />)
    expect(screen.getByText("Success")).toBeInTheDocument()
    expect(screen.getByText("Operation completed")).toBeInTheDocument()
  })

  it("calls onClose when close button is clicked", () => {
    const handleClose = vi.fn()
    render(<Toast visible message="Test message" onClose={handleClose} testId="toast" />)

    fireEvent.click(screen.getByLabelText("Close notification"))
    expect(handleClose).toHaveBeenCalled()
  })

  it("auto dismisses after duration", () => {
    vi.useFakeTimers()
    const handleClose = vi.fn()

    render(<Toast visible message="Test message" duration={1000} onClose={handleClose} testId="toast" />)

    vi.advanceTimersByTime(1000)
    expect(handleClose).toHaveBeenCalled()

    vi.useRealTimers()
  })

  it("does not auto dismiss when duration is 0", () => {
    vi.useFakeTimers()
    const handleClose = vi.fn()

    render(<Toast visible message="Test message" duration={0} onClose={handleClose} testId="toast" />)

    vi.advanceTimersByTime(5000)
    expect(handleClose).not.toHaveBeenCalled()

    vi.useRealTimers()
  })

  it("renders different types with correct styling", () => {
    const { rerender } = render(<Toast visible type="success" message="Success" testId="toast" />)
    expect(screen.getByTestId("toast")).toHaveClass("bg-systemGreen-500")

    rerender(<Toast visible type="error" message="Error" testId="toast" />)
    expect(screen.getByTestId("toast")).toHaveClass("bg-systemRed-500")
  })
})
