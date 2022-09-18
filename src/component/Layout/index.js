import React, { Children } from 'react'
import Header from "../Headers/Headers";
import Footer from "../Footer/Footer";
import "./style.scss";

function Layout({children, showFooter=true}) {
  return (
    <div class="page-container">
    <Header/>
    {children}
    {showFooter &&  <Footer/>}
    </div>
  )
}

export default Layout