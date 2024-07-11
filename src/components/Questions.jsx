import plusImg from "../assets/images/icon-plus.svg";
import minusImg from "../assets/images/icon-minus.svg";
import { useState } from "react";

function Questions({ questions }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <ul>
      {questions.map((question) => (
        <details
          key={question.id}
          className="cursor-pointer p-5 [&:not(:last-child)]:border-b border-lightPink md:w-[445px]  ease-in-out duration-300"
        >
          <summary className="flex justify-between">
            <h3
              className="text-darkPurple font-bold hover:text-[#a23ae6]"
              onClick={() => setIsOpen(!isOpen)}
            >
              {question.question}
            </h3>

            <span className="w-8">
              <img src={isOpen ? plusImg : minusImg} alt="plus" />
            </span>
          </summary>

          <p className="text-grayishPurple">{question.answer}</p>
        </details>
      ))}
    </ul>
  );
}

export default Questions;
