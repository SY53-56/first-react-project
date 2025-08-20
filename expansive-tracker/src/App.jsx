import React, { useState } from 'react';
import TrackerCard from './components/TrackerCard';
import Result from './components/Result';

export default function App() {
  const [expenses, setExpenses] = useState([]);

  // Add new expense
  const addExpense = (newExpense) => {
    setExpenses(prev => [...prev, {
      ...newExpense,
      id: Date.now() // Add unique ID
    }]);
  };

  // Delete expense
  const deleteExpense = (id) => {
    setExpenses(prev => prev.filter(expense => expense.id !== id));
  };

  // Calculate total
  const total = expenses.reduce((sum, expense) => sum + expense.itemPrice, 0);

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <TrackerCard onSubmit={addExpense} />
      <Result 
        expenses={expenses}
        total={total}
        onDelete={deleteExpense}
      />
    </div>
  );
}