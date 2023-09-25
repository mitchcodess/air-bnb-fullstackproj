import React from 'react'
import './Button.css'
export default function Button({text, backgroundColor}) {
  return (
    <button className='btn'>{text}</button>
  )
}
