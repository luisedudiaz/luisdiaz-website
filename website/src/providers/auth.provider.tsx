import { createContext, FC, useEffect, useState } from "react";
import { Roles } from "../config/roles.config";
import firebase, { auth } from "../utils/firebase.utils";
import { toast } from "react-toastify";
import { getAllowedRoutes } from "../config/routes.config";
interface IAuthContext {
  user: null | firebase.User;
  isLoggedIn: boolean;
  roles: Roles[];
  login?: (email: string, password: string) => Promise<void>;
  logout?: () => void;
}

export const AuthContext = createContext<IAuthContext>({
  isLoggedIn: false,
  user: null,
  roles: [],
});

const AuthProvider: FC = (props) => {
  const [user, setUser] = useState<null | firebase.User>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(!!user);
  const [roles, setRoles] = useState([]);

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

      if (getAllowedRoutes(userRoles).length === 0) {
        logout!();
        setUser(null);
        setIsLoggedIn(false);
        setRoles([]);
      } else {
        setUser(user);
        setIsLoggedIn(!!user);
        setRoles(result?.claims.roles);
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

  const login = async (email: string, password: string) => {
    try {
      const user = (await auth().signInWithEmailAndPassword(email, password))
        .user;
      const result = await auth().currentUser?.getIdTokenResult();
      const userRoles: Roles[] = result?.claims.roles;

      if (getAllowedRoutes(userRoles).length === 0) {
        logout!();
        setUser(null);
        setIsLoggedIn(false);
        setRoles([]);
        toast.warn("Contact your administrator.")
      } else {
        setUser(user);
        setIsLoggedIn(!!user);
        setRoles(result?.claims.roles);
        toast.success(`Welcome, ${user?.displayName}`);
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
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
