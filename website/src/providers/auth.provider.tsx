import { createContext, FC, useEffect, useState } from "react";
import firebase, { auth } from "../utils/firebase.utils";
import { toast } from "react-toastify";
import { AuthContext as IAuthContext } from "../types/auth.types";
import { Roles } from "../types";

export const AuthContext = createContext<IAuthContext>({
  isLoggedIn: false,
  user: null,
  roles: [],
});

const AuthProvider: FC = (props) => {
  const [user, setUser] = useState<null | firebase.User>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(!!user);
  const [roles, setRoles] = useState<Roles[]>([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChange();
    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onAuthStateChange = () => {
    return auth().onAuthStateChanged(async (user) => {
      const result = await auth().currentUser?.getIdTokenResult();
      const userRoles: Roles[] = result?.claims.roles;
      if (userRoles) {
        setUser(user);
        setIsLoggedIn(!!user);
        setRoles([...userRoles, "GUEST"] as Roles[]);
      } else {
        logout!();
        setUser(null);
        setIsLoggedIn(false);
        setRoles([]);
      }
    });
  };

  const logout = async () => {
    try {
      await auth().signOut();
      setUser(null);
      setIsLoggedIn(false);
      setRoles([]);
    } catch (error) {
      console.log(error);
    }
  };

  const logoutWithRedirect = async (history: any) => {
    try {
      console.log(history);
      history.push("/")
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const user = (await auth().signInWithEmailAndPassword(email, password))
        .user;
      const result = await auth().currentUser?.getIdTokenResult();
      const userRoles: Roles[] = result?.claims.roles;
      if (userRoles) {
        setUser(user);
        setIsLoggedIn(!!user);
        setRoles(result?.claims.roles);
        toast.success(`Welcome, ${user?.displayName}`);
      } else {
        logout!();
        setUser(null);
        setIsLoggedIn(false);
        setRoles([]);
        toast.warn("Contact your administrator.");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn,
        roles,
        logout,
        login,
        logoutWithRedirect,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
