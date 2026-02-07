import { useEffect, useRef } from "react"

export const useFocusTrap = (enabled: boolean = true) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!enabled) return

    const element = ref.current
    if (!element) return

    // Simple focus trap implementation
    // Find all focusable elements
    const focusableElements = element.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    // Focus the first element when enabled
    if (firstElement) {
      // use requestAnimationFrame to ensure element is visible/interactive
      requestAnimationFrame(() => firstElement.focus())
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement?.focus()
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement?.focus()
          }
        }
      }
    }

    element.addEventListener("keydown", handleKeyDown)
    return () => element.removeEventListener("keydown", handleKeyDown)
  }, [enabled])

  return ref
}
