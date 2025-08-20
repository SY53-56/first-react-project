import React, { useState } from 'react'
import toggleContext from './ToggleContext'
import { Children } from 'react'

export default function ToggleContextProvider() {
    let [theme ,setTheme] = useState("white")
    function handleTheme(){
        setTheme(prev=>prev==="white"?"black":"white")
    }
  return (
    <toggleContext.Provider value={{theme ,handleTheme}}>
      {Children}
    </toggleContext.Provider>
  )
}
