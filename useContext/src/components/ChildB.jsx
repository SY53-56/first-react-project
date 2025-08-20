import React ,{useContext} from 'react'
import ChildC from './ChildC'
import { cardContext } from '../App'
export default function() {
     const {card , setCard} = useContext(cardContext)

  return (
    <div>
  <div>
  <h1>ccount: {card}</h1>
  <button onClick={()=>setCard(card+1)}></button>
  </div>
    <ChildC/>
    </div>
  )
}
