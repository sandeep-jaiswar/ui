import { useEffect, useRef } from "react"

/**
 * Traps keyboard focus within a DOM subtree.
 * Cycles focus through all focusable elements when Tab / Shift+Tab is pressed.
 * Returns a ref to attach to the container element.
 *
 * Focus returns to the previously focused element on cleanup (unmount).
 *
 * @example
 * function Modal({ isOpen }) {
 *   const trapRef = useFocusTrap(isOpen)
 *   return <div ref={trapRef} role="dialog">...</div>
 * }
 */
export function useFocusTrap(active: boolean) {
  const ref = useRef<HTMLElement | null>(null)
  const previousFocusRef = useRef<Element | null>(null)

  useEffect(() => {
    if (!active) return

    // Save the currently focused element to restore later
    previousFocusRef.current = document.activeElement

    const container = ref.current
    if (!container) return

    const FOCUSABLE_SELECTORS = [
      "a[href]",
      "area[href]",
      "button:not([disabled])",
      "input:not([disabled])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      "[tabindex]:not([tabindex='-1'])",
      "details > summary",
      "audio[controls]",
      "video[controls]",
    ].join(",")

    const getFocusable = (): HTMLElement[] =>
      Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS)).filter(
        (el) => !el.closest("[hidden]") && !el.closest("[aria-hidden='true']")
      )

    // Move focus into the container
    const firstFocusable = getFocusable()[0]
    firstFocusable?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return

      const focusable = getFocusable()
      if (focusable.length === 0) {
        e.preventDefault()
        return
      }

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey) {
        // Shift+Tab: going backward
        if (document.activeElement === first || !container.contains(document.activeElement)) {
          e.preventDefault()
          last.focus()
        }
      } else {
        // Tab: going forward
        if (document.activeElement === last || !container.contains(document.activeElement)) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      // Restore focus to the previously focused element
      if (previousFocusRef.current instanceof HTMLElement) {
        previousFocusRef.current.focus()
      }
    }
  }, [active])

  return ref
}
