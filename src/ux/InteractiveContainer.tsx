import React, { ReactNode, forwardRef } from "react"
// import { useCore } from "../core"
import { cn } from "../utils/cn"

interface InteractiveContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  variant?: "surface" | "ghost" | "glass" // Glassmorphism support
  hoverEffect?: "lift" | "glow" | "none"
}

export const InteractiveContainer = forwardRef<HTMLDivElement, InteractiveContainerProps>(
  ({ children, variant = "surface", hoverEffect = "lift", className = "", style, ...props }, ref) => {
    // const { theme } = useCore()

    // Basic styles based on variant (mapped to classes where possible, or inline if specific)
    const getVariantClasses = () => {
      switch (variant) {
        case "glass":
          return "bg-background/60 backdrop-blur-md border border-border/50 shadow-sm"
        case "ghost":
          return "hover:bg-accent hover:text-accent-foreground"
        case "surface":
        default:
          return "bg-card text-card-foreground border border-border shadow-sm"
      }
    }

    return (
      <div
        ref={ref}
        {...props}
        data-variant={variant}
        data-hover-effect={hoverEffect}
        className={cn(
          "interactive-container cursor-pointer transition-all duration-300 ease-in-out",
          getVariantClasses(),
          className
        )}
        style={
          {
            padding: "1rem",
            borderRadius: "var(--radius)",
            ["--interactive-glow-color" as string]: "hsl(var(--primary))",
            ...style,
          } as React.CSSProperties
        }
      >
        {/* We can inject a style tag for the hover effects if we want to be purely self-contained, 
            but that's messy. Let's rely on standard CSS/Tailwind being present or users adding global styles.
            For now, let's add a simple inline style for the 'lift' effect that works via simple CSS in a real app.
            
            Actually, to ensure "WOW" factor without external CSS, let's add a style block.
        */}
        <style>
          {`
            .interactive-container:hover[data-hover-effect="lift"] {
                transform: translateY(-4px);
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            }
            .interactive-container:hover[data-hover-effect="glow"] {
                box-shadow: 0 0 15px var(--interactive-glow-color);
            }
        `}
        </style>
        {children}
      </div>
    )
  }
)
InteractiveContainer.displayName = "InteractiveContainer"
