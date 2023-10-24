import React, {useState} from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {
const [formData, setFormData] = useState({
    newQuestion: '',
    newTrueAnswer: '',
    newFalseAnswer: '',
  });

  const { newQuestion, newTrueAnswer, newFalseAnswer } = formData;

  const onChange = (evt) => {
    const { id, value } = evt.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const onSubmit = (evt) => {
    // Handle form submission
  };

  // Check if all fields have values with more than one character length (trimmed)
  const isSubmitDisabled =
    newQuestion.trim().length < 1 ||
    newTrueAnswer.trim().length < 1 ||
    newFalseAnswer.trim().length < 1;


  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input
        maxLength={50}
        onChange={onChange}
        id="newQuestion"
        placeholder="Enter question"
      />
      <input
        maxLength={50}
        onChange={onChange}
        id="newTrueAnswer"
        placeholder="Enter true answer"
      />
      <input
        maxLength={50}
        onChange={onChange}
        id="newFalseAnswer"
        placeholder="Enter false answer"
      />
      <button id="submitNewQuizBtn" disabled={isSubmitDisabled}>
        Submit new quiz
      </button>
    </form>
  );
}

export default connect(st => st, actionCreators)(Form)
