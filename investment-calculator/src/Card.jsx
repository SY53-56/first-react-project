import React, { useState } from 'react';

export default function Card() {
  const [initialInvestment, setInitialInvestment] = useState('');
  const [annualInvestment, setAnnualInvestment] = useState('');
  const [expectedReturn, setExpectedReturn] = useState('');
  const [duration, setDuration] = useState('');
  const [tableData, setTableData] = useState([]);

  const handleFullinvestment = () => {
    const invest = parseFloat(initialInvestment);
    const annual = parseFloat(annualInvestment);
    const rate = parseFloat(expectedReturn) / 100;
    const years = parseInt(duration);

    if (isNaN(invest) || isNaN(annual) || isNaN(rate) || isNaN(years)) {
      alert('Please enter valid numbers');
      return;
    }

    let data = [];
    let currentValue = invest;
    let totalInterest = 0;

    for (let year = 1; year <= years; year++) {
      const interest = currentValue * rate;
      totalInterest += interest;
      const totalAmount = currentValue + interest;
      const totalCapital = currentValue + annual;

      data.push({
        year,
        investmentValue: currentValue.toFixed(2),
        yearlyInterest: interest.toFixed(2),
        totalInterest: totalInterest.toFixed(2),
        totalAmount: totalAmount.toFixed(2),
        totalCapital: totalCapital.toFixed(2),
      });

      currentValue += annual + interest;
    }

    setTableData(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center p-4">
      <div className="bg-white text-gray-800 shadow-2xl rounded-2xl p-8 w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-emerald-700">Investment Calculator</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col">
            <label>Initial Investment</label>
            <input
              type="text"
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(e.target.value)}
              className="border border-gray-300 rounded-xl px-4 py-3 mt-1 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>
          <div className="flex flex-col">
            <label>Annual Investment</label>
            <input
              type="text"
              value={annualInvestment}
              onChange={(e) => setAnnualInvestment(e.target.value)}
              className="border border-gray-300 rounded-xl px-4 py-3 mt-1 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>
          <div className="flex flex-col">
            <label>Expected Return (%)</label>
            <input
              type="text"
              value={expectedReturn}
              onChange={(e) => setExpectedReturn(e.target.value)}
              className="border border-gray-300 rounded-xl px-4 py-3 mt-1 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>
          <div className="flex flex-col">
            <label>Duration (Years)</label>
            <input
              type="text"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="border border-gray-300 rounded-xl px-4 py-3 mt-1 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>
        </div>
        <button
          onClick={handleFullinvestment}
          className="mt-6 bg-emerald-600 text-white py-2 px-6 rounded-xl hover:bg-emerald-700 transition"
        >
          Calculate
        </button>

        {tableData.length > 0 && (
          <table className="w-full mt-6 border-collapse text-sm shadow rounded-lg overflow-hidden">
            <thead className="bg-emerald-600 text-white ">
              <tr>
                <th className="py-3 px-4 text-left">Year</th>
                <th className="py-3 px-4 text-left">Investment Value</th>
                <th className="py-3 px-4 text-left">Yearly Interest</th>
                <th className="py-3 px-4 text-left">Total Interest</th>
                <th className="py-3 px-4 text-left">Total Amount</th>
                <th className="py-3 px-4 text-left">Capital Before Interest</th>
              </tr>
            </thead>
            <tbody className="bg-white text-gray-700">
              {tableData.map((row) => (
                <tr key={row.year} className="hover:bg-emerald-50 transition">
                  <td className="py-3 px-4">{row.year}</td>
                  <td className="py-3 px-4">${row.investmentValue}</td>
                  <td className="py-3 px-4">${row.yearlyInterest}</td>
                  <td className="py-3 px-4">${row.totalInterest}</td>
                  <td className="py-3 px-4">${row.totalAmount}</td>
                  <td className="py-3 px-4">${row.totalCapital}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

 


