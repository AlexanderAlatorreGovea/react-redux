import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleInitialData } from "../actions/shared";
import LeaderBoard from "./LeaderBoard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import AddPoll from "./AddPoll";
import Nav from "./Nav";
import Poll from "./Poll";

export default function App() {
  const isLoading = useSelector((state) => state.authedUser === null);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <Router>
      <Nav />
      <div className="container">
        {!isLoading && (
          <div>
            <Route path="/" exact>
              <Dashboard />
            </Route>
            <Route path="/leaderboard">
              <LeaderBoard />
            </Route>
            <Route path="/polls/:id">
              <Poll />
            </Route>
            <Route path="/add">
              <AddPoll />
            </Route>
          </div>
        )}
      </div>
      ;
    </Router>
  );
}
