import { hideLoading, showLoading } from "react-redux-loading";
import { savePollAnswer } from "../utils/api";

export const ADD_ANSWER = "ADD_ANSWER";

export const addAnswer = ({ authedUser, id, answer }) => ({
  type: ADD_ANSWER,
  authedUser,
  id,
  answer,
});

export const handleAddAnswer = (answerData) => (dispatch) => {
  dispatch(showLoading());
  savePollAnswer(answerData)
    .then(() => dispatch(addAnswer(answerData)))
    .then(() => dispatch(hideLoading()));
};
