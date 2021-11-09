import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Routes from "./routes.router";
// import { toast } from 'react-toastify';

// toast.configure({
//   autoClose: false
// });

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="">
          <Routes />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
