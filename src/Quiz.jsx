import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Quiz = () => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: "What is the average temperature of the Earth?",
      options: ["15°C", "25°C", "35°C", "45°C"],
      correctAnswer: "15°C",
    },
    {
      question: "Which gas is most abundant in the Earth's atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      correctAnswer: "Nitrogen",
    },
    {
      question: "What is the main cause of global warming?",
      options: [
        "Deforestation",
        "Greenhouse gases",
        "Solar flares",
        "Volcanic eruptions",
      ],
      correctAnswer: "Greenhouse gases",
    },
  ];

  const handleChange = (e, questionIndex) => {
    setAnswers({
      ...answers,
      [questionIndex]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newScore = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        newScore++;
      }
    });
    setScore(newScore);
    setSubmitted(true);
  };

  return (
    <div className="container">
      <h2 className="my-4 text-center">Weather Quiz</h2>
      <form onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <div key={index} className="mb-3">
            <label className="form-label">{question.question}</label>
            {question.options.map((option, i) => (
              <div key={i} className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name={`question${index}`}
                  value={option}
                  onChange={(e) => handleChange(e, index)}
                  checked={answers[index] === option}
                />
                <label className="form-check-label">{option}</label>
              </div>
            ))}
          </div>
        ))}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {submitted && (
        <div className="mt-4">
          <h4>
            Your score: {score} / {questions.length}
          </h4>
        </div>
      )}
    </div>
  );
};

export default Quiz;
