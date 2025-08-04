import React from 'react'

export default function GameOver({winner,onRestart}) {
  return (
    <div id='game-over'>
        <h2>Game Over</h2>
       {winner && <p>{winner}</p>}
       {!winner && <p>It&apos;s match draw </p>}
        <p>
            <button onClick={onRestart}>Ramatch !</button>
        </p>
    </div>
  )
}
