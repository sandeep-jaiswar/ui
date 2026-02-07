// @vitest-environment jsdom
import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import { CoreProvider } from "../../core"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs"

describe("Tabs", () => {
  it("switches content on trigger click", () => {
    const handleValueChange = vi.fn()
    render(
      <CoreProvider>
        <Tabs defaultValue="tab1" onValueChange={handleValueChange}>
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
          <TabsContent value="tab2">Content 2</TabsContent>
        </Tabs>
      </CoreProvider>
    )

    expect(screen.getByText("Content 1")).toBeInTheDocument()
    expect(screen.queryByText("Content 2")).not.toBeInTheDocument()

    fireEvent.click(screen.getByText("Tab 2"))

    expect(screen.queryByText("Content 1")).not.toBeInTheDocument()
    expect(screen.getByText("Content 2")).toBeInTheDocument()
    expect(handleValueChange).toHaveBeenCalledWith("tab2")
  })

  it("renders controlled value", () => {
    render(
      <CoreProvider>
        <Tabs value="tab2">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
          <TabsContent value="tab2">Content 2</TabsContent>
        </Tabs>
      </CoreProvider>
    )
    expect(screen.getByText("Content 2")).toBeInTheDocument()
  })

  it("applies orientation attribute", () => {
    const { container } = render(
      <CoreProvider>
        <Tabs orientation="vertical">
          <TabsList>
            <TabsTrigger value="t1">T1</TabsTrigger>
          </TabsList>
        </Tabs>
      </CoreProvider>
    )
    // Implementation: data-orientation="vertical" on div
    const root = container.querySelector('[data-orientation="vertical"]')
    expect(root).toBeInTheDocument()
  })
})
