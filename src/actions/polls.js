import { hideLoading, showLoading } from "react-redux-loading";
import { savePoll } from "../utils/api";

export const ADD_POLL = "ADD_POLL";
export const RECEIVE_POLLS = "RECEIVE_POLLS";

export const addPoll = (poll) => ({
  type: ADD_POLL,
  poll,
});

export const receivePolls = (polls) => ({
  type: RECEIVE_POLLS,
  polls,
});

export const handlePoll = (poll) => (dispatch, getState) => {
  const { authedUser } = getState();

  dispatch(showLoading());

  return savePoll({
    ...poll,
    author: authedUser,
  })
    .then((poll) => dispatch(addPoll(poll)))
    .then(() => dispatch(hideLoading));
};
