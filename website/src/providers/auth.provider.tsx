import { createContext, FC, useEffect, useState } from "react";
import { getAuth, User, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
// import { toast } from "react-toastify";
import { AuthContext as IAuthContext } from "../types/auth.types";
import { Roles } from "../types";

export const AuthContext = createContext<IAuthContext>({
  isLoggedIn: false,
  user: null,
  roles: [],
});

const AuthProvider: FC = (props) => {
  const [user, setUser] = useState<null | User>(null);
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
    return onAuthStateChanged(getAuth(), async (user) => {
      const result = await getAuth().currentUser?.getIdTokenResult();
      const userRoles = result?.claims.roles as Roles[];
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
      setIsLoggedIn(false);
      await signOut(getAuth());
      setUser(null);
      setRoles([]);
    } catch (error) {
      console.log(error);
    }
  };

  const logoutWithRedirect = async (history: any) => {
    try {
      history.push("/")
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const user = (await signInWithEmailAndPassword(getAuth(), email, password))
        .user;
      const result = await getAuth().currentUser?.getIdTokenResult();
      const userRoles = result?.claims.roles as Roles[];
      if (userRoles) {
        setUser(user);
        setIsLoggedIn(!!user);
        setRoles(roles);
        // toast.success(`Welcome, ${user?.displayName}`);
      } else {
        logout!();
        setUser(null);
        setIsLoggedIn(false);
        setRoles([]);
        // toast.warn("Contact your administrator.");
      }
    } catch (error) {
      if (error instanceof Error) {
        // toast.error(error.message);
      } else {
        console.log(error)
      }
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
