import React, { useState } from "react";
import { getOptions, getQuestions, isCorrect } from "./misc/questions";

function App() {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const restart = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  const clicked = (select) => {
    if (isCorrect(trian, opt, select)) setScore(score + 1);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  let questions = getQuestions();

  let opt = questions[currentQuestion]["opt"];
  let trian = questions[currentQuestion]["trian"];
  let opt_src = `assets/trians/${trian}.png`;
  let options = getOptions(trian, opt);

  return (
    <div className="App">
      <p className="jonasz">Jonasz P</p>
      <h1>TRIANQUIZ</h1>

      {showResults ? (
        <div className="results">
          <h2>rezultat</h2>
          <h3>
            {score} z 10 poprawnych odpowiedzi - ({(score / 10) * 100}%)
          </h3>
          <button onClick={() => restart()}>
            <img src="assets/arrow.png"></img>
          </button>
        </div>
      ) : (
        <div className="question-box">
          <div className="question-box-content">
            <h2>trójkąt {currentQuestion + 1} z 10</h2>

            <img src={opt_src} />
          </div>

          <div className="answer-box">
            <p>{opt} = ?</p>
            <div className="answers">
              {options.map((e) => {
                let prop_key = e + currentQuestion + opt;
                return (
                  <p key={prop_key} onClick={() => clicked(e)}>
                    {e}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
