import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRouter from "./private.router";
import PublicRoutes from "./public.router";
// import Loading from "../components/organisms/loading";
import { toast } from 'react-toastify';


toast.configure({
  autoClose: false
});
const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      {/* <Loading /> */}
      <Switch>
        <Route path="/app">
          <PrivateRouter />
        </Route>
        <Route path="">
          <PublicRoutes />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
