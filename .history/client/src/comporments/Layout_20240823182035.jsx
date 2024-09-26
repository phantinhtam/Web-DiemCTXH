import React from 'react'
import{Outlet} from "react-router-dom"

import App
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
      <Header/>
         <Outlet/>
         <App/>
      <Footer/>
    </>
  )
}

export default Layout
