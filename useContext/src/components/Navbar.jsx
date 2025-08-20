import React , {useContext} from 'react'
import toggle from "../context/toggle"
export default function Navbar() {
    const {theme ,handleToggle}  = useContext(toggle)
  return (
   <>
   <div className='flex justify-between item-center  px-4 py-3 bg-gray-400 '    style={{
        padding: "10px",
        background: theme === "light" ? "#ccc" : "#444",
      }}>
    <div>
        <h1 className='text-4xl font-bold'><i>UseContext</i></h1>
    </div>
    <nav className='flex gap-7 text-2xl list-none '>
        <li className='list-none'>Home</li>
        <li>About</li>
        <li>info</li>
        <li>Contact</li>
    </nav>
    <div className='flex gap-5' >
        <button className='px-5 py-2 bg-green-300 rounded'>login</button>
          <button className='px-5 py-2 bg-green-300 rounded'>login</button>
           <button onClick={handleToggle} className='px-5 py-2 bg-green-300 rounded'>Toggle</button>
    </div>
   </div>
   </>
  )
}
