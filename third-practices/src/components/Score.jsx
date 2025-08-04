import React from 'react'

export default function Score({compu}) {
  return (
   <>
   <div>
    <div className='flex text-center '>
        <h1 className='text-4xl' >playler 1</h1>
        <h1 className='text-4xl'>{compu}</h1>
    </div>
   </div>
   </>
  )
}
