import { CssBaseline, ThemeProvider } from "@mui/material";
import { FC } from "react";
import { Provider as ReduxProvider } from "react-redux";
import AuthProvider, { AuthContext } from "./auth.provider";
import LinksProvider, { LinksContext } from "./links.provider";
import { theme } from "styles/theme";
import { store } from "store";

export const context = {
  auth: AuthContext,
  links: LinksContext,
};

const Providers: FC = (props) => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthProvider>
          <LinksProvider>{props.children}</LinksProvider>
        </AuthProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default Providers;
