import React from "react";
import { BrowserRouter, Switch, Route, RouteProps } from "react-router-dom";
import Home from "./pages/home";
import NotFoundPage from "./pages/404";
import Layout from "./components/templates/layout/default";

const routes: Array<RouteProps> = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "*",
    component: NotFoundPage,
  },
];

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {routes.map(({ component, path }: RouteProps, i: number) => (
            <Route key={i} exact component={component} path={path} />
          ))}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
