import React, { ReactNode, useEffect, useState } from "react";
import { useCore } from "../core";
import { cn } from "../utils/cn";

interface MotionPrimitiveProps {
    children: ReactNode;
    animation?: "fade" | "slide-up" | "scale" | "none";
    delay?: number;
    className?: string; // Allow extending classes
}

export const MotionPrimitive = ({
    children,
    animation = "fade",
    delay = 0,
    className = "",
}: MotionPrimitiveProps) => {
    const { behavior } = useCore();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);
        return () => clearTimeout(timer);
    }, [delay]);

    if (behavior?.reducedMotion || animation === "none") {
        return <div className={className}>{children}</div>;
    }

    // Base styles
    let baseStyle: React.CSSProperties = {
        transition: `opacity 0.5s ease-out, transform 0.5s ease-out`,
        opacity: isVisible ? 1 : 0,
    };

    if (animation === "slide-up") {
        baseStyle.transform = isVisible ? "translateY(0)" : "translateY(20px)";
    } else if (animation === "scale") {
        baseStyle.transform = isVisible ? "scale(1)" : "scale(0.95)";
    }

    // Use cn to handle classNames safely
    return (
        <div style={baseStyle} className={cn(className)}>
            {children}
        </div>
    );
};
