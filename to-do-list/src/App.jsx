import './App.css'
import Card from './components/Card'
import ThemeContextProvider from './context/themeContextProvider'
import ThemeContext from './context/theme'
import { useContext } from 'react'

function ToggleButton() {
  const { handleTheme, themeData } = useContext(ThemeContext)
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: themeData === "light" ? "#ccc" : "#444" }}
    >
      <button
        onClick={handleTheme}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded inline-block hover:bg-blue-600 transition"
      >
        Toggle Theme
      </button>
      <Card />
    </div>
  )
}

function App() {
  return (
    <ThemeContextProvider>
      <ToggleButton />
    </ThemeContextProvider>
  )
}

export default App

