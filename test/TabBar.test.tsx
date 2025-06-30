import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import { describe, expect, it, vi } from "vitest"
import { TabBar } from "../src/TabBar"

const mockItems = [
  { id: "home", label: "Home", icon: "home" },
  { id: "search", label: "Search", icon: "search" },
  { id: "profile", label: "Profile", icon: "settings", badge: 3 },
]

describe("TabBar", () => {
  it("renders all tab items", () => {
    render(<TabBar items={mockItems} testId="tabbar" />)
    expect(screen.getByText("Home")).toBeInTheDocument()
    expect(screen.getByText("Search")).toBeInTheDocument()
    expect(screen.getByText("Profile")).toBeInTheDocument()
  })

  it("handles tab selection", () => {
    const handleChange = vi.fn()
    render(<TabBar items={mockItems} onChange={handleChange} testId="tabbar" />)

    fireEvent.click(screen.getByText("Search"))
    expect(handleChange).toHaveBeenCalledWith("search")
  })

  it("shows badge when item has badge", () => {
    render(<TabBar items={mockItems} testId="tabbar" />)
    expect(screen.getByText("3")).toBeInTheDocument()
  })

  it("shows 99+ for badges over 99", () => {
    const itemsWithLargeBadge = [{ id: "notifications", label: "Notifications", badge: 150 }]
    render(<TabBar items={itemsWithLargeBadge} testId="tabbar" />)
    expect(screen.getByText("99+")).toBeInTheDocument()
  })

  it("handles disabled tabs", () => {
    const itemsWithDisabled = [...mockItems, { id: "disabled", label: "Disabled", disabled: true }]
    const handleChange = vi.fn()
    render(<TabBar items={itemsWithDisabled} onChange={handleChange} testId="tabbar" />)

    const disabledTab = screen.getByText("Disabled")
    expect(disabledTab).toBeDisabled()

    fireEvent.click(disabledTab)
    expect(handleChange).not.toHaveBeenCalledWith("disabled")
  })
})
