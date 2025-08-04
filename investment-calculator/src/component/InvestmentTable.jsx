import React from 'react'

export default function InvestmentTable({tableDataShow}) {
  return (
   <table className='text-white border mt-5'>
    {tableDataShow &&
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Yearly Interest</th>
          <th>Total Interest</th>
          <th>Total Amount</th>
          <th>Capital Without Interest</th>
        </tr>
      </thead>
      }
      <tbody>
        {tableDataShow.map((item) => (
          <tr key={item.year}>
            <td>{item.year}</td>
            <td>{item.investmentValue}</td>
            <td>{item.yearlyInterest}</td>
            <td>{item.totalInterest}</td>
            <td>{item.totalAmount}</td>
            <td>{item.totalCapital}</td>
          </tr>
        ))}
      </tbody>
    </table>
    
  )
}


