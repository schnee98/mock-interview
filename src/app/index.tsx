import React from "react";
import ReactDOM from "react-dom/client";
import Question from "../entities/Question";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Question />
  </React.StrictMode>
);
