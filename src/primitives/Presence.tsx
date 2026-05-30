import React, { useEffect, useRef, useState, type ReactNode } from "react"

interface PresenceProps {
  present: boolean
  children: ReactNode | ((props: { present: boolean }) => ReactNode)
}

/**
 * Manages mount/unmount lifecycle with CSS animation awareness.
 * Keeps children mounted until any exit animations complete.
 *
 * Components signal animations via `data-state="open" | "closed"`.
 * Presence waits for the `animationend` / `transitionend` events
 * on the root child element before unmounting.
 *
 * @example
 * <Presence present={isOpen}>
 *   <div
 *     data-state={isOpen ? "open" : "closed"}
 *     style={{
 *       animation: 'data-[state=open]:fade-in 200ms, data-[state=closed]:fade-out 200ms'
 *     }}
 *   >
 *     Content
 *   </div>
 * </Presence>
 */
export function Presence({ present, children }: PresenceProps) {
  const [mounted, setMounted] = useState(present)
  const elementRef = useRef<Element | null>(null)
  const prevPresentRef = useRef(present)

  useEffect(() => {
    prevPresentRef.current = present

    const el = elementRef.current

    if (present) {
      setMounted(true)
      return
    }

    // If there's no element or no animation/transition, unmount immediately
    if (!el) {
      setMounted(false)
      return
    }

    // Check for active CSS animations or transitions
    const styles = window.getComputedStyle(el)
    const hasAnimation =
      styles.animationName !== "none" && styles.animationDuration !== "0s" && styles.animationDuration !== "0ms"
    const hasTransition = styles.transitionDuration !== "0s" && styles.transitionDuration !== "0ms"

    if (!hasAnimation && !hasTransition) {
      setMounted(false)
      return
    }

    // Wait for animation/transition to finish before unmounting
    let done = false
    const onEnd = () => {
      if (!done) {
        done = true
        setMounted(false)
      }
    }

    el.addEventListener("animationend", onEnd, { once: true })
    el.addEventListener("transitionend", onEnd, { once: true })

    // Fallback timeout in case events don't fire
    const maxDuration = Math.max(
      parseFloat(styles.animationDuration) * 1000,
      parseFloat(styles.transitionDuration) * 1000
    )
    const timeout = setTimeout(onEnd, maxDuration + 50)

    return () => {
      el.removeEventListener("animationend", onEnd)
      el.removeEventListener("transitionend", onEnd)
      clearTimeout(timeout)
    }
  }, [present])

  if (!mounted) return null

  if (typeof children === "function") {
    return <>{children({ present })}</>
  }

  // Clone the child to attach our ref for animation detection
  const child = React.Children.only(children) as React.ReactElement<
    React.HTMLAttributes<Element> & { ref?: React.Ref<Element> }
  >
  return React.cloneElement(child, {
    ref: (node: Element | null) => {
      elementRef.current = node
      // Forward existing ref if any
      const existingRef = (child as { ref?: React.Ref<Element> }).ref
      if (typeof existingRef === "function") existingRef(node)
      else if (existingRef && typeof existingRef === "object") {
        ;(existingRef as React.MutableRefObject<Element | null>).current = node
      }
    },
  })
}
