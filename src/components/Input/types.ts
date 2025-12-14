import type React from "react"

/**
 * Props for the Input component.
 * We keep this simple and compatible with a native input element so it is
 * straightforward to use in stories and tests.
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export type { React }

export default InputProps
