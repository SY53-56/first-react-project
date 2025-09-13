import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { addTodo } from '../features/todo/todoSlice'

export default function Add() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  function addTodoHandle(e) {
    e.preventDefault()
    if (!input.trim()) return; // prevent empty todos
    dispatch(addTodo({ text: input })) // <-- fixed payload
    setInput("") // <-- properly reset input
  }

  return (
    <div className='w-full flex justify-center mt-30 '>
      <form onSubmit={addTodoHandle} className='space-x-3 flex gap-6 '>
        <input 
          type="text"
          placeholder='Enter task ...'
          value={input}
          className='w-96 py-2 px-4 border font-bold rounded '
          onChange={(e) => setInput(e.target.value)}
        />
        <button type='submit' className='px-5 py-1 bg-red-600 cursor-pointer transition hover:bg-red-700 rounded outline-none'>Submit</button>
      </form>
    </div>
  )
}

