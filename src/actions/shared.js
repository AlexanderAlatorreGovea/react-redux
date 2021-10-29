import { hideLoading, showLoading } from "react-redux-loading";
import { getInitialData } from "../utils/api";
import { setAuthedUser } from "./authuser";
import { receivePolls } from "./polls";
import { receiveUsers } from "./users";

const AUTED_ID = "tylermcginnis";

export const handleInitialData = () => (dispatch) => {
  dispatch(showLoading());

  return getInitialData().then(({ users, polls }) => {
    dispatch(hideLoading());
    dispatch(receiveUsers(users));
    dispatch(receivePolls(polls));
    dispatch(setAuthedUser(AUTED_ID));
  });
};
