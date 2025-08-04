import React, { useEffect, useState } from 'react';


export default function Card() {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState("red");
  const [random, setRandom] = useState(0)

function randomNumberhandle(){
    let randomNum = Math.floor(Math.random()*6)+1
   setRandom(randomNum)
}



  function colorMaker() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
  }

  function randomColor() {
    const newColor = colorMaker(); // ✅ call the function
    setBgColor(newColor);
  }
  
function countHandle(){
    if(count >=20){
        alert("this is a count limit")
        return
    }
    setCount(count+1)
}
function decreaseHandle(){
    if(count<0){
        alert("this is a count limit")
        return
    }
    setCount(count-1)
}
  return (
    <div className='w-full flex px-4  gap-2 items-center'>
      <div
        className='w-[500px] h-[200px] py-3 rounded-lg shadow-md'
        style={{ backgroundColor: bgColor }}
      >
        <h1 className='text-center text-5xl text-white'>sahul</h1>

        <div className='flex flex-col items-center gap-4 mt-5'>
          <h2 className='text-white text-xl'>Count: {count}</h2>

          <div className='flex gap-3'>
            <button
              onClick={countHandle}
              className='border px-4 py-2 rounded-xl bg-green-500 text-white'
            >
              Increase
            </button>

            <button
              onClick={decreaseHandle}
              className='border px-4 py-2 rounded-xl bg-red-500 text-white'
            >
              Decrease
            </button>

            <button
              onClick={() => setCount(0)}
              className='border px-4 py-2 rounded-xl bg-gray-500 text-white'
            >
              Reset
            </button>

            <button
              onClick={randomColor}
              className='border px-4 py-2 rounded-xl bg-blue-500 text-white'
            >
              Change Color
            </button>
          </div>
        </div>
      </div>
      <div   className={`w-[500px] h-[200px] py-3 rounded-lg shadow-md ${random>3?'bg-green-600':'bg-blue-600'}`}>
          <h1 className='text-center text-4xl text-white font-bold'>Random number genretor</h1>
          <h1 className='text-center text-4xl text-white font-bold mt-3'>random number:{random}</h1>
          <button  className='border px-4 py-2 rounded-xl bg-gray-500 text-white mt-4 ml-5 cursor-pointer' onClick={randomNumberhandle}>Random</button>
      </div>
 

    </div>

  );
}
