/**
 * Merges class names together, filtering out falsy values.
 * Zero external dependencies — no clsx, no tailwind-merge.
 *
 * If you use Tailwind CSS in your project and need merge behavior,
 * you can override this utility with: twMerge(clsx(inputs))
 *
 * @example
 * cn("base-class", isActive && "active", undefined, "other-class")
 * // => "base-class active other-class"
 */
export function cn(...classes: (string | undefined | null | false | 0)[]): string {
  return classes.filter(Boolean).join(" ")
}
