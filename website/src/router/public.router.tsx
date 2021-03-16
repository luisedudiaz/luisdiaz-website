import { FC, Fragment, useContext } from "react";

import Home from "../pages/home";
import NotFoundPage from "../pages/404";
import { Redirect, Route, RouteProps } from "react-router";
import { context } from "../providers";

import Layout from "../components/templates/layout/default";

const routes: Array<RouteProps> = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
];

const PublicRoutes: FC = () => {
  const { isLoggedIn } = useContext(context.auth);

  return isLoggedIn ? (
    <Redirect to="/app" />
  ) : (
    <Fragment>
      <Layout>
        {routes.map(({ component, path, exact }: RouteProps, i: number) => (
          <Route key={i} exact={exact} path={path} component={component} />
        ))}
        <Redirect to="/" />
      </Layout>
    </Fragment>
  );
};

export default PublicRoutes;
