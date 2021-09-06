import ReactDOM from "react-dom";
import Router from "./router";
import reportWebVitals from "./reportWebVitals";
import Providers from "./providers";
import "bootstrap";
import 'react-toastify/dist/ReactToastify.css';
import "./styles/index.scss";
import "rsuite/dist/styles/rsuite-default.css";

ReactDOM.render(
  <Providers>
    <Router />
  </Providers>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
