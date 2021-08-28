import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        marginBottom: theme.spacing(5),
        marginTop: theme.spacing(5),
        '& > * + *': {

            marginLeft: theme.spacing(2),

        },
    },
}));

export default function Loading() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress/>
        </div>
    );
}