import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchQuiz, selectAnswer, postAnswer } from "../state/action-creators";

function Quiz(props) {
  const { fetchQuiz, quizData, selectedAnswer, selectAnswer, postAnswer } = props;

  useEffect(() => {
    if (!quizData) {
      fetchQuiz()
    }
  }, []);

  function handleAnswerClick(id) {
    selectAnswer(id);
  }

  
  function handleSubmitAnswer() {
    let quiz_id = quizData.quiz_id
    let answer_id = selectedAnswer
    selectAnswer(null)
    postAnswer(quiz_id, answer_id)
    fetchQuiz()
  }

  return (
    <div id="wrapper">
      {quizData ? (
        <>
          <h2>{quizData.question}</h2>

          <div id="quizAnswers">
            {quizData.answers.map((answer, idx) => (
              <div
                className={`answer ${
                  answer.answer_id === selectedAnswer ? "selected" : ""
                }`}
                key={idx}
              >
                {answer.text}
                <button
                  onClick={() => handleAnswerClick(answer.answer_id)}
                  className={
                    answer.answer_id === selectedAnswer ? "selected" : ""
                  }
                >
                  {answer.answer_id === selectedAnswer ? "SELECTED" : "Select"}
                </button>
              </div>
            ))}
          </div>

          <button
            id="submitAnswerBtn"
            onClick={handleSubmitAnswer}
            disabled={selectedAnswer === null}
          >
            Submit answer
          </button>
        </>
      ) : (
        "Loading next quiz..."
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  quizData: state.quiz.quizData,
  selectedAnswer: state.selectedAnswer,
});

export default connect(mapStateToProps, { fetchQuiz, selectAnswer, postAnswer })(Quiz);
