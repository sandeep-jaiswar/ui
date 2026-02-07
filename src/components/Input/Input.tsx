import React from "react"
import { Input as BaseInput } from "@base-ui/react/input"
import { cn } from "../../utils/cn"
import type { InputProps } from "./types"

/**
 * Input component for text entry.
 * Wraps @base-ui/react/input for accessibility and default behaviors.
 * Supports all standard HTML input attributes.
 *
 * @example
 * <Input placeholder="Enter your name" onChange={handleChange} />
 *
 * @example
 * <Input type="password" />
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return <BaseInput ref={ref} className={cn("flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className)} {...props} />
})

Input.displayName = "Input"

export default Input
