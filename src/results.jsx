function ResultsTab({ correctAnswer, totalNumberQuestions }) {
  return (
    <section
      title="Results Tab"
      className="min-w-full min-h-full whitespace-normal sm:p-4 md:p-12  "
    >
      <div id="Results" className="mx-0 md:mx-12 lg:mx-16">
        <h2 className="font-light text-6xl my-4">Quiz Completed </h2>
        <p className="font-bold text-5xl">You Scored...</p>
      </div>
      <div className=" mx-0 md:mx-12 lg:mx-16 grid place-items-center">
        <p className="text-5xl font-bold my-4">
          {correctAnswer} out of {totalNumberQuestions} {"("}
          {Math.round((correctAnswer / totalNumberQuestions) * 100)}%{")"}
        </p>
      </div>
    </section>
  );
}

export default ResultsTab;
