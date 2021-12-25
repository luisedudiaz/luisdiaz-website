import { styled, } from "@mui/material/styles";
import { Drawer } from "@mui/material";
import { DRAWER_WIDTH } from "utils/constants.utils";

const DrawerContainer = styled(Drawer)(({ theme }) => ({
    '.MuiDrawer-paper': {
        boxSizing: 'border-box',
        width: DRAWER_WIDTH,
        backgroundColor: theme.palette.primary.main,
        scrollbarColor: `rgba(0, 0, 0, 0.2) ${theme.palette.primary.main}`,
        scrollbarWidth: "thin",
        "::-webkit-scrollbar": {
            width: 6,
            backgroundColor: theme.palette.primary.main
        },
        "::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            borderRadius: "0.5rem"
        },
    }
}))


export default DrawerContainer