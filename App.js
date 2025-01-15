import React from "react";
import ReactDOM from 'react-dom/client';

const heading = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement(
    "div",
    { id: "child1" },
    [React.createElement("h1", {}, "HELLOOOOO"),React.createElement("h2", {}, "BYEEEE")]
  ),
  React.createElement(
    "div",
    { id: "child2" },
    [React.createElement("h1", {}, "HELLOOOOO"),React.createElement("h2", {}, "BYEEEE")]
  )]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);