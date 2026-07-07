import "./App.css";
import QuizPage from "./pages/QuizPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResultPage from "./pages/ResultPage";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          {/* 부모 Route */}
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<QuizPage />} />
            <Route path="quiz/:quizId" element={<QuizPage />} />
            <Route path="/result" element={<ResultPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
