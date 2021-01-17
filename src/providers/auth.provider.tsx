import { useApolloClient } from "@apollo/client";
import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useState,
} from "react";
import { useLogoutMutation, User } from "../generated/graphql";

interface IAuthContext {
  user: User | null;
  isLoggedIn: boolean;
  setUser?: Dispatch<SetStateAction<User | null>>;
  setIsLoggedIn?: Dispatch<React.SetStateAction<boolean>>;
  logout?: () => void;
}

export const AuthContext = createContext<IAuthContext>({
  isLoggedIn: false,
  user: null,
});

const AuthProvider: FC = (props) => {
  const u = localStorage.getItem("user") as unknown as User
  const client = useApolloClient();
  const [user, setUser] = useState<User | null>(u);
  const [isLoggedIn, setIsLoggedIn] = useState(!!u);
  const [logoutMutation] = useLogoutMutation();

  const logout = async () => {
    try {
      setUser(null);
      setIsLoggedIn(false);
      localStorage.clear();
      await logoutMutation();
      await client.clearStore();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn,
        setUser,
        setIsLoggedIn,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
