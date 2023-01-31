import React from 'react'
import { IButton } from './Button.types'

export const Button = ({text,onClick}:IButton) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}
