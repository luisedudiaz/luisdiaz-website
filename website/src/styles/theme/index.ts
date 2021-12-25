import { common } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#eea73b",
            contrastText: "#fff"
        },
        background: {
            default: common.white,
            paper: "#fafafa",
        },
        error: {
            main: "#d9603c"
        },

    },
})