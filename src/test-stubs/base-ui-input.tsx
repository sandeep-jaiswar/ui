import React from "react"

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(function BaseUIInput(
	props,
	ref
) {
	return <input ref={ref} {...props} />
})

Input.displayName = "BaseUIInput"

export default Input
