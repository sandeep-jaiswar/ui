import { ReactNode } from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    variant?: "surface" | "ghost" | "glass";
    hoverEffect?: "lift" | "glow" | "none";
}
