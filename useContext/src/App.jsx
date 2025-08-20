import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Content from './components/Content'
import toggle from "./context/toggle"
export default function App() {
  const [theme , setTheme] = useState("light")
function handleToggle(){
  setTheme(prev=> prev==="light"?"dark":"light")
}
const ThemeStyle ={
  backgroundColor: theme==="light"?"white":"black",
  color: theme==="light"?"black":"white"
}

  return (
   <>
  <toggle.Provider value={{theme , handleToggle}}>
    <div style={ThemeStyle}>
       <Navbar/>
    <Content/>
    <Footer/>
    </div>
  </toggle.Provider>
   </>
  )
}

