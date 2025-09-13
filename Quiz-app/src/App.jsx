import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './component/Header'
import { QuizContext } from './context/context'
import Quiz from './component/Quiz'
import Score from './component/Score'


function App() {
  const [count, setCount] = useState(0)
  const {toggle} = useContext(QuizContext)
    return (
    <>

<div
  className={`transition-colors duration-500 ease-in-out h-[100vh] ${
    toggle === "dark" ? "bg-black text-white" : "bg-white text-black"
  }`}
>
  <Header />
  <Quiz/>

</div>


    </>
  )
}

export default App
