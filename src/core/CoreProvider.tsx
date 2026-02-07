import React, { createContext, useContext, ReactNode } from "react";

export interface CoreConfig {
    theme?: {
        primaryColor?: string;
        secondaryColor?: string;
        borderRadius?: string;
        fontFamily?: string;
    };
    behavior?: {
        reducedMotion?: boolean;
        animationSpeed?: "slow" | "normal" | "fast";
    };
    locale?: string;
}

const defaultCoreConfig: CoreConfig = {
    theme: {
        primaryColor: "blue", // Placeholder, ideally use CSS vars or Tailwind
        secondaryColor: "gray",
        borderRadius: "0.5rem",
        fontFamily: "sans-serif",
    },
    behavior: {
        reducedMotion: false,
        animationSpeed: "normal",
    },
    locale: "en-US",
};

const CoreContext = createContext<CoreConfig | undefined>(undefined);

export const useCore = () => {
    const context = useContext(CoreContext);
    if (!context) {
        throw new Error("useCore must be used within a CoreProvider");
    }
    return context;
};

export interface CoreProviderProps {
    config?: CoreConfig;
    children: ReactNode;
}

export const CoreProvider = ({ config, children }: CoreProviderProps) => {
    const finalConfig = { ...defaultCoreConfig, ...config };

    // In a real implementation, we might also inject CSS variables here based on the theme

    return (
        <CoreContext.Provider value={finalConfig}>
            {children}
        </CoreContext.Provider>
    );
};
