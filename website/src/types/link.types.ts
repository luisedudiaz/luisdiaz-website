import { IconName, IconPrefix } from "@fortawesome/fontawesome-common-types"
import { Roles } from "./roles.types"

export type Link = {
  component: string,
  exact: boolean,
  path: string,
  permissions: Roles[],
  active: boolean,
} & PageList

export type LinksContext = {
  links: Link[],
  loading: boolean
}

export type PageList = {
  name: string;
  path: string;
  icon: IconName;
  prefix: IconPrefix;
}
