import { FC, PropsWithChildren, ReactNode } from "react";
import { Box } from "@mui/material"
import { DRAWER_WIDTH } from "../../../utils/constants.utils";
import Footer from "./footer";
import Header from "./header";

const Layout: FC = ({ children }: PropsWithChildren<ReactNode>) => {
  return (
    <>
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: {
            lg: `calc(100% - ${DRAWER_WIDTH}px)`
          },
          ml: {
            lg: `${DRAWER_WIDTH}px`
          }
        }}
      >
        {children}
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
