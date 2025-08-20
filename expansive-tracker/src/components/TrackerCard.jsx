import React, { useState } from 'react';

export default function TrackerCard({ onSubmit }) {
  // 1. Initialize form state with proper default values
  const [formData, setFormData] = useState({
    itemName: '',
    itemPrice: '',
    itemCategory: 'shopping' // Default category
  });

  // 2. Handle input changes for ALL fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // For price field, ensure it's a number
    const processedValue = name === 'itemPrice' ? parseFloat(value) || '' : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: processedValue
    }));
  };

  // 3. Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.itemName || formData.itemPrice === '') {
      alert('Please fill all required fields');
      return;
    }
    
    // Send data to parent component
    onSubmit({
      ...formData,
      itemPrice: Number(formData.itemPrice) // Ensure price is number
    });
    
    // Reset form after submission
    setFormData({
      itemName: '',
      itemPrice: '',
      itemCategory: 'shopping' // Reset to default
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white rounded-lg shadow-md p-6 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Add New Expense</h2>
        
        {/* Item Name Field */}
        <div>
          <label htmlFor="itemName" className="block text-sm font-medium text-gray-700">
            Item Name *
          </label>
          <input
            type="text"
            id="itemName"
            name="itemName"
            value={formData.itemName}
            onChange={handleChange}
            placeholder="e.g. Groceries"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {/* Price Field */}
        <div>
          <label htmlFor="itemPrice" className="block text-sm font-medium text-gray-700">
            Price *
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500">$</span>
            </div>
            <input
              type="number"
              id="itemPrice"
              name="itemPrice"
              value={formData.itemPrice}
              onChange={handleChange}
              placeholder="0.00"
              step="0.01"
              min="0"
              className="block w-full pl-7 pr-12 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
        </div>

        {/* Category Field */}
        <div>
          <label htmlFor="itemCategory" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            id="itemCategory"
            name="itemCategory"
            value={formData.itemCategory}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
          >
            <option value="shopping">Shopping</option>
            <option value="home">Home Expense</option>
            <option value="hobbies">Hobbies</option>
            <option value="party">Party</option>
            <option value="extra">Extra Expense</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
}
