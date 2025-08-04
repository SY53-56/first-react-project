import React, { useState } from 'react';

export default function Game() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [turn, setTurn] = useState("player1");

  function randomNumber() {
    if (turn !== "player1") {
      alert("It's not Player 1's turn!");
      
      return; 
    }

    const randomNum = Math.floor(Math.random() * 6) + 1;
    setNum1(randomNum);
    setTurn("player2");

  }

  function randomNumber2() {
    if (turn !== "player2") {
      alert("It's not Player 2's turn!");
      return;
    }

    const randomNum = Math.floor(Math.random() * 6) + 1;
    setNum2(randomNum);
    setTurn("player1");
  }

  return (
    <div className='w-full flex justify-center flex-col gap-2 items-center'>
      <div className='w-[600px] h-[350px] py-3 rounded-lg shadow-md bg-orange-600'>
        <h1 className='text-center text-5xl text-white font-bold'>Random Game</h1>
        <h2 className='text-center text-xl text-white mt-2'>Turn: {turn}</h2>

        <div className='px-5 mt-5'>
          <h1 className='text-3xl font-bold text-white'>Player 1 number: {num1}</h1>
          <h1 className='text-3xl font-bold text-white'>Player 2 number: {num2}</h1>
        </div>

        <div className='flex gap-6 mt-6 px-5'>
          <button
            className='border px-4 py-2 rounded-xl bg-green-500 text-white'
            onClick={randomNumber}
          >
            Player 1
          </button>
          <button
            className='border px-4 py-2 rounded-xl bg-red-500 text-white'
            onClick={randomNumber2}
          >
            Player 2
          </button>
        </div>

        <h1 className='text-center text-3xl text-white font-bold mt-4'>
          Winner: {
            num1 === 0 && num2 === 0
              ? "No one yet"
              : num1 === num2
              ? "It's a draw!"
              : num1 > num2
              ? "Player 1 is the winner"
              : "Player 2 is the winner"
          }
        </h1>
      </div>
    </div>
  );
}
