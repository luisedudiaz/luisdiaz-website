import { FC } from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import { common } from '@mui/material/colors'
import { Menu } from '@mui/icons-material';
import { DRAWER_WIDTH } from 'utils/constants.utils'
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { DrawerCreators } from 'store';

const Navbar: FC = () => {
    const dispatch = useDispatch()
    const { open } = bindActionCreators(DrawerCreators, dispatch)

    return <AppBar
        position="relative"
        sx={{
            width: { lg: `calc(100% - ${DRAWER_WIDTH}px)` },
            ml: { lg: `${DRAWER_WIDTH}px` },
            display: {
                lg: 'none'
            }
        }}
    >
        <Toolbar>
            <IconButton
                aria-label="open drawer"
                edge="start"
                onClick={open}
                sx={{ mr: 1.5, display: { lg: 'none' } }}
            >
                <Menu sx={{ color: common.white }} />
            </IconButton>
            <Typography variant="h6" noWrap component="div" sx={{ color: common.white, m: 'auto', fontWeight: "bold", fontSize: "1.5rem" }}>
                Luis Díaz
            </Typography>
        </Toolbar>
    </AppBar>
}

export default Navbar
