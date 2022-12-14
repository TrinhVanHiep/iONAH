import React, { useCallback, useEffect, useRef, useState } from 'react'
import Banner from '../../component/Banner'
import Header from '../../component/headers/Headers'
import Item_Slide from '../../component/Item_Slide_Shop_By_Brand/Item_Slide'
import ProductItemView from '../../component/ProductItemView/ProductItemView'
import ProductCards from '../../component/prosuctCard/ProductCard'
import Big_Banner from "../../component/Banner_Category_Products/Banner_Category_Products"
import ProductImages from '../../component/ProductImage/ProductImage'
import Popup_Choose_A_Delivery_Time from "../../component/Popup_Choose_A_Delivery_Time/index"
import SignUpModal from '../../component/Modal/SignUpModal'
import SignInModal from '../../component/Modal/SignInModal'
import ShareViaSocialNetwork from '../../component/ShareViaSocialNetwork'

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

  const [isShowSignInModal, setIsShowSignInModal] = useState(false)
  const [isShowSignUpModal, setIsShowSignUpModal] = useState(false)
  const handleOpen=(modalName)=>{
    if(modalName==='signIn')
      setIsShowSignInModal(true);
    else
     setIsShowSignUpModal(true);
  }
  const handleClose=()=>{
    setIsShowSignUpModal(false);
    setIsShowSignInModal(false);
  }

  const [visibility, setVisibility] = useState(true);

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };

  const box = {
    backgroundColor:"gray",
    padding : "30px"
  }
 
  return (
    <>
    <div>
    <div className='session1'>
        <Header heightsPage={height} openModal={handleOpen}  />
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
    <SignInModal isShowSignUpModal={isShowSignInModal} handleClose={handleClose}/>
    <SignUpModal isShowSignUpModal={isShowSignUpModal} handleClose={handleClose}/>
    
    <div style={box}>
    <button onClick={(e) => setVisibility(!visibility)}>Share Via Social Network</button>
    <ShareViaSocialNetwork onClose={popupCloseHandler}
    showPopup={visibility}/>
    </div>
    
    </>
  )
}

export default StyleGuide