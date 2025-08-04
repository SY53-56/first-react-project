import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import Button from './components/Button'
import Score from './components/Score'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Card/>
    <Button/>
    <Score compu="computer"/>
    <div className='text-'></div>
    </>
  )
}

export default App
