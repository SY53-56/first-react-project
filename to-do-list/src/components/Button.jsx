import React, { useContext } from 'react'
import theme from "../context/theme"
export default function Button({onComplete , onDelete}) {
  
  return (
    <>
   <div className='flex gap-3'>
     <button    className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600" onClick={onComplete}> ✅</button>
     <button onClick={onDelete}   className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">❌</button>
   </div>
    </>
  )
}
