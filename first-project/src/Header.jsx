import React, {useRef} from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
export default function Header() {
  const navRef = useRef()
  useGSAP(()=>{
 gsap.from(".h1",{
  y:-20,
  opacity:0,
  duration:2,

 })
 gsap.from(".ul li",{
  y:-20,
  opacity:0,
  duration:0.5,
  stagger:0.4
 })
 
  })
  return (
   <>
   <nav  className='w-full px-4 py-2 bg-emerald-700'>
    <div className='flex gap-6 justify-between'>
        <h1 className='h1 text-4xl font-bold text-white'><i>React Essentials</i></h1>
        <ul ref={navRef} className='ul flex gap-4 text-2xl text-white'>
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
