declare module "@base-ui/react/button" {
  import * as React from "react"
  export const Button: React.ForwardRefExoticComponent<
    React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>
  >
  export default Button
}

declare module "@base-ui/react/input" {
  import * as React from "react"
  export const Input: React.ForwardRefExoticComponent<
    React.InputHTMLAttributes<HTMLInputElement> & React.RefAttributes<HTMLInputElement>
  >
  export default Input
}
