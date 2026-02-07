// @vitest-environment jsdom
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { CoreProvider } from "../../core"
import {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./Dialog"

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

  it("has accessible labels", async () => {
    render(
      <CoreProvider>
        <Dialog open={true}>
          <DialogPortal>
            <DialogContent>
              <DialogTitle>My Title</DialogTitle>
              <DialogDescription>My Description</DialogDescription>
            </DialogContent>
          </DialogPortal>
        </Dialog>
      </CoreProvider>
    )

    const dialog = screen.getByRole("dialog")
    expect(dialog).toHaveAttribute("aria-labelledby")
    expect(dialog).toHaveAttribute("aria-describedby")

    // Check if the IDs match
    const titleId = dialog.getAttribute("aria-labelledby")
    const descId = dialog.getAttribute("aria-describedby")

    expect(document.getElementById(titleId!)).toHaveTextContent("My Title")
    expect(document.getElementById(descId!)).toHaveTextContent("My Description")
  })
})
