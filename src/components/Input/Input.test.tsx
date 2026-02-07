// @vitest-environment jsdom
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Input } from "./index";
import React from "react";

describe("Input", () => {
  it("renders and accepts text", () => {
    render(<Input placeholder="Type here" />);
    const input = screen.getByPlaceholderText("Type here");
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "Hello" } });
    expect(input).toHaveValue("Hello");
  });

  it("applies custom className", () => {
    render(<Input className="custom-class" data-testid="input" />);
    expect(screen.getByTestId("input")).toHaveClass("custom-class");
  });

  it("supports controlled mode", () => {
    const handleChange = vi.fn();
    const { rerender } = render(<Input value="Initial" onChange={handleChange} data-testid="input" />);
    const input = screen.getByTestId("input");
    expect(input).toHaveValue("Initial");

    fireEvent.change(input, { target: { value: "Changed" } });
    expect(handleChange).toHaveBeenCalled();

    // Value shouldn't change without prop update in controlled mode (React behavior)
    // But testing library fires the event. We check the mock.
  });

  it("supports different types", () => {
    render(<Input type="password" data-testid="password" />);
    expect(screen.getByTestId("password")).toHaveAttribute("type", "password");
  });

  it("handles disabled state", () => {
    render(<Input disabled placeholder="Disabled" />);
    expect(screen.getByPlaceholderText("Disabled")).toBeDisabled();
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
