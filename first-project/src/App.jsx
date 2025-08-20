import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './Header';
import Card from './Card';
import Game from './Game';
import Skill from './Skill';
import { CONCEPTS } from './Data';
import Button from './Button';
import Box from './Box';

import Comment from "./components/Cemment"




 // Import your data array

function App() {
  const [show, setShow] = useState(null); // initially nothing is shown

  const [change ,setChange]= useState(false)

 
  const [count,setCount ]  = useState(0)


   const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];
function handleCount(){
  setCount(count+1)
}



  function handleData(index) {
    setShow(CONCEPTS[index]);
  }

  return (
    <>
   



 <div  className={`${change?"bg-black text-white":"bg-white text-black"}`}>
      <Header />
      
    
      <div className="flex gap-6 flex-wrap  ">
        <Card />
        <Game />
      </div>
    <Comment/>
    </div>
    </> )
  }

export default App;


