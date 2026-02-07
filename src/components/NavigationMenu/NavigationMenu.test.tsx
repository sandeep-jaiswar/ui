// @vitest-environment jsdom
import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "./NavigationMenu"

describe("NavigationMenu", () => {
  it("opens content on hover/click", async () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger value="item1">Item 1</NavigationMenuTrigger>
            <NavigationMenuContent value="item1">Content 1</NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )

    expect(screen.queryByText("Content 1")).not.toBeInTheDocument()

    // Simulate click (toggle)
    fireEvent.click(screen.getByText("Item 1"))
    expect(screen.getByText("Content 1")).toBeInTheDocument()

    // Simulate click again (close)
    fireEvent.click(screen.getByText("Item 1"))
    expect(screen.queryByText("Content 1")).not.toBeInTheDocument()

    // Hover
    fireEvent.mouseEnter(screen.getByText("Item 1"))
    expect(screen.getByText("Content 1")).toBeInTheDocument()

    // Simulate mouse leave from root
    fireEvent.mouseLeave(screen.getByRole("navigation"))
    expect(screen.queryByText("Content 1")).not.toBeInTheDocument()
  })

  it("renders links correctly", () => {
    render(<NavigationMenuLink href="/test">Link Text</NavigationMenuLink>)
    const link = screen.getByText("Link Text")
    expect(link).toHaveAttribute("href", "/test")
  })
})
