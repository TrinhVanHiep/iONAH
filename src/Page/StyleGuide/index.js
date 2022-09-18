import React, { useCallback, useEffect, useRef, useState } from 'react'
import Banner from '../../component/Banner'
import Header from '../../component/headers/Headers'
import Item_Slide from '../../component/Item_Slide_Shop_By_Brand/Item_Slide'
import ProductItemView from '../../component/ProductItemView/ProductItemView'
import ProductCards from '../../component/prosuctCard/ProductCard'
import Big_Banner from "../../component/Banner_Category_Products/Banner_Category_Products"

function StyleGuide() {
  const [height, setHeight] = useState(0);
  const handleScroll = () => {
    let scrollTop = window.scrollY;
    setHeight(scrollTop)
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])
  return (
    <>
    <div>
    <div className='session1'>
        <Header heightsPage={height} />
        <Banner/>
       </div>
      <ProductCards />
      <Item_Slide />
      <Big_Banner />
      <ProductItemView/>
    </div>
    </>
  )
}

export default StyleGuide