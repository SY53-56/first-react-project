import React, { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)


  function increase(){
    setCount(prev=>(prev<20?prev+1:prev))
  }
  function decrease() {
    setCount(prev => (prev > 0 ? prev - 1 : prev))
  }

  return (
    <div className='flex justify-center items-center mt-20'>
      <div className='w-[400px] h-[300px] bg-blue-600 px-4 py-3 rounded-lg shadow-lg'>
        <h1 className='text-center text-4xl text-white'>Counter</h1>
        
        <div className='flex gap-5 justify-center mt-10'>
          <h1 className='text-4xl text-white'>Count: {count}</h1>
        </div>

        <div className='flex mt-10 justify-center gap-5'>
          <button 
            onClick={increase} 
            className='bg-green-400 px-4 py-2 rounded-lg transition cursor-pointer text-white hover:bg-green-600'
          >
            Increase
          </button>
          <button 
            onClick={decrease} 
            className='bg-red-400 px-4 py-2 rounded-lg transition cursor-pointer text-white hover:bg-red-600'
          >
            Decrease
          </button>
        </div>
      </div>
    </div>
  )
}

