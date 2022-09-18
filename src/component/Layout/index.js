import React, { Children } from 'react'
import Header from "../headers/Headers";
import Footer from "../Footer/Footer";

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