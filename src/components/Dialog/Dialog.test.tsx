// @vitest-environment jsdom
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { CoreProvider } from "../../core"
import { Dialog, DialogTrigger, DialogPortal, DialogOverlay, DialogContent } from "./Dialog"

describe("Dialog", () => {
  it("opens when trigger is clicked", async () => {
    render(
      <CoreProvider>
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogPortal>
            <DialogOverlay data-testid="overlay" />
            <DialogContent>Content</DialogContent>
          </DialogPortal>
        </Dialog>
      </CoreProvider>
    )

    expect(screen.queryByText("Content")).not.toBeInTheDocument()

    fireEvent.click(screen.getByText("Open"))

    await waitFor(() => {
      expect(screen.getByText("Content")).toBeInTheDocument()
    })

    // Close via overlay
    const overlay = screen.getByTestId("overlay")
    fireEvent.click(overlay)

    await waitFor(() => {
      expect(screen.queryByText("Content")).not.toBeInTheDocument()
    })
  })

  it("renders controlled open state", () => {
    render(
      <CoreProvider>
        <Dialog open={true}>
          <DialogPortal>
            <DialogContent>Controlled Content</DialogContent>
          </DialogPortal>
        </Dialog>
      </CoreProvider>
    )
    expect(screen.getByText("Controlled Content")).toBeInTheDocument()
  })
})
