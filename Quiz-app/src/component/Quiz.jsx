import React, { useContext, useEffect, useState } from "react";
import { QuizContext } from "../context/context";
import {
  beginnerQuestions,
  intermediateQuestions,
  advancedQuestions,
} from "../data";
import Button from "./Button";

export default function Quiz() {
  const { level, setLevel, currentQuestion, setCurrentQuestion, score, setScore } =
    useContext(QuizContext);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizFinished, setQuizFinished] = useState(false);

  // Determine questions for current level
  const getQuestions = (lvl) => {
    if (lvl === "beginner") return beginnerQuestions;
    if (lvl === "intermediate") return intermediateQuestions;
    if (lvl === "advanced") return advancedQuestions;
    return [];
  };

  const questions = getQuestions(level);

  const handleAnswer = (option) => {
    if (selectedAnswer) return; // prevent multiple clicks
    setSelectedAnswer(option);

    if (option === questions[currentQuestion].answer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    // If current question is last in this level
    if (currentQuestion === questions.length - 1) {
      if (level === "beginner") {

        setLevel("intermediate");
        setCurrentQuestion(0);
      } else if (level === "intermediate") {
        setLevel("advanced");
        setCurrentQuestion(0);
      } else {
        // Finished advanced level → end quiz
        setQuizFinished(true);
      }
      setSelectedAnswer(null);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    }
  };



  // Show final score if quiz is finished
  if (quizFinished) {
    return (
      <div className="flex flex-col items-center justify-center mt-20">
        <h1 className="text-4xl font-bold text-white mb-4">Quiz Finished!</h1>
        <p className="text-2xl text-gray-200">
          Your final score: {score} / {beginnerQuestions.length + intermediateQuestions.length + advancedQuestions.length}
          <Button  name="restart"/>
        </p>
      </div>
    );
  }

  // Otherwise show current question
  return (
    <div className="w-full flex justify-center mt-10">
      <div className="w-[50%] min-h-[500px] border rounded-lg bg-gray-700 p-6 shadow-lg">
        <h1 className="text-center text-4xl font-bold font-serif text-white">
          React Interview Questions
        </h1>
<div className="flex justify-center gap-4 my-4">
  <Button name="beginner" active={level === "beginner"} />
  <Button name="intermediate" active={level === "intermediate"} />
  <Button name="advanced" active={level === "advanced"} />
</div>

        {questions.length > 0 && currentQuestion < questions.length && (
          <div className="mt-6 flex flex-col items-center">
            <p className="text-xl font-medium text-center text-white">
              {questions[currentQuestion].question}
            </p>

            {/* Options */}
            <div className="mt-4 flex flex-col gap-3 w-full max-w-md">
              {questions[currentQuestion].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(opt)}
                  disabled={!!selectedAnswer}
                  className={`px-4 py-2 rounded-lg cursor-pointer transition-all duration-300
                    ${selectedAnswer
                      ? opt === questions[currentQuestion].answer
                        ? "bg-green-500 text-white"
                        : opt === selectedAnswer
                        ? "bg-red-500 text-white"
                        : "bg-blue-500 text-white"
                      : "bg-blue-500 text-white hover:bg-blue-600"}`}
                >
                  {opt}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              className="mt-6 px-6 py-3 cursor-pointer bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 shadow-md"
              onClick={handleNext}
              disabled={!selectedAnswer}
            >
              {currentQuestion === questions.length - 1
                ? level === "advanced"
                  ? "Finish Quiz"
                  : "Next Level"
                : "Next Question"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
