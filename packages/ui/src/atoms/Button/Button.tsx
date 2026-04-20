import { useState } from 'react'
import type { ButtonProps } from './Button.types'
import './Button.css'

export const Button = <CustomButtonProps extends ButtonProps>({ onClick, children, ...props }: CustomButtonProps) => {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
    onClick()
  }

  return (
    <button
      className={`button ${isClicked ? 'button--clicked' : ''}`}
      onClick={handleClick}
      { ...props }
    >
      {children}
    </button>
  )
}
