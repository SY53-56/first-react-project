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

    <div className='w-full flex flex-col justify-center h-[100vh] items-center bg-purple-600'>
          <h1 className='text-center text-8xl font-bold font-sans'>learn redux-toolkit</h1>
      <Add/>
    <Todo/>
    </div>
    </>
  )
}

export default App
