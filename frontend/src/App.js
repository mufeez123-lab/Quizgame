import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/api/quiz")
      .then((response) => {
        console.log("Quiz data:", response.data); // Debugging line
        setQuestions(response.data);
      })
      .catch((error) => console.error("Error fetching quiz:", error));
  }, []);
  

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
    {questions.length === 0 ? (
      <h2>Loading questions...</h2>
    ) : showScore ? (
      <div className="score-section">
        You scored {score} out of {questions.length}
      </div>
    ) : (
      <div className="question-section">
        <h2>{questions[currentQuestion].question}</h2>
        {questions[currentQuestion].options.map((option) => (
          <button key={option} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    )}
  </div>
  );
};

export default App;