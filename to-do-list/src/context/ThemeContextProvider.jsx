import React, { useState } from 'react'
import theme from "./theme"

export default function ThemeContextProvider({ children }) {
  const [themeData, setThemeData] = useState("light")

  function handleTheme() {
    setThemeData(prev => prev === "light" ? "dark" : "light")
  }

  const themeColor = {
    backgroundColor: themeData === "light" ? "white" : "black",
    color: themeData === "light" ? "black" : "white"
  }

  return (
    <theme.Provider value={{ themeData, handleTheme }}>
      <div style={themeColor}>
        {children}
      </div>
    </theme.Provider>
  )
}

