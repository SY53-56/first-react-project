import { useRef, useState } from 'react'
import {useGSAP} from "@gsap/react"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ScrollTrigger } from 'gsap/all'
import './App.css'
import gsap from "gsap"
import Card from './Card'



function App() {
  useGSAP(()=>{
  gsap.to("#text",{
    ease:"power1.inOut",
    opacity:1,
    y:0,
    duration:2
  })
  gsap.fromTo(".para",{
    opacity:0,
    y:20,
    duration:4,
  },{opacity:1,
    y:0,stagger:0.1
  })
  },[])

  return (
    <>
     <div id='text' className='opacity-0'>
    <h1>gsap learing </h1>
    <p className='para'>Lorem, ipsum dolor sit consectetur adipisicing elit. Repellat, alias
         sint. Sed totam voluptatibus ducimus deleniti ipsam suscipit cupiditate qui
          numquam reprehenderit! Incidunt 
         maiores nulla enim eum 
        quibusdam deleniti reprehenderit.</p>
        
   </div>
  <Card/>
  <h1 className='text-'></h1>
    </>
  )
}

export default App
