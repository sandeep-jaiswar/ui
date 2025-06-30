import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import { describe, expect, it, vi } from "vitest"
import { Image } from "../src/Image"

describe("Image", () => {
  it("renders with required props", () => {
    render(<Image src="test.jpg" alt="Test image" testId="image" />)
    const image = screen.getByAltText("Test image")
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute("src", "test.jpg")
  })

  it("applies aspect ratio classes", () => {
    const { rerender } = render(<Image src="test.jpg" alt="Test" aspectRatio="square" testId="image" />)
    expect(screen.getByTestId("image")).toHaveClass("aspect-square")

    rerender(<Image src="test.jpg" alt="Test" aspectRatio="16:9" testId="image" />)
    expect(screen.getByTestId("image")).toHaveClass("aspect-video")
  })

  it("applies object fit classes", () => {
    render(<Image src="test.jpg" alt="Test" objectFit="contain" testId="image" />)
    const image = screen.getByAltText("Test")
    expect(image).toHaveClass("object-contain")
  })

  it("applies rounded classes", () => {
    render(<Image src="test.jpg" alt="Test" rounded="full" testId="image" />)
    expect(screen.getByTestId("image")).toHaveClass("rounded-full")
  })

  it("shows fallback on error", () => {
    const fallback = <div>Fallback content</div>
    render(<Image src="invalid.jpg" alt="Test" fallback={fallback} testId="image" />)

    const image = screen.getByAltText("Test")
    fireEvent.error(image)

    expect(screen.getByText("Fallback content")).toBeInTheDocument()
  })

  it("calls onError when image fails to load", () => {
    const handleError = vi.fn()
    render(<Image src="invalid.jpg" alt="Test" onError={handleError} testId="image" />)

    const image = screen.getByAltText("Test")
    fireEvent.error(image)

    expect(handleError).toHaveBeenCalled()
  })

  it("shows loading state initially", () => {
    render(<Image src="test.jpg" alt="Test" testId="image" />)
    const container = screen.getByTestId("image")
    const loadingDiv = container.querySelector(".animate-pulse")
    expect(loadingDiv).toBeInTheDocument()
  })
})
