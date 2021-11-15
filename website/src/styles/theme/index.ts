import { common } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#eea73b"
        },
        text: {
            primary: "#292929",
            secondary: "#a9a9a9"
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