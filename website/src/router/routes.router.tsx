import React, { FC, Fragment, Suspense, useContext } from "react";
import { Route, Switch } from "react-router";
import { context } from "../providers";
import { getAllowedRoutes } from "../utils/routes.utils";
import { Roles } from "../types";
import Layout from "../components/layouts/landing";
import Loading from "../components/utils/loading";
import NotFoundPage from "../pages/404";

const Routes: FC = () => {
  const { roles } = useContext(context.auth);
  const { links, loading } = useContext(context.links);


  return (
    <Fragment>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Switch>
            {getAllowedRoutes([...roles, Roles.GUEST] as Roles[], links).map(
              (route) => {
                return (
                  <Route
                    exact={route.exact}
                    key={route.name}
                    path={route.path}
                    component={React.lazy(
                      () => import(`../pages/${route.component}`)
                    )}
                  />
                );
              }
            )}
            {!loading && <Route path="*" component={NotFoundPage} />}
          </Switch>
        </Suspense>
      </Layout>
    </Fragment>
  );
};

export default Routes;
