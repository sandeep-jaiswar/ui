import React from "react"

export const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(function BaseUIButton(
	props,
	ref
) {
	return <button ref={ref} {...props} />
})

Button.displayName = "BaseUIButton"

export default Button
