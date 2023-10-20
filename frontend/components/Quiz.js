import React from "react";
import { connect } from "react-redux";

function Quiz(props) {
  const { loading } = props;

  console.log(loading)
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        loading ? (
          <>
            <h2>What is a closure?</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                A function
                <button>SELECTED</button>
              </div>

              <div className="answer">
                An elephant
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
    loading: state.quiz.loading,
  };
};

export default connect(mapStateToprops)(Quiz);
