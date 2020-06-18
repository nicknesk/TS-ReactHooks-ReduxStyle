import React from 'react';
import { Typography } from '@material-ui/core';

function NotFound(): JSX.Element {
    return (
        <div>
            <br/><br/><br/><br/><br/><br/>
            <Typography variant = "h2" align = "center">
                404: Page not found
            </Typography>
        </div>
    );
}

export default NotFound;