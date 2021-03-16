import {Roles} from "./roles.config";

import Dashboard from "../pages/dashboard";
import { FC } from "react";
import { intersection } from "lodash";

export interface IRoute {
  component: FC
  path: string
  title?: string
  exact?: boolean
  permission?: Roles[]
  children?: IRoute[]
}

const routes: IRoute[] = [
  {
    component: Dashboard,
    path: "/",
    title: "Dashboard",
    exact: true,
    permission: [
      Roles.ADMIN
    ],
  }
]

export const isArrayWithLength = (arr: Roles[]) => {
  return Array.isArray(arr) && arr.length;
};

export const getAllowedRoutes = (roles: Roles[]) => {
  return routes.filter(({ permission }) => {
    if (!permission) return true;
    else if (!isArrayWithLength(permission)) return true;
    else return intersection(permission, roles).length;
  });
};

export default routes;
