import React, { FC, Fragment, Suspense, useContext } from "react";
import { Route, Switch } from "react-router";
import { context } from "../providers";
import { getAllowedRoutes } from "../utils/routes.utils";
import { Roles } from "../types";
import Layout from "../components/layouts";
import Loading from "../components/utils/loading";
import NotFoundPage from "../pages/404";

const Routes: FC = () => {
  const { roles } = useContext(context.auth);
  const { links, loading } = useContext(context.links);
  if (loading) {
    return <Loading />
  }

  return (
    <Fragment>
      <Suspense fallback={<Loading />}>
        <Switch>
          {getAllowedRoutes([...roles, Roles.GUEST] as Roles[], links).map(
            (route) => {
              const page = <Route
                exact={route.exact}
                path={route.path}
                component={React.lazy(
                  () => import(`../pages/${route.component}`)
                )}
              />
              if (route.permissions.includes(Roles.GUEST)) {
                return <Layout.Landing key={route.name}>
                  {page}
                </Layout.Landing>
              }
              return page
            }
          )}
          {!loading && <Route path="*" component={NotFoundPage} />}
        </Switch>
      </Suspense>

    </Fragment>
  );
};

export default Routes;
