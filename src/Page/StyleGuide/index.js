import React, { useCallback, useEffect, useRef, useState } from 'react'
import Banner from '../../component/Banner'
import Header from '../../component/headers/Headers'
import Item_Slide from '../../component/Item_Slide_Shop_By_Brand/Item_Slide'
import ProductItemView from '../../component/ProductItemView/ProductItemView'
import ProductCards from '../../component/prosuctCard/ProductCard'
import Big_Banner from "../../component/Banner_Category_Products/Banner_Category_Products"
import ProductImages from '../../component/ProductImage/ProductImage'

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
       <div style={{margin: 20}}></div>
      <ProductCards />
      <div style={{margin: 20}}></div>
      <ProductImages />
      <div style={{margin: 20}}></div>
      <Item_Slide />
      <div style={{margin: 20}}></div>
      <Big_Banner />
      <div style={{margin: 20}}></div>
      <ProductItemView/>
    </div>
    </>
  )
}

export default StyleGuide