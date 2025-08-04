import React from 'react'
import { CONCEPTS } from './Data'
export default function Skill() {
   return (
    <div className="flex flex-wrap gap-4">
      {CONCEPTS.map((v) => (
        <div key={v.title} className="p-4 border rounded shadow w-[250px]">
          <img src={v.image} alt={v.title} className="w-16 h-16 mb-2" />
          <h1 className="font-bold text-lg">{v.title}</h1>
          <p className="text-gray-600">{v.description}</p>
        </div>
        
      ))}
    </div>
  );
}

