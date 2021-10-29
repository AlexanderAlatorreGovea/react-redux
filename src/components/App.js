import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleInitialData } from "../actions/shared";

export default function App() {
  const loading = useSelector((state) => state.authedUser === null);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return <div className="container">
    {!loading && <h1>
      Redux Polls
    </h1> }
  </div>;
}
