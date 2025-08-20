import React,{useContext} from 'react'
import toggle from "../context/toggle"
export default function Footer() {
    const {theme} = useContext(toggle)
  return (
<>
<div className='px-7 py-4 bg-blue-400 flex justify-between absoult bottom-0 '  style={{
        padding: "20px",
        background: theme === "light" ? "#eee" : "#333",
      }}>
    <div>
        <h1 className='text-2xl font-bold'>By: sahul yadav</h1>
    </div>
  <div className='flex gap-5 list-none'>
      <li>
        facebook
    </li>
    <li>Twitter</li>
    <li>instgram</li>
  </div>
</div>
</>
  )
}
