import type React from "react";
import "./Button.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "large" | "small";
  background?: "red" | "white" | "black" | "grey";
  width?: "full" | "max-content";
  children: string;
}

const Button = ({
  size,
  background,
  width = "max-content",
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button {...rest} className={`button ${size} ${background} ${width}`}>
      {children}
    </button>
  );
};

export default Button;
