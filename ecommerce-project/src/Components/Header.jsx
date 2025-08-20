import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import Form from "./Form"
export default function Header() {
    const [showForm , setShowForm]= useState(false)

  return (
    <>
    <div className='flex justify-between  bg-gray-500 px-5 py-3'>
        <div>
            <h1 className='text-3xl text-white font-bold '>book Habbits</h1>
        </div>
        <nav>
            <ul className='flex gap-5 text-[20px] text-white '>
 <li>
    <NavLink 
    to={"/"}      className={({ isActive }) => 
              isActive 
                ? "text-orange-500  rounded " 
                : "text-white"
            }>
        Home
    </NavLink>
 </li>
  <li>
    <NavLink 
    to={"/product"}      className={({ isActive }) => 
              isActive 
                ? "text-orange-500  rounded " 
                : "text-white"
            }>
        Product
    </NavLink>
 </li>
<li className="relative">
  <button 
    onClick={() => setShowForm(!showForm)}
    className="text-white hover:text-orange-500 cursor-pointer"
  >
    Contact
  </button>
  
  {showForm && (
    <div className="absolute bg-black rounded  top-full left-0 mt-5">
      <Form />
    </div>
  )}
</li>


  <li>
    <NavLink 
    to={"/cart"}     className={({ isActive }) => 
              isActive 
                ? "text-orange-500  rounded " 
                : "text-white"
            }>
       cart
    </NavLink>
 </li>

            </ul>
        </nav>

        <div>
            <input type="text" placeholder='search book' className='px-5 py-1 text-white rounded-lg w-[400px] border'/>
        </div>
        <div className='flex gap-3'>
            <button className='px-4 py-2 bg-orange-600 text-white cursor-pointer rounded-lg transition duration-500 hover:bg-orange-700 '>login</button>
            <button className='px-4 py-2 bg-orange-600 text-white cursor-pointer rounded-lg transition duration-500 hover:bg-orange-700 '>login</button>
        </div>
    </div>
    </>
  )
}
