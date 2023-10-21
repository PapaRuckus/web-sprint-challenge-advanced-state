import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchQuiz, selectAnswer } from "../state/action-creators";

function Quiz(props) {
  const { fetchQuiz, quizData, selectedAnswer, selectAnswer } = props;

  useEffect(() => {
    fetchQuiz();
  }, []);

  function handleSubmitAnswer() {
  }

  return (
    <div id="wrapper">
      {quizData ? (
        <>
          <h2>{quizData.question}</h2>

          <div id="quizAnswers">
            <div className="answer selected">
              {quizData.answers[0].text}
              <button
                onClick={() => selectAnswer(quizData.answers[0])}
                disabled={selectedAnswer !== null}
              >
                Select
              </button>
            </div>

            <div className="answer">
              {quizData.answers[1].text}
              <button
                onClick={() => selectAnswer(quizData.answers[1])}
                disabled={selectedAnswer !== null}
              >
                Select
              </button>
            </div>
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

export default connect(mapStateToProps, { fetchQuiz, selectAnswer })(Quiz);
