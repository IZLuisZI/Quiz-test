import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Header from "./header.jsx";
import Questions from "./questions.jsx";
import Answers from "./answers.jsx";
import StartPage from "./StartPage.jsx";
import zeldaQuestions from "./Questions.json";
import ButtonAction from "./button.jsx";
import ResultsTab from "./results.jsx";
import "./index.css";

function App() {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const [questions, setQuestions] = useState(zeldaQuestions.questions);

  const [display, setDisplay] = useState(0);

  const [displayMain, setdisplayMain] = useState(0);

  const [correctAnswers, setCorrectAnswers] = useState(0);

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  function handleAnswerSelected(isCorrect) {
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    }
  }

  const quizTitle = "The Legend of Zelda Quiz"; // Title of the quiz

  const next = () => {
    setDisplay((display + 1) % questions.length);
  };
  const preview = () => {
    setDisplay((display - 1 + questions.length) % questions.length);
  };

  const submit = () => {
    setdisplayMain(2);
    setHasSubmitted(true);
  };

  const start = () => {
    setdisplayMain(1);
  };

  const TOTAL_QUESTIONS = questions.length;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <main className=" sm:mx-12 md:mx-32 lg:mx-60 xl:mx-96 lg:mt-96  sm:mt-44 my-12 bg-white dark:bg-mainBackground md:p-4 p-4  rounded-xl text-black dark:text-textcolor">
        <Header />
        <div className="overflow-hidden">
          <section
            title="Main carousel"
            className="flex  whitespace-nowrap"
            style={{
              transform: `translateX(-${displayMain * 100}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            <StartPage nextPage={() => start()} quizTitle={quizTitle} />
            <section title="Quiz tab" className="min-w-full">
              <div
                id="carousel"
                className="flex overflow-hidden whitespace-nowrap "
              >
                {questions.map((question, index) => {
                  return (
                    <div
                      style={{
                        transform: `translateX(-${display * 100}%)`,
                        transition: "transform 0.5s ease-in-out",
                      }}
                      className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 min-w-full "
                    >
                      <Questions
                        questions={question}
                        index={index + 1}
                        totalNumberQuestions={TOTAL_QUESTIONS}
                      />
                      <Answers
                        hasSubmitted={hasSubmitted}
                        handleAnswerSelected={handleAnswerSelected}
                        choices={question.choices}
                        correctChoice={question.correctAnswer}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-between flex-col gap-2 sm:flex-col md:flex-row">
                {display === 0 ? (
                  <ButtonAction
                    onClick={() => preview()}
                    action="Last question"
                    iconName={faArrowLeft}
                    iconPlacement="left"
                  />
                ) : (
                  <ButtonAction
                    onClick={() => preview()}
                    action="Previous question"
                    iconName={faArrowLeft}
                    iconPlacement="left"
                  />
                )}

                {display === questions.length - 1 ? (
                  <ButtonAction
                    onClick={() => next()}
                    action="First question"
                    iconName={faArrowRight}
                    iconPlacement="right"
                  />
                ) : (
                  <ButtonAction
                    onClick={() => next()}
                    action="Next question"
                    iconName={faArrowRight}
                    iconPlacement="right"
                  />
                )}
              </div>
              {display === questions.length - 1 && (
                <section className="flex justify-between mt-4">
                  <span></span>
                  <ButtonAction
                    action="Submit"
                    id="submit"
                    iconName={null}
                    onClick={() => submit()}
                  />
                </section>
              )}
            </section>
            <ResultsTab
              correctAnswer={correctAnswers}
              totalNumberQuestions={TOTAL_QUESTIONS}
            />
          </section>
        </div>
      </main>
    </ThemeContext.Provider>
  );
}
export default App;
