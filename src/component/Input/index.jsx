import React from 'react'
import './styles.scss'

export default function Input({placeholder='',onChange, className=''}) {
  return (
    <div className='_input'>
        <input 
            type="text" 
            className={`input ${className}`} 
            placeholder={placeholder} 
            onChange={onChange} 
        />
    </div>
  )
}
