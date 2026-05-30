import React from "react"
import { cn } from "../../utils/cn"
import type { InputProps } from "./types"
import "./input.css"

/**
 * Input component for text entry.
 * Supports all standard HTML input attributes.
 * Zero external dependencies — pure native <input>.
 *
 * @example
 * <Input placeholder="Enter your name" onChange={handleChange} />
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return <input ref={ref} className={cn("input", className)} {...props} />
})

Input.displayName = "Input"

export default Input
