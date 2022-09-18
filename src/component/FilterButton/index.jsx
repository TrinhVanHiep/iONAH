import React from 'react'
import './styles.scss';

export default function FilterButton({  
    children,
    className = '',
    type = 'secondary',//primary; secondary
    onClick = () => {},
}) {
  return (
    <div className='_filter-button' >
        <button className={`btn btn-${type} ${className}`} onClick={onClick} >
           {children}
        </button>
    </div>
  )
}
