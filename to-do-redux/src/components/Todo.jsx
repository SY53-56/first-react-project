import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';

export default function Todo() {
const todos = useSelector(state => state.todo.todos);
// <-- fixed selector
  const dispatch = useDispatch();

  const handleUpdate = (id, oldText) => {
    const newText = prompt("Enter new text:", oldText);
    if (newText && newText.trim() !== "") {
      dispatch(updateTodo({ id, text: newText }));
    }
  };

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
            <button onClick={() => handleUpdate(todo.id, todo.text)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
