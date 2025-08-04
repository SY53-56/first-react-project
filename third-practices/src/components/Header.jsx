import React from 'react'
import "./Header.css"

export default function Header() {
  return (
   <>
   <div className='w-[70%] h-[20%] bg-red-500 mx-auto px-2 py-3 rounded-lg'>
     <div className='header'>
        <h1 className=' '>Rock</h1>
        <h1 className=''>Paper</h1>
        <h1>Scissors</h1>
     </div>
   </div>
   </>
  )
}
