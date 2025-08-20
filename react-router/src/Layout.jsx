import React from 'react'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import { Outlet } from 'react-router'
import ToggleContextProvider from './context/ToggleContextProvider'
export default function 
() {
  return (
   <>
    <ToggleContextProvider>
      <Header/>
      <Outlet/>
      <Footer/>

    </ToggleContextProvider>
   </>
  )
}
