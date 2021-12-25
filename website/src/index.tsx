import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import Router from "./router";
import Providers from "./providers";
import "./config/firebase.config"
import "./styles/index.css"

ReactDOM.render(
  <Providers>
    <Router />
  </Providers>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
