import React from 'react';

import Box from '@material-ui/core/Box';
import { withTheme } from '@material-ui/core/styles';

import NavBar from 'components/NavBar';

function HomePage(props) {
    // TODO: implement Firebase password change
    
    return (
        <Box>
            <NavBar />
        </Box>
    );
}

export default withTheme(HomePage);
