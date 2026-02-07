import React, { createContext, useContext, useEffect, ReactNode } from "react"

export interface CoreConfig {
  theme?: {
    primaryColor?: string
    secondaryColor?: string
    borderRadius?: string
    fontFamily?: string
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
    primaryColor: "blue",
    secondaryColor: "gray",
    borderRadius: "0.5rem",
    fontFamily: "sans-serif",
    mode: "dark",
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

export const CoreProvider = ({ config, children }: CoreProviderProps) => {
  const finalConfig = {
    ...defaultCoreConfig,
    ...config,
    theme: { ...defaultCoreConfig.theme, ...config?.theme },
    behavior: { ...defaultCoreConfig.behavior, ...config?.behavior },
  }

  useEffect(() => {
    const root = window.document.documentElement
    const mode = finalConfig.theme?.mode || "dark"

    root.classList.remove("light", "dark")

    if (mode === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      root.classList.add(systemTheme)
      return
    }

    root.classList.add(mode)
  }, [finalConfig.theme?.mode])

  return <CoreContext.Provider value={finalConfig}>{children}</CoreContext.Provider>
}
