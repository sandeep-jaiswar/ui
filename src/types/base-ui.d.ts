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

declare module "@base-ui/react/accordion" {
  import * as React from "react"

  export const Accordion: React.ComponentType<React.HTMLAttributes<HTMLDivElement> & Record<string, unknown>>
  export const AccordionItem: React.ComponentType<
    React.HTMLAttributes<HTMLDivElement> & { value: string; disabled?: boolean }
  >
  export const AccordionTrigger: React.ComponentType<React.ButtonHTMLAttributes<HTMLButtonElement>>
  export const AccordionContent: React.ComponentType<React.HTMLAttributes<HTMLDivElement>>

  export default Accordion
}
