import * as React from "react";
import { useSelector } from "react-redux";

export default function App() {
  const store = useSelector((store) => store);

  return <div>Redux Polls</div>;
}
