import { FC } from "react";
import { Box } from "@mui/material";
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { DrawerCreators, State } from '../../../../store';
import { DRAWER_WIDTH } from "../../../../utils/constants.utils";
import DrawerContainer from "./drawer/container";
import DrawerBody from "./drawer/body";
import Navbar from "./navbar";

const Container: FC = ({ children }) => {
    const dispatch = useDispatch()
    const { isOpen } = useSelector((state: State) => state.drawer)
    const { close } = bindActionCreators(DrawerCreators, dispatch)
    return <Box
        component="nav"
        sx={{ width: { lg: DRAWER_WIDTH }, flexShrink: { lg: 0 } }}
    >
        <Navbar />
        <DrawerContainer
            sx={{
                display: {
                    xs: "block",
                    lg: "none"
                }
            }}
            container={() => document.body}
            variant="temporary"
            open={isOpen}
            onClose={close}
            ModalProps={{
                keepMounted: true,
            }}
        >
            <DrawerBody />
        </DrawerContainer>
        <DrawerContainer
            sx={{
                display: {
                    xs: "none",
                    lg: "block"
                }
            }}
            variant="permanent"
            open
        >
            <DrawerBody />
        </DrawerContainer>
    </Box>
}

export default Container