import { Input as BaseInput } from "@base-ui/react/input"
import { cn } from "../../utils/cn"
import type { InputProps } from "./types"

const Input = ({ className, ...props }: InputProps) => {
  return <BaseInput className={cn(className)} {...props} />
}

Input.displayName = "Input"

export default Input
