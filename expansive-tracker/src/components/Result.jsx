export default function Result({ expenses, total, onDelete }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Expenses</h2>
      <div className="mb-4">
        <h3 className="text-lg">Total: <span className="font-bold">${total.toFixed(2)}</span></h3>
      </div>
      
      {expenses.length === 0 ? (
        <p className="text-gray-500 text-center py-4">No expenses added yet</p>
      ) : (
        <ul className="space-y-3">
          {expenses.map(expense => (
            <li key={expense.id} className="flex justify-between items-center p-3 border-b">
              <div>
                <h4 className="font-medium">{expense.itemName}</h4>
                <p className="text-sm text-gray-500 capitalize">{expense.itemCategory}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-semibold">${expense.itemPrice.toFixed(2)}</span>
                <button 
                  onClick={() => onDelete(expense.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}