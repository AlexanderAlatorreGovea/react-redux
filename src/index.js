import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./components/App";
import "./index.css";

import reducers from "./reducers";

function ColorfulBorder() {
  return (
    <React.Fragment>
      <ul className="border-container">
        <li className="border-item" style={{ background: "var(--red)" }} />
        <li className="border-item" style={{ background: "var(--blue)" }} />
        <li className="border-item" style={{ background: "var(--pink)" }} />
        <li className="border-item" style={{ background: "var(--yellow)" }} />
        <li className="border-item" style={{ background: "var(--aqua)" }} />
      </ul>
    </React.Fragment>
  );
}

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <ColorfulBorder />
    <App />
  </Provider>,
  document.getElementById("root")
);
