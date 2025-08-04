import React from 'react'

export default function Box(props) {
  return (
    <div>
        {props.children}
        <button onClick={props.handleCount}>click</button>
        <h1>{props.text}</h1>

        <input type="text" onChange={(e)=>props.setName(
            e.target.value
        )} />
        <p>name the state variable of card :{props.name}</p>
    </div>
  )
}
