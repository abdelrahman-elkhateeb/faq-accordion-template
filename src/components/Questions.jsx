function Questions({ questions }) {
  return (
    <ul>
      {questions.map((question) => (
        <li key={question.id}>
          {question.text} answer: {question.answer}
        </li>
      ))}
    </ul>
  );
}

export default Questions;
