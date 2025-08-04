import React, { useState } from 'react';
import Button from './Button';

export default function App() {
  const oldData = JSON.parse(localStorage.getItem("data")) || [];
  const [inputData, setInputData] = useState('');
  const [tasks, setTasks] = useState(oldData);

  function handleChange(e) {
    setInputData(e.target.value);
  }

  function handleForm(e) {
    e.preventDefault();
    if (!inputData.trim()) return;

    const newTask = { text: inputData, isCompleted: false };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("data", JSON.stringify(updatedTasks));
    setInputData('');
  }

  function handleComplete(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index].isCompleted = true;
    setTasks(updatedTasks);
    localStorage.setItem("data", JSON.stringify(updatedTasks));
  }

  function handleDelete(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    localStorage.setItem("data", JSON.stringify(updatedTasks));
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">📝 Todo App</h1>

        <form onSubmit={handleForm} className="flex gap-2 mb-4">
          <input
            value={inputData}
            onChange={handleChange}
            placeholder="Add a new task"
            className="flex-grow border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Add
          </button>
        </form>

        <ul className="space-y-2">
          {tasks.map((task, i) => (
            <li
              key={i}
              className={`flex items-center justify-between p-3 rounded border ${
                task.isCompleted ? 'bg-green-50 line-through text-gray-400' : 'bg-white'
              }`}
            >
              <span className="flex-grow">{task.text}</span>
              <Button
                onComplete={() => handleComplete(i)}
                onDelete={() => handleDelete(i)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

