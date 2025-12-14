import type React from "react"

/**
 * Props for the Button component.
 * We keep this simple and compatible with a native button element so it is
 * straightforward to use in stories and tests.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  className?: string

  /** Meaning-driven intent (priority/risk/outcome). */
  intent?: ButtonIntent

  /** Visual treatment independent of intent. */
  variant?: ButtonVariant | ""

  /** Density control. */
  size?: ButtonSize

  /** Shape control. */
  shape?: ButtonShape

  /** Shows a loading spinner and disables interaction while loading. */
  loading?: boolean

  /** Optional leading icon. */
  leadingIcon?: React.ReactNode

  /** Optional trailing icon. */
  trailingIcon?: React.ReactNode
}

export type ButtonIntent = "primary" | "secondary" | "tertiary" | "danger" | "success" | "warning"

export type ButtonVariant = "solid" | "outline" | "ghost" | "link"

export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl"

export type ButtonShape = "rounded" | "pill" | "square"

export type { React }

export default ButtonProps
