import { useEffect } from "react";
import Heading from "./components/Heading";
import Questions from "./components/Questions";
import "./index.css";
import { useState } from "react";
function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(function () {
    async function getQuestions() {
      const data = await fetch("http://localhost:8000/questions");
      const questions = await data.json();
      console.log(questions);
      setQuestions(questions);
    }
    getQuestions();
  }, []);

  return (
    <div className="container">
      <Heading />
      <Questions questions={questions} />
    </div>
  );
}

export default App;
