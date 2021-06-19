import { intersection } from "lodash";
import { Roles, Link } from "../types";

// const routes: Route[] = [
//   {
//     component: Dashboard,
//     path: "/",
//     title: "Dashboard",
//     exact: true,
//     permission: [
//       Roles.ADMIN
//     ],
//   }
// ]

export const isArrayWithLength = (arr: Roles[]) => {
  return Array.isArray(arr) && arr.length;
};

export const getAllowedRoutes = (roles: Roles[], links: Link[]) => {
  return links.filter(({ permissions }) => {
    if (!permissions) return true;
    else if (!isArrayWithLength(permissions)) return true;
    else return intersection(permissions, roles).length;
  });
};

