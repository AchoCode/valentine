import React, { useState } from "react";
import { NavBar } from "../utilities/NavBar";
import "../styles/LoveQuiz.css";

export const LoveQuiz = () => {
  const quizData = [
    {
      question: "when did we first meet?",
      options: ["2022", "2023", "2018"],
      answer: "2022",
    },
    {
      question: "which movie brought us together?",
      options: [
        "Doctor strange",
        "Pirates of the carribean",
        "Game of thrones",
      ],
      answer: "Pirates of the carribean",
    },
    {
      question: "Whats my favorite color?",
      options: ["red", "white", "blue"],
      answer: "blue",
    },
    {
      question: "when did we first meet?",
      options: ["2022", "2020", "2021"],
      answer: "2022",
    },
    {
      question: "whats my favorite thing about you?",
      options: ["your smile", "your kindness", "Everything!"],
      answer: "Everything!",
    },
    {
      question: "when did we first meet?",
      options: ["2022", "2023", "2018"],
      answer: "2022",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore(score + 10);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };
  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };
  return (
    <div className="quiz">
      <NavBar />
      <div className="quiz-wrapper">
        <h1>💕 Relationship Quiz 💕</h1>
        {showResult ? (
          <div className="quiz-wrapper">
            <h2>
              Your Score: {score} / {quizData.length * 10}
            </h2>
            <h3>
              {score === quizData.length * 10
                ? "You know me so well! ❤️"
                : "Nice try! 😊"}
            </h3>
            <button className="ans-btn" onClick={() => handleRestart()}>
              Retake the Quiz
            </button>
          </div>
        ) : (
          <div>
            <h2>{quizData[currentQuestion].question}</h2>
            {quizData[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswerClick(option)}
                className="ans-btn"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
