import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchQuiz } from "../state/action-creators";

function Quiz(props) {
  const { fetchQuiz, quizData } = props;

  useEffect(() => {
    fetchQuiz();
  }, []);

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        quizData ? (
          <>
            <h2>{quizData.question}</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                {quizData.answers[0].text}
                <button>Select</button>
              </div>

              <div className="answer">
                {quizData.answers[1].text}
                <button>Select</button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : (
          "Loading next quiz..."
        )
      }
    </div>
  );
}

const mapStateToprops = (state) => {
  return {
    quizData: state.quiz.quizData,
  };
};

export default connect(mapStateToprops, { fetchQuiz })(Quiz);
