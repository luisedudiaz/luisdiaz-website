import firebase from "../utils/firebase.utils";
import { Roles } from "./roles.types";

export type AuthContext = {
  user: null | firebase.User;
  isLoggedIn: boolean;
  roles: Roles[];
  login?: (email: string, password: string) => Promise<void>;
  logout?: () => void;
  logoutWithRedirect?: (history: any) => void
}

export type Login = {
  email: string;
  password: string;
};
