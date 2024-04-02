import Button from "./button.jsx";
function StartPage({ nextPage, quizTitle }) {
  return (
    <section
      title="Results Tab"
      className="min-w-full min-h-full whitespace-normal sm:p-4 md:p-12  "
    >
      <div id="Results" className="mx-0 md:mx-12 lg:mx-16 text-center">
        <h2 className="font-light text-6xl my-4">{quizTitle}</h2>
        <p className="font-bold text-5xl">Quiz</p>
      </div>
      <div className="my-12 mx-0 md:mx-12 lg:mx-16 grid place-items-center text-4xl ">
        <Button action="Start Quiz" onClick={nextPage} />
      </div>
    </section>
  );
}

export default StartPage;
