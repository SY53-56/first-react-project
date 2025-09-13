import React, { useContext } from 'react'
import { QuizContext } from '../context/context'

export default function Header() {
const {toggle , handleToggle} = useContext(QuizContext)

  return (
    <div className='flex justify-around w-full px-4 py-2 items-center border-b-2 mb-10' >
        <div>
            <h1 className='text-5xl font-bold'><i>RIQ</i></h1>
        </div>
     <nav>
        <ul className='flex gap-6 font-bold'>
            <li className=''>Home</li>
            <li>About</li>
            <li>prograss</li>
          
        </ul>
     </nav>
         <button onClick={handleToggle} className={`px-5 text-white font-bold py-1 rounded cursor-pointer transition outline-none duration-200 bg-sky-500 hover:bg-sky-600`}>Toggle</button>
    </div>
  )
}
