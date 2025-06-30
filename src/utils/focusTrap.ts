/**
 * Focus trap utility for managing focus within modal components
 */

/**
 * Gets all focusable elements within a container
 * 
 * @param container - The container element to search within
 * @returns An array of focusable elements
 */
export function getFocusableElements(container: HTMLElement): HTMLElement[] {
  const focusableSelectors = [
    "button:not([disabled])",
    "[href]",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    '[tabindex]:not([tabindex="-1"]):not([disabled])',
    '[contenteditable="true"]',
  ].join(", ")

  return Array.from(container.querySelectorAll(focusableSelectors))
}

/**
 * Creates a focus trap within the specified container
 * 
 * @param container - The container element to trap focus within
 * @returns An object with activate and deactivate methods
 */
export function createFocusTrap(container: HTMLElement) {
  let isActive = false
  let previousActiveElement: HTMLElement | null = null

  /**
   * Activates the focus trap
   * 
   * @returns A cleanup function to remove event listeners
   */
  const activate = () => {
    if (isActive) return

    previousActiveElement = document.activeElement as HTMLElement
    isActive = true

    const focusableElements = getFocusableElements(container)
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    // Focus the first element
    if (firstElement) {
      firstElement.focus()
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isActive || event.key !== "Tab") return

      const currentFocusableElements = getFocusableElements(container)
      const firstFocusable = currentFocusableElements[0]
      const lastFocusable = currentFocusableElements[currentFocusableElements.length - 1]

      if (event.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstFocusable) {
          event.preventDefault()
          lastFocusable?.focus()
        }
      } else {
        // Tab
        if (document.activeElement === lastFocusable) {
          event.preventDefault()
          firstFocusable?.focus()
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }

  /**
   * Deactivates the focus trap
   */
  const deactivate = () => {
    if (!isActive) return

    isActive = false

    // Restore focus to the previously focused element
    if (previousActiveElement) {
      previousActiveElement.focus()
    }
  }

  return {
    activate,
    deactivate,
  }
}