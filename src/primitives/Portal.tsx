import type { ReactNode } from "react"
import { createPortal } from "react-dom"

interface PortalProps {
  children: ReactNode
  /** Target container. Defaults to document.body. */
  container?: Element | DocumentFragment | null
}

/**
 * Renders children outside the current DOM hierarchy via a React portal.
 * Returns null during SSR or when the container is unavailable.
 *
 * @example
 * <Portal>
 *   <div style={{ position: "fixed", inset: 0 }}>Overlay content</div>
 * </Portal>
 */
export function Portal({ children, container }: PortalProps) {
  if (typeof document === "undefined") return null
  const target = container ?? document.body
  if (!target) return null
  return createPortal(children, target)
}
