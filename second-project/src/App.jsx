import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Log'
import { WINNING_COMBINATIONS } from './Winning-combination'
import GameOver from './components/GameOver'


const PLAYER = {
  X :"player 1",
  o: "player 2"
}
function deriveActive(gameTurn){
  
  let currentPlayer = 'X'
    if(gameTurn.length>0 &&gameTurn[0].player==="X"){
      currentPlayer="O"
    }
    return currentPlayer
}
const initial_Game_Board=[
    [null,null,null],
    [null,null,null],
    [null,null,null]
]
function deriveGameBoard(gameTurn){
 let gameBoard =[...initial_Game_Board.map(array =>[...array])];
   for(const turn of gameTurn){
    const {square , player} = turn
    const {row,col} = square
    gameBoard[row][col] = player 
  }
  return gameBoard
}



function deriveWinner(gameBoard, players){

  let winner ;
  for(let combination of WINNING_COMBINATIONS){
const firstSqaure =gameBoard[combination[0].row][combination[0].column]
  const secondSqaure =gameBoard[combination[1].row][combination[1].column];

  const thirdSqaure  =gameBoard[combination[2].row][combination[2 ].column];

  if(firstSqaure && firstSqaure === secondSqaure &&firstSqaure === thirdSqaure){
winner= players[firstSqaure]
  }
  }
  return winner
}

function App() {
  const [players , setSPlayer] = useState(PLAYER)
  const [count, setCount] = useState(0)
//const  [activePlayer,setActivePlayer] = useState('X')
const [gameTurn ,setGameTurn] = useState([])


  let activePlayer = deriveActive(gameTurn)
   

  const gameBoard = deriveGameBoard(gameTurn)
  const winner = deriveWinner(gameBoard,players)
const hasDraw =gameTurn.length ===9 && !winner;

function handleSelectSquare(rowIndex ,colIndex){
 // setActivePlayer((currentPlayer)=> currentPlayer ==="X"?"O":"X")
  setGameTurn((prev)=>{
  const currentPlayer = deriveActive(prev)
    const  updatedActivePlayer = [
      {square:{row:rowIndex , col:colIndex},player:currentPlayer},
      ...prev
    ]
    return  updatedActivePlayer ;
  })
}
  function handleCount(){
    setCount(count+1)
  }

  function handleResrt(){
 setGameTurn([])
  }
  function  handlePlayerNameChange(symbol , newNamw){
    setSPlayer(prevPlayer =>{
      return{
        ...prevPlayer,
        [symbol ] :newNamw
      }
    })
  } 

  return (
  
  <main>
    <div id='game-container'>
   <ol id='players' className='highlight-player'>
   <Player initialName={PLAYER.X} symbol="X" isActive={activePlayer ==="X"} onChangename={handlePlayerNameChange}/>
    <Player initialName={PLAYER.O} symbol="O" isActive={activePlayer ==="O"} onChangename={handlePlayerNameChange}/>
  
   </ol>
   {(winner || hasDraw ) && <GameOver onRestart={handleResrt} winner={winner}/>}
   <GameBoard onSelectSquare={handleSelectSquare} board= {gameBoard}/>
    </div>
    <Log  turns={gameTurn}/>
  </main>
  )
}

export default App
