import { IconName, IconPrefix } from "@fortawesome/free-solid-svg-icons";

export type Social = {
  href: string;
  name: string;
  prefix?: IconPrefix;
  icon?: IconName;
};

export type PropsSocialList = {
  socials: Social[],
}
