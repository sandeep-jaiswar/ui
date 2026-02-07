import { RefObject, RefCallback } from "react"

type Ref<T> = RefObject<T> | RefCallback<T> | null

export function mergeRefs<T>(...refs: Ref<T>[]): RefCallback<T> {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value)
      } else if (ref != null) {
        ;(ref as RefObject<T | null>).current = value
      }
    })
  }
}

export function useMergeRefs<T>(...refs: Ref<T>[]) {
  // We can't use simple function return because it creates a new function on every render
  // Use simple mergeRefs utility inline or memoized?
  // Actually, just returning the function is fine for ref prop usually,
  // but better to memoize if refs don't change.
  // However, refs array changes...
  // Let's keep it simple: just export the mergeRefs utility function and use it inside components.
  // Or return the function directly.
  return mergeRefs(...refs)
}
