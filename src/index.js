import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

export function initialize(element) {
  ReactDOM.render(React.createElement(App), element);
}

window.initializeArticles = initialize;