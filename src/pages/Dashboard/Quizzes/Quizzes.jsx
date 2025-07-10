import { useState } from "react";
import QuizzesTables from "../QuizzesTables";
import QuizzesForm from "../../../components/QuizzesForm/QuizzesForm";

const Quizzes = () => {
  const [reload, setReload] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  return (
    <main className="h-auto">
      <div className="container px-6 mx-auto grid">
        <h2 className="my-6 text-2xl font-semibold" style={{ color: "#10244b" }}>
          Quizzes
        </h2>
        <div className="w-full overflow-hidden rounded-lg shadow-xs">
          <QuizzesForm
            onSuccess={() => {
              setReload(!reload);
              setSelectedQuiz(null); 
            }}
            initialData={selectedQuiz}
          />
          <QuizzesTables reload={reload} onEdit={setSelectedQuiz} />
        </div>
      </div>
    </main>
  );
};

export default Quizzes;
