import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faA, faB, faC, faD } from "@fortawesome/free-solid-svg-icons";

function Answers({
  choices,
  correctChoice,
  handleAnswerSelected,
  hasSubmitted,
}) {
  const [selectedChoice, setSelectedChoice] = useState(null);

  function handleChoice(index) {
    setSelectedChoice(index);
  }

  function handleChoice(index) {
    setSelectedChoice(index);
    const isCorrect = choices[index] === correctChoice;
    handleAnswerSelected(isCorrect);
  }

  const icons = [faA, faB, faC, faD];
  const SELECTED_QUESTION_STYLES = "bg-green-500 text-black";
  const ANSWER_INCORRECT = "bg-white text-black";

  return (
    <div className="flex-1 flex flex-col gap-4 py-8 md:py-20">
      {choices.map((choice, index) => {
        const isCorrect = choices[index] === correctChoice;
        const isSelected = selectedChoice === index;
        const shouldHighlightIncorrect = hasSubmitted && !isCorrect;

        return (
          <div
            key={index}
            onClick={() => handleChoice(index)}
            style={
              isSelected
                ? {
                    backgroundColor: "#34D399",
                    color: "black",
                    cursor: "pointer",
                  }
                : shouldHighlightIncorrect
                ? { backgroundColor: "red", cursor: "not-allowed" }
                : {}
            }
            className="flex-1 flex items-center p-4 gap-2 font-bold hover:bg-darkblue cursor-pointer border border-textcolor rounded-xl "
          >
            <FontAwesomeIcon
              icon={icons[index]}
              className=" text-2xl py-2 px-4 bg-textcolor text-black rounded-lg"
            />
            <p className="text-black dark:text-textcolor text-2xl">{choice}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Answers;
