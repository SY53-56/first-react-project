import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className="w-full flex justify-between items-center px-10 py-3 bg-blue-600">
      <div>
        <h1 className="text-4xl font-bold text-white"><i>sahul</i></h1>
      </div>
      <ul className="flex gap-10 text-2xl cursor-pointer">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive 
                ? "text-orange-500 px-3 py-1 rounded " 
                : "text-white"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/counter" 
            className={({ isActive }) => 
              isActive 
                ? "text-orange-500 px-3 py-1 rounded " 
                : "text-white"
            }
          >
            Counter
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive 
                ? "text-orange-500 px-3 py-1 rounded " 
                : "text-white"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              isActive 
                ? "text-orange-500 px-3 py-1 rounded " 
                : "text-white"
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/info" 
            className={({ isActive }) => 
              isActive 
                ? "text-orange-500 px-3 py-1 rounded " 
                : "text-white"
            }
          >
            Info
          </NavLink>
        </li>
      </ul>
      <div className="flex gap-10">
        <button className="px-5 py-2 bg-red-500 transition rounded-xl cursor-pointer text-white hover:bg-red-700">
          Login
        </button>
        <button className="px-5 py-2 bg-green-500 transition rounded-xl cursor-pointer text-white hover:bg-green-700">
          Sign In
        </button>
      </div>
    </div>
  )
}

