import React, { useState } from 'react';
import ToggleContext from './ToggleContext';

export default function ToggleContextProvider({ children }) {  // ✅ destructure children
  const [theme, setTheme] = useState("white");

  function handleTheme() {
    setTheme(prev => prev === "white" ? "black" : "white");
  }

  return (
    <ToggleContext.Provider value={{ theme, handleTheme }}>
      {children}   {/* ✅ render actual content passed into the provider */}
    </ToggleContext.Provider>
  );
}
