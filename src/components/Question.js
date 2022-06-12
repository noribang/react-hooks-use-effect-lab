import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code
  useEffect(() => {
    const timerID = setTimeout(() => setTimeRemaining(timeRemaining - 1), 1000);
    // timeRemaining < 0 ? setTimeRemaining(10) : timeRemaining;
    if (timeRemaining === 0) {
      console.log("hit: ", timeRemaining)
      onAnswered(false);
    }
    /* Cleanup function */
    return function cleanup() {
      clearTimeout(timerID);
    };
  }, [timeRemaining]);

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      {/* <h5>{timeRemaining} seconds remaining</h5> */}
      <h5>{timeRemaining < 0 ? setTimeRemaining(10) : timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
