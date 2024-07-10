function Questions({ questions }) {
  return (
    <ul>
      {questions.map((question) => (
        <details
          key={question.id}
          className="cursor-pointer p-5 [&:not(:last-child)]:border-b border-lightPink w-[445px]"
        >
          <summary className="flex justify-between">
            <h3 className="text-darkPurple font-bold">{question.question}</h3>

            <span>
              <img src="/src/assets/images/icon-plus.svg" alt="" />
            </span>
          </summary>

          <p className="text-grayishPurple">{question.answer}</p>
        </details>
      ))}
    </ul>
  );
}

export default Questions;
