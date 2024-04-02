function Questions({ questions, index, totalNumberQuestions }) {
  return (
    <section className="flex-1 whitespace-normal">
      <article>
        <div className="text-black dark:text-textcolor py-4">
          {" "}
          <i>
            Question {index} of {totalNumberQuestions}
          </i>
        </div>
        <div className="text-black dark:text-textcolor text-3xl font-bold py-4">
          {questions.question}
        </div>
      </article>
    </section>
  );
}

export default Questions;
