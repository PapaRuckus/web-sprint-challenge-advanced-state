// ❗ You don't need to add extra action creators to achieve MVP
import axios from "axios";
import {
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
  SET_QUIZ_INTO_STATE,
  SET_SELECTED_ANSWER,
  SET_INFO_MESSAGE,
  INPUT_CHANGE,
  RESET_FORM,
} from "./action-types";

export function moveClockwise() {
  return { type: MOVE_CLOCKWISE };
}

export function moveCounterClockwise() {
  return { type: MOVE_COUNTERCLOCKWISE };
}

export function selectAnswer(answer) {
  return { type: SET_SELECTED_ANSWER, payload: answer };
}

export function setMessage(message) {
  return { type: SET_INFO_MESSAGE, payload: message };
}

export function inputChange(field) {
  return { type: INPUT_CHANGE, payload: field };
}

export function resetForm() {
  return { type: RESET_FORM };
}

export function setQuiz() {
  return { type: SET_QUIZ_INTO_STATE, payload: null };
}

export function setQuizSuccess(quizData) {
  return { type: SET_QUIZ_INTO_STATE, payload: quizData };
}

// ❗ Async action creators
// First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
// On successful GET:
// - Dispatch an action to send the obtained quiz to its state
export function fetchQuiz() {
  return function (dispatch) {
    dispatch(setQuiz());
    axios
      .get(`http://localhost:9000/api/quiz/next`)
      .then((response) => {
        dispatch(setQuizSuccess(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function postAnswer(quiz_id, answer_id) {
  return function (dispatch) {
    axios
      .post(`http://localhost:9000/api/quiz/answer`, {
        quiz_id: quiz_id,
        answer_id: answer_id,
      })
      .then((response) => {
        dispatch(setMessage(response.data.message));
      })
      .catch((error) => {
        console.log(error.message);
      });
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  };
}

export function postQuiz(question_text, true_answer_text, false_answer_text) {
  return function (dispatch) {
    axios
      .post(`http://localhost:9000/api/quiz/new`, {
        question_text: question_text,
        true_answer_text: true_answer_text,
        false_answer_text: false_answer_text,
      })
      .then((response) => {
        dispatch(
          setMessage(
            `Congrats: "${response.data.question}" is a great question!`
          )
        );
        dispatch(resetForm());
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
}
