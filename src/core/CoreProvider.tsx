import { createContext, useContext, useEffect, type ReactNode } from "react"

export interface CoreConfig {
  theme?: {
    primaryColor?: string
    borderRadius?: string
    fontFamily?: string
    /** Controls the color scheme. "system" respects OS preference. */
    mode?: "light" | "dark" | "system"
  }
  behavior?: {
    reducedMotion?: boolean
    animationSpeed?: "slow" | "normal" | "fast"
  }
  locale?: string
}

const defaultCoreConfig: CoreConfig = {
  theme: {
    borderRadius: "0.5rem",
    fontFamily: "sans-serif",
    mode: "system",
  },
  behavior: {
    reducedMotion: false,
    animationSpeed: "normal",
  },
  locale: "en-US",
}

const CoreContext = createContext<CoreConfig | undefined>(undefined)

export const useCore = () => {
  const context = useContext(CoreContext)
  if (!context) {
    throw new Error("useCore must be used within a CoreProvider")
  }
  return context
}

export interface CoreProviderProps {
  config?: CoreConfig
  children: ReactNode
}

/**
 * CoreProvider initializes the design system.
 *
 * It sets `data-theme` on <html> (rather than toggling CSS class names),
 * which is compatible with the token system in tokens.css.
 *
 * @example
 * <CoreProvider config={{ theme: { mode: "dark" } }}>
 *   <App />
 * </CoreProvider>
 */
export const CoreProvider = ({ config, children }: CoreProviderProps) => {
  const finalConfig: CoreConfig = {
    ...defaultCoreConfig,
    ...config,
    theme: { ...defaultCoreConfig.theme, ...config?.theme },
    behavior: { ...defaultCoreConfig.behavior, ...config?.behavior },
  }

  const mode = finalConfig.theme?.mode ?? "system"

  useEffect(() => {
    const root = window.document.documentElement

    if (mode === "system") {
      root.setAttribute("data-theme", "system")
      return
    }

    root.setAttribute("data-theme", mode)

    return () => {
      root.removeAttribute("data-theme")
    }
  }, [mode])

  // Apply animation speed via CSS custom property
  useEffect(() => {
    const root = window.document.documentElement
    const speed = finalConfig.behavior?.animationSpeed ?? "normal"
    const multiplier = speed === "slow" ? 2 : speed === "fast" ? 0.5 : 1

    root.style.setProperty("--ui-animation-speed", String(multiplier))

    return () => {
      root.style.removeProperty("--ui-animation-speed")
    }
  }, [finalConfig.behavior?.animationSpeed])

  // Apply reduced motion preference programmatically
  useEffect(() => {
    const root = window.document.documentElement
    if (finalConfig.behavior?.reducedMotion) {
      root.setAttribute("data-reduced-motion", "true")
    } else {
      root.removeAttribute("data-reduced-motion")
    }
  }, [finalConfig.behavior?.reducedMotion])

  return <CoreContext.Provider value={finalConfig}>{children}</CoreContext.Provider>
}
