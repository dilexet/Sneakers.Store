import React from 'react';
import {withStyles} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useStyles} from "../styles/LoadingStyles";

function Loading({classes}) {
    return (
        <div className={classes.root}>
            <CircularProgress/>
        </div>
    );
}

export default withStyles(useStyles)(Loading)