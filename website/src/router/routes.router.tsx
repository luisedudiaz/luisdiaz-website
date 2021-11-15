import React, { FC, Suspense, useContext } from "react";
import { Route, Routes } from "react-router";
import { context } from "../providers";
import { getAllowedRoutes } from "../utils/routes.utils";
import { Roles } from "../types";
import Layout from "../components/layouts";
import Loading from "../components/utils/loading";
import NotFoundPage from "../pages/404";

const AppRoutes: FC = () => {
  const { roles } = useContext(context.auth);
  const { links, loading } = useContext(context.links);
  if (loading) {
    return <Loading />
  }

  return (
    <Routes>
      <Route path="/" element={<Layout.Landing />}>
        {getAllowedRoutes([...roles, Roles.GUEST] as Roles[], links).map(
          (route) => {
            const Page = React.lazy(
              () => import(`../pages/${route.component}`)
            )
            return <Route key={route.path} path={route.path} element={
              <Suspense fallback={<Loading />}>
                <Page />
              </Suspense>
            } />
          }
        )}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
