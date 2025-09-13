import React, { useContext } from "react";
import { QuizContext } from "../context/context";

export default function Score() {
  const { score, currentQuestion } = useContext(QuizContext);

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h1 className="text-3xl font-bold text-white mb-2">Your Score</h1>
      <p className="text-xl text-gray-200">
        {score} / {currentQuestion + 1}
      </p>
    </div>
  );
}
