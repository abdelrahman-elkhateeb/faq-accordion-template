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
      setQuestions(questions);
    }
    getQuestions();
  }, []);

  return (
    <div className="bg-[url('/src/assets/images/background-pattern-desktop.svg')] bg-no-repeat bg-contain bg-custom grid place-items-center min-h-screen bg-lightPink">

      <div className="bg-white rounded-2xl p-8">
        <Heading />
        <Questions questions={questions} />
      </div>

    </div>
  );
}

export default App;
