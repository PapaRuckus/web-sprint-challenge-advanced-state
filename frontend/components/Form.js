import React from "react";
import { connect } from "react-redux";
import {
  postQuiz,
  resetForm,
  setMessage,
  inputChange,
} from "../state/action-creators";

export function Form(props) {
  const { formState, inputChange, postQuiz } = props;

  const onChange = (evt) => {
    const { id, value } = evt.target;
    inputChange({ inputId: id, value });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    postQuiz(
      formState.newQuestion,
      formState.newTrueAnswer,
      formState.newFalseAnswer
    );
  };

  const disabled =
    formState.newQuestion.trim().length < 2 ||
    formState.newTrueAnswer.trim().length < 2 ||
    formState.newFalseAnswer.trim().length < 2;


  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input
        maxLength={50}
        onChange={onChange}
        id="newQuestion"
        value={formState.newQuestion}
        placeholder="Enter question"
      />
      <input
        maxLength={50}
        onChange={onChange}
        id="newTrueAnswer"
        value={formState.newTrueAnswer}
        placeholder="Enter true answer"
      />
      <input
        maxLength={50}
        onChange={onChange}
        id="newFalseAnswer"
        value={formState.newFalseAnswer}
        placeholder="Enter false answer"
      />
      <button id="submitNewQuizBtn" disabled={disabled}>Submit new quiz</button>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    infoMessage: state.infoMessage,
    formState: state.form, 
  };
};

const mapDispatchToProps = {
  postQuiz,
  resetForm,
  setMessage,
  inputChange,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
