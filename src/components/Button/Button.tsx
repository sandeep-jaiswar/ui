import { Button as BaseButton } from "@base-ui/react/button"
import type { ButtonProps } from "./types"

const Button = ({ className, ...props }: ButtonProps) => {
  return <BaseButton className={className} {...props} />
}

Button.displayName = "Button"

export default Button
