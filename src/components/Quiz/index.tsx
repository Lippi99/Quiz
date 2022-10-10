import { useReducer } from "react";
import { QuizContainer } from "./styles";
import questions from "../../questions.json";

const initialState = {
  currentQuestion: 0,
  quizScore: 0,
  showScore: false,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "currentQuestion":
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
      };

    case "updateScore":
      return {
        ...state,
        quizScore: state.quizScore + 1,
      };
    case "completedQuiz":
      return {
        ...state,
        showScore: !state.showScore,
      };
    case "resetQuiz":
      return {
        ...state,
        currentQuestion: (state.currentQuestion = 0),
        quizScore: (state.quizScoe = 0),
        showScore: !state.showScore,
      };
    default:
      return state;
  }
};

export const Quiz = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { currentQuestion, quizScore, showScore } = state;

  const nextQuestion = currentQuestion + 1;
  const handleNextQuestion = (answerIsCorrect: boolean) => {
    if (answerIsCorrect) {
      dispatch({ type: "updateScore" });
    }
    if (nextQuestion < questions.length) {
      dispatch({ type: "currentQuestion" });
    } else {
      dispatch({ type: "completedQuiz" });
    }
  };

  const restartQuiz = () => {
    dispatch({ type: "resetQuiz" });
  };

  return (
    <QuizContainer>
      {showScore ? (
        <div className="showScore">
          <span>
            You hit {quizScore} of {questions.length}
          </span>

          <button onClick={restartQuiz}>Restart</button>
        </div>
      ) : (
        <>
          <div className="questionSide">
            <h1>
              Question {nextQuestion} / {questions.length}
            </h1>

            <span> {questions[currentQuestion].question}</span>
          </div>
          <div className="answerSide">
            {questions[currentQuestion].options.map((question) => (
              <button
                onClick={() => handleNextQuestion(question.isCorrect)}
                className="questionButton"
                key={question.answer}
              >
                {question.answer}
              </button>
            ))}
          </div>
        </>
      )}
    </QuizContainer>
  );
};
