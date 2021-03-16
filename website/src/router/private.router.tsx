import { FC, Fragment, memo, useContext } from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router";
import { context } from "../providers";
import { getAllowedRoutes } from "../config/routes.config";

const PrivateRoutes: FC = () => {
  const match = useRouteMatch("/app");
  const { isLoggedIn, roles } = useContext(context.auth);

  if (!isLoggedIn) {
    return <Redirect from="*" to="/" />;
  }

  return (
    <Fragment>
      <Switch>
        {getAllowedRoutes(roles).map((route) => {
          const {
            path,
            component: Component,
            children,
            title,
            permission,
            ...rest
          } = route;
          return (
            <Route {...rest} key={path} path={`${match!.path}${path}`}>
              <Component children={children} />
            </Route>
          );
        })}
      </Switch>
    </Fragment>
  );
};

export default memo(PrivateRoutes);
