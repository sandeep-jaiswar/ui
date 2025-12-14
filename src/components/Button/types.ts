import type React from "react"

/**
 * Props for the Button component.
 * We keep this simple and compatible with a native button element so it is
 * straightforward to use in stories and tests.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  className?: string
  variant?: ""
}

export type { React }

export default ButtonProps
