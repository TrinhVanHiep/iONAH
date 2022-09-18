import React from 'react'
import './styles.scss';

export default function Button({  
    children,
    className = '',
    type = 'primary',//primary; secondary; tertiary
    onClick = () => {},
}) {
  return (
    <div className='_button' >
        <button className={`btn btn-${type} ${className}`} onClick={onClick} >
           {children}
        </button>
    </div>
  )
}
