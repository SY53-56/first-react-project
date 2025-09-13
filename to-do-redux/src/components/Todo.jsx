import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';

export default function Todo() {
  const todos = useSelector(state => state.todo.todos); // selector
  const dispatch = useDispatch();

  const handleUpdate = (id, oldText) => {
    const newText = prompt("Enter new text:", oldText);
    if (newText && newText.trim() !== "") {
      dispatch(updateTodo({ id, text: newText }));
    }
  };

  return (
    <div className='mt-10 flex'>
      <ul className='space-y-2'>
        {todos.map(todo => (
          <li
            key={todo.id}
            className='flex justify-between items-center py-2 px-4 border rounded w-[500px]'
          >
            <span>{todo.text}</span>
            <div className='space-x-2'>
              <button
                className='bg-red-500 cursor-pointer text-white px-4 py-1 rounded'
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                X
              </button>
              <button
                className='bg-blue-500 text-white px-4 cursor-pointer py-1 rounded'
                onClick={() => handleUpdate(todo.id, todo.text)}
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

