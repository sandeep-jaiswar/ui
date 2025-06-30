/**
 * Animation utilities with reduced motion support
 */

/**
 * Checks if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

/**
 * Gets animation duration based on user preferences
 */
export function getAnimationDuration(defaultDuration: number): number {
  return prefersReducedMotion() ? 0 : defaultDuration
}

/**
 * Animation classes with reduced motion support
 */
export const animations = {
  fadeIn: prefersReducedMotion() ? "" : "animate-fade-in",
  scaleIn: prefersReducedMotion() ? "" : "animate-scale-in",
  slideUp: prefersReducedMotion() ? "" : "animate-slide-up",
  bounceIn: prefersReducedMotion() ? "" : "animate-bounce-in",
}

/**
 * Transition classes with reduced motion support
 */
export const transitions = {
  default: prefersReducedMotion() ? "" : "transition-all duration-200 ease-ios",
  fast: prefersReducedMotion() ? "" : "transition-all duration-150 ease-ios",
  slow: prefersReducedMotion() ? "" : "transition-all duration-300 ease-ios",
}
