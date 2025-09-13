// QuizContextProvider.jsx
import React, { useState } from "react";
import { QuizContext } from "./context";   // 👈 correct import

export default function QuizContextProvider({ children }) {
  const [level, setLevel] = useState("beginner");
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [toggle, setToggle] = useState("dark");

  const handleToggle = () => {
    setToggle((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <QuizContext.Provider
      value={{
        level,
        setLevel,
        score,
        setScore,
        currentQuestion,
        setCurrentQuestion,
        toggle,
        handleToggle,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}
