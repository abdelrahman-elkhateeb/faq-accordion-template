import { useState } from "react";
function Questions({ questions }) {

  return (
    <ul>
      {questions.map((question) => (
        <details
          key={question.id}
          className="cursor-pointer p-5 [&:not(:last-child)]:border-b border-lightPink w-[445px] ease-in-out duration-300"
        >
          <summary className="flex justify-between">
            <h3 className="text-darkPurple font-bold hover:text-[#a23ae6]">
              {question.question}
            </h3>

            <span className="w-8">
              <img src="/src/assets/images/icon-plus.svg" alt="plus" />
            </span>
          </summary>

          <p className="text-grayishPurple">{question.answer}</p>
        </details>
      ))}
    </ul>
  );
}

export default Questions;
