import React from 'react'
import Img from '../../asset/home.png'
import Mouse from '../../asset/mouse.svg'
import ArrowDown from '../../asset/arrow-down.svg'
import './styles.scss'

export default function Banner() {
  return (
    <div className='_banner'>
         <img src={Img} alt="" />
         <div className='btn-scroll-down'>
             <img src={Mouse} alt="" className='mouse' />
             <img src={ArrowDown} alt="" className='arrow-down' />
             <a className='scroll-down-txt' href="#body">scroll down</a>
         </div>
    </div>
  )
}
