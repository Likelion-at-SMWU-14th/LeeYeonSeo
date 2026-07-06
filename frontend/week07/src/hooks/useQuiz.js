import { useRef, useState } from "react";

export const useQuiz = (question) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const inputRef = useRef(null);

  const questions = [
    { question: "React에서 상태를 관리하는 Hook은?", answer: "useState" },
    {
      question: "컴포넌트가 마운트될 때 실행되는 Hook은?",
      answer: "useEffect",
    },
    { question: "DOM에 직접 접근할 때 사용하는 Hook은?", answer: "useRef" },
  ];

  const handleSubmit = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = userAnswer;
    setAnswers(newAnswers);

    // 4️⃣-1. 다음 문제로 이동하면서 input에 포커스 (아래에 setTimeout 주석처리만 풀면 됨)
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setUserAnswer("");
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setUserAnswer("");
    setAnswers([]);
    inputRef.current.value = "";
    inputRef.current.focus();
  };
  return {
    currentQuestion,
    userAnswer,
    setUserAnswer,
    answers,
    inputRef,
    handleSubmit,
    handleReset,
  };
};
