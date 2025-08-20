import React, { useContext } from 'react';
import { UserContext, ThemeContext } from '../App';

export default function ChildC() {
  const { user } = useContext(UserContext);
  const { theme, setTheme } = useContext(ThemeContext);

  function handleClick() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <div>
      <button onClick={handleClick}>Change Theme</button>
      <h1>data: {user.name}</h1>
    </div>
  );
}
