import React, { ReactNode, forwardRef } from "react"
import { useCore } from "../core"
import { cn } from "../utils/cn"

interface InteractiveContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  variant?: "surface" | "ghost" | "glass" // Glassmorphism support
  hoverEffect?: "lift" | "glow" | "none"
}

export const InteractiveContainer = forwardRef<HTMLDivElement, InteractiveContainerProps>(
  ({ children, variant = "surface", hoverEffect = "lift", className = "", style, ...props }, ref) => {
    const { theme } = useCore()

    // Basic styles based on variant (inline for portability, ideally Tailwind classes)
    const getVariantStyles = () => {
      switch (variant) {
        case "glass":
          return {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
          }
        case "ghost":
          return {
            background: "transparent",
          }
        case "surface":
        default:
          return {
            background: "#ffffff", // Should use theme.primaryColor contextually
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            border: "1px solid #e5e7eb",
          }
      }
    }

    // const getHoverStyles = () => {
    //     return {};
    // }

    return (
      <div
        ref={ref}
        {...props}
        data-variant={variant}
        data-hover-effect={hoverEffect}
        className={cn("interactive-container cursor-pointer transition-all duration-300 ease-in-out", className)}
        style={{
          padding: "1rem",
          borderRadius: theme?.borderRadius || "0.5rem",
          ...getVariantStyles(),
          ...style,
        }}
      >
        {/* We can inject a style tag for the hover effects if we want to be purely self-contained, 
            but that's messy. Let's rely on standard CSS/Tailwind being present or users adding global styles.
            For now, let's add a simple inline style for the 'lift' effect that works via simple CSS in a real app.
            
            Actually, to ensure "WOW" factor without external CSS, let's add a style block.
        */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .interactive-container:hover[data-hover-effect="lift"] {
                transform: translateY(-4px);
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            }
            .interactive-container:hover[data-hover-effect="glow"] {
                box-shadow: 0 0 15px ${theme?.primaryColor || "blue"};
            }
        `,
          }}
        />
        {children}
      </div>
    )
  }
)
InteractiveContainer.displayName = "InteractiveContainer"
