import { FC } from "react";
import AuthProvider, { AuthContext } from "./auth.provider";
import LinksProvider, { LinksContext } from "./links.provider";

export const context = {
  auth: AuthContext,
  links: LinksContext,
};

const Providers: FC = (props) => {
  return (
    <AuthProvider>
      <LinksProvider>{props.children}</LinksProvider>
    </AuthProvider>
  );
};

export default Providers;
