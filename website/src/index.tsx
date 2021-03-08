import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import reportWebVitals from "./reportWebVitals";
import "./styles/index.scss";
import Providers from "./providers";

ReactDOM.render(
  <Providers>
    <Routes />
  </Providers>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
