import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import { describe, expect, it, vi } from "vitest"
import { Alert } from "../src/Alert"

describe("Alert", () => {
  it("renders when visible", () => {
    render(<Alert visible title="Test Alert" message="This is a test message" testId="alert" />)
    expect(screen.getByTestId("alert")).toBeInTheDocument()
    expect(screen.getByText("Test Alert")).toBeInTheDocument()
    expect(screen.getByText("This is a test message")).toBeInTheDocument()
  })

  it("does not render when not visible", () => {
    render(<Alert visible={false} title="Test Alert" testId="alert" />)
    expect(screen.queryByTestId("alert")).not.toBeInTheDocument()
  })

  it("renders actions", () => {
    const actions = [
      { label: "Cancel", style: "cancel" as const, onPress: vi.fn() },
      { label: "Delete", style: "destructive" as const, onPress: vi.fn() },
    ]

    render(<Alert visible title="Confirm Delete" actions={actions} />)

    expect(screen.getByText("Cancel")).toBeInTheDocument()
    expect(screen.getByText("Delete")).toBeInTheDocument()
  })

  it("calls action onPress when clicked", () => {
    const onPress = vi.fn()
    const actions = [{ label: "OK", onPress }]

    render(<Alert visible title="Test" actions={actions} />)

    fireEvent.click(screen.getByText("OK"))
    expect(onPress).toHaveBeenCalled()
  })

  it("calls onClose when backdrop is clicked", () => {
    const onClose = vi.fn()
    render(<Alert visible title="Test" onClose={onClose} testId="alert" />)

    fireEvent.click(screen.getByTestId("alert"))
    expect(onClose).toHaveBeenCalled()
  })

  it("calls onClose when escape key is pressed", () => {
    const onClose = vi.fn()
    render(<Alert visible title="Test" onClose={onClose} />)

    fireEvent.keyDown(document, { key: "Escape" })
    expect(onClose).toHaveBeenCalled()
  })

  it("renders as action sheet when type is actionSheet", () => {
    const actions = [
      { label: "Option 1", onPress: vi.fn() },
      { label: "Option 2", onPress: vi.fn() },
    ]

    render(<Alert visible type="actionSheet" title="Choose Option" actions={actions} />)

    // Action sheet should render buttons differently
    expect(screen.getByText("Option 1")).toBeInTheDocument()
    expect(screen.getByText("Option 2")).toBeInTheDocument()
  })
})
