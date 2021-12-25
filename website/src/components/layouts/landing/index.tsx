import { FC } from "react"
import { Outlet } from "react-router"
import { Box } from "@mui/material"
import { DRAWER_WIDTH } from "utils/constants.utils";
import Footer from "./footer";
import Header from "./header";

const Layout: FC = () => {
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
        <Outlet />
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
