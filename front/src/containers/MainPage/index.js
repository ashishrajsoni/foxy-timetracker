import React, { useState } from 'react';

import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import NavBar from 'components/NavBar';
import LeftDrawer from 'components/LeftDrawer';
import AuthRoutes from 'navigation/AuthRoutes';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    routerBox: {
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth
        }
    }
}));

function MainPage(props) {
    const classes = useStyles();

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    function handleDrawerToggle() {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }

    return (
        <Box height="100%">
            <LeftDrawer mobileOpen={mobileDrawerOpen} drawerWidth={drawerWidth} onDrawerToggle={handleDrawerToggle} />
            <NavBar drawerWidth={drawerWidth} onDrawerToggle={handleDrawerToggle} />
            <Box className={classes.routerBox}>
                <AuthRoutes />
            </Box>
        </Box>
    );
}

export default MainPage;
