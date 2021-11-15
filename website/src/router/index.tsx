import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes.router";

// import { toast } from 'react-toastify';

// toast.configure({
//   autoClose: false
// });

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default Router;
