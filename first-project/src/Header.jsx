import React from 'react'

export default function Header() {
  return (
   <>
   <nav className='w-full px-4 py-2 bg-emerald-700'>
    <div className='flex gap-6 justify-between'>
        <h1 className='text-4xl font-bold text-white'><i>React Essentials</i></h1>
        <ul className='flex gap-4 text-2xl text-white'>
          <li>home</li>
          <li>topic</li>
          <li>components</li>
          <li>props</li>
          <li>doute</li>
        </ul>
    </div>
   </nav>
   </>
  )
}
