// @vitest-environment jsdom
import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import { CoreProvider } from "../../core"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "./Select"

describe("Select", () => {
  it("renders trigger with placeholder", () => {
    render(
      <CoreProvider>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Pick a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
          </SelectContent>
        </Select>
      </CoreProvider>
    )
    expect(screen.getByRole("button")).toHaveTextContent("Pick a fruit")
  })

  it("opens content on click and selects item", () => {
    const handleChange = vi.fn()
    render(
      <CoreProvider>
        <Select onValueChange={handleChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
          </SelectContent>
        </Select>
      </CoreProvider>
    )

    const trigger = screen.getByRole("button")
    fireEvent.click(trigger)

    const appleOption = screen.getByText("Apple")
    expect(appleOption).toBeInTheDocument()

    fireEvent.click(appleOption)
    expect(handleChange).toHaveBeenCalledWith("apple")

    // Should close after selection (logic in component) - hard to test portal removal in jsdom without wait,
    // but we can check if trigger updates if we were using a label mapping component.
    // Since we blindly show value, let's verify handleChange called.
  })

  it("renders selected value", () => {
    render(
      <CoreProvider>
        <Select defaultValue="banana">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
          </SelectContent>
        </Select>
      </CoreProvider>
    )
    expect(screen.getByRole("button")).toHaveTextContent("banana")
  })
})
