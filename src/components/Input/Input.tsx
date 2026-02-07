import React from "react"
import { cn } from "../../utils/cn"
import type { InputProps } from "./types"

/**
 * Input component for text entry.
 * Supports standard HTML input attributes.
 *
 * @example
 * <Input placeholder="Enter your name" onChange={handleChange} />
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 dark:focus:ring-blue-600",
        className
      )}
      {...props}
    />
  )
})

Input.displayName = "Input"

export default Input
