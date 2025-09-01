import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Add from './components/Add'
import Todo from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-center'>learn redux-toolkit</h1>
    <Add/>
    <Todo/>
    </>
  )
}

export default App
