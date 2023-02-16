import React, { type FC } from 'react'
import style from './Button.module.scss'
import { type ButtonProps } from './Button.types'

const Button: FC<ButtonProps> = ({ type, text, onClick }) => {
  return (
    <button type="button" className={`${style.Button} ${style[`Button-${type}`]}`} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
