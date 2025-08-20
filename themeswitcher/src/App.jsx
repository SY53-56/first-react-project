import { useEffect, useState } from 'react'

import './App.css'
import { ThemeProvide } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
const [bgColor, setBgColor] = useState(false);
  const [check , setCheck] = useState()


  function handleToggle(){
    setBgColor(true)
  }


  const [themeMode , setThemeMode] = useState("light")
  const lightTheme = ()=>{
    setThemeMode("light")
  }
  const darktheme=()=>{
    setThemeMode("dark")
  }

  useEffect(()=>{
    document.querySelector("html").classList.remove("light","dark")
    document.querySelector("html").classList.add(themeMode)
  },[themeMode])
  return (
    <>
    <ThemeProvide value={{themeMode , darktheme,lightTheme}}>
       <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
              </div>

              <div className="w-full max-w-sm mx-auto">
                <Card/>
              </div>
          </div>
      </div>
    </ThemeProvide>
    <div className={`w-[300px] h-[200px] ${!bgColor ? "bg-black" : "bg-white"} border mx-20 shadow-2xl`}>
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={bgColor}
        onChange={() => setBgColor(prev => !prev)}
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                      peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer 
                      dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white 
                      after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white 
                      after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
                      after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
    </label>
  </div>
    </>
  )
}

export default App
