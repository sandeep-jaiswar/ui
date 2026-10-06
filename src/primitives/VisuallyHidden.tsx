import type { CSSProperties, ReactNode } from "react"

interface VisuallyHiddenProps {
  children: ReactNode
  /** Make the element focusable while hidden (useful for skip links). */
  focusable?: boolean
}

const hiddenStyle: CSSProperties = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: 0,
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: 0,
}

const focusableStyle: CSSProperties = {
  ...hiddenStyle,
  // When focused (e.g. skip links), reveal the element
}

/**
 * Hides content visually while keeping it accessible to screen readers.
 * Uses the clip-path pattern recommended by modern a11y guidance.
 *
 * @example
 * <button>
 *   <VisuallyHidden>Close dialog</VisuallyHidden>
 *   <CloseIcon aria-hidden />
 * </button>
 */
export function VisuallyHidden({ children, focusable = false }: VisuallyHiddenProps) {
  return (
    <span
      style={focusable ? focusableStyle : hiddenStyle}
      {...(focusable && {
        onFocus: (e) => {
          Object.assign(e.currentTarget.style, {
            position: "static",
            width: "auto",
            height: "auto",
            padding: "",
            margin: "",
            overflow: "visible",
            clip: "auto",
            whiteSpace: "normal",
          })
        },
        onBlur: (e) => {
          Object.assign(e.currentTarget.style, hiddenStyle)
        },
      })}
    >
      {children}
    </span>
  )
}
