import { expect } from "vitest"

// Ensure the global `expect` is set so `@testing-library/jest-dom` can
// register its matchers by calling `expect.extend`.
;(globalThis as any).expect = expect
// Use dynamic import so the assignment above runs before jest-dom executes
await import("@testing-library/jest-dom")

// re-export expect for convenience
export { expect }
