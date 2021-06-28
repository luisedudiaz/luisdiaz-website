import { Roles } from "./roles.types";
import { Social } from "./social.types";

export type Header = {
  bio: string;
};

export type User = {
  header: Header;
  email: string;
  uid: string;
  socials: Social[];
  roles: Roles[];
};
