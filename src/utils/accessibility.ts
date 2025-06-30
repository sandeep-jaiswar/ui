/**
 * Accessibility utilities and helpers
 */

/**
 * Announces text to screen readers
 * 
 * @param message - The message to announce
 * @param priority - The priority level for the announcement
 */
export function announceToScreenReader(message: string, priority: "polite" | "assertive" = "polite") {
  const announcement = document.createElement("div")
  announcement.setAttribute("aria-live", priority)
  announcement.setAttribute("aria-atomic", "true")
  announcement.className = "sr-only"
  announcement.textContent = message

  document.body.appendChild(announcement)

  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement)
  }, 1000)
}

/**
 * Generates unique IDs for accessibility
 * 
 * @param prefix - Optional prefix for the generated ID
 * @returns A unique ID string
 */
let idCounter = 0
export function generateId(prefix: string = "id"): string {
  return `${prefix}-${++idCounter}`
}

/**
 * Manages body scroll lock
 * 
 * @returns A function to unlock body scroll
 */
export function lockBodyScroll() {
  const scrollY = window.scrollY
  document.body.style.position = "fixed"
  document.body.style.top = `-${scrollY}px`
  document.body.style.width = "100%"
  document.body.style.overflow = "hidden"

  return () => {
    document.body.style.position = ""
    document.body.style.top = ""
    document.body.style.width = ""
    document.body.style.overflow = ""
    window.scrollTo(0, scrollY)
  }
}

/**
 * Checks if element is visible and focusable
 * 
 * @param element - The HTML element to check
 * @returns Whether the element is focusable
 */
export function isElementFocusable(element: HTMLElement): boolean {
  if (element.hasAttribute("disabled") || element.getAttribute("aria-disabled") === "true") {
    return false
  }

  const style = window.getComputedStyle(element)
  if (style.display === "none" || style.visibility === "hidden") {
    return false
  }

  return true
}