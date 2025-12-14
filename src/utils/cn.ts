import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * cn = className
 *
 * - clsx → conditional joining
 * - tailwind-merge → resolves Tailwind conflicts
 *
 * Example:
 * cn("p-2", condition && "p-4") → "p-4"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
