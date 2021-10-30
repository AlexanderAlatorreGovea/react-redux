import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleInitialData } from "../actions/shared";
import LeaderBoard from "./LeaderBoard";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./Dashboard";
import AddPoll from "./AddPoll";

export default function App() {
  const loading = useSelector((state) => state.authedUser === null);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <Router>
      <div className="container">{!loading && <AddPoll />}</div>;
    </Router>
  );
}
