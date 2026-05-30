// @vitest-environment jsdom
import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import { CoreProvider } from "../../core"
import { RadioGroup, Radio } from "./Radio"

describe("Radio", () => {
  it("renders group and options", () => {
    render(
      <CoreProvider>
        <RadioGroup name="colors" defaultValue="blue">
          <Radio value="blue" label="Blue" />
          <Radio value="red" label="Red" />
        </RadioGroup>
      </CoreProvider>
    )
    expect(screen.getByLabelText("Blue")).toBeChecked()
    expect(screen.getByLabelText("Red")).not.toBeChecked()
  })

  it("changes selection on click", () => {
    const handleChange = vi.fn()
    render(
      <CoreProvider>
        <RadioGroup name="fruits" onValueChange={handleChange}>
          <Radio value="apple" label="Apple" />
          <Radio value="banana" label="Banana" />
        </RadioGroup>
      </CoreProvider>
    )
    const banana = screen.getByLabelText("Banana")
    fireEvent.click(banana)
    expect(handleChange).toHaveBeenCalledWith("banana")
    expect(banana).toBeChecked()
  })

  it("respects group disabled state", () => {
    render(
      <CoreProvider>
        <RadioGroup name="opts" disabled>
          <Radio value="1" label="One" />
          <Radio value="2" label="Two" />
        </RadioGroup>
      </CoreProvider>
    )
    expect(screen.getByLabelText("One")).toBeDisabled()
    expect(screen.getByLabelText("Two")).toBeDisabled()
  })

  it("renders custom intent", () => {
    const { container } = render(
      <CoreProvider>
        <RadioGroup intent="danger">
          <Radio value="1" label="Danger Option" />
        </RadioGroup>
      </CoreProvider>
    )
    const radio = container.querySelector("input")
    // intentClasses.danger logic
    expect(radio).toHaveAttribute("data-intent", "danger")
  })
})
