import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../layout/Footer/Footer'
import Header from '../../layout/Header/Header'

function SiteRoot() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default SiteRoot