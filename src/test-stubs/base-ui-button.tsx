import React from "react"

export const Button = React.forwardRef((props: any, ref: any) => <button ref={ref} {...props} />)

export default Button
