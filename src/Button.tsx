import "./Button.css";

export interface ButtonProps extends HTMLButtonElement {
  size: "large" | "small";
}

const Button = ({ size, ...rest }: ButtonProps) => {
  return (
    <button {...rest} className={`button ${size}`}>
      button
    </button>
  );
};

export default Button;
