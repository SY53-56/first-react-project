import React from 'react'
import { CONCEPTS } from './Data'

export default function Button({children,onSlect}) {
    function handClick(){
       CONCEPTS.map((v)=>{
         console.log(v.title)
       })
    }
  return (
    <div className='flex gap-5 justify-center'>
    <button onClick={onSlect} className='border px-4 py-2 rounded-xl bg-green-500 text-white cursor-pointer'>{children}</button>

  
   </div>
  )
}
