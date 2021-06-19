import { FC } from "react";
import { Roles } from "./roles.types";

export interface Route {
  component: FC
  path: string
  title?: string
  exact?: boolean
  permission?: Roles[]
  children?: Route[]
}
