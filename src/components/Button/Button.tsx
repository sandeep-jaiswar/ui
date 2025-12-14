import { Button as BaseButton } from "@base-ui/react/button"
import { cn } from "../../utils/cn"
import type { ButtonProps } from "./types"

const Button = ({ className, ...props }: ButtonProps) => {
  return <BaseButton className={cn(className)} {...props} />
}

Button.displayName = "Button"

export default Button
