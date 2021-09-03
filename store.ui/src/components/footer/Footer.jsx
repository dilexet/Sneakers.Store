import React from "react";
import {
    Typography,
    withStyles, Container, CssBaseline,
} from "@material-ui/core";


import {Copyright} from "@material-ui/icons";

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        background: '#481173',
        marginTop: theme.spacing(5)
    },
    main: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        "& p": {
            color: '#C8B8CF'
        }
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
});

const Footer = ({classes}) => {
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Container component="main" className={classes.main} maxWidth="sm">
                <Typography variant='subtitle1' align='center' color='textSecondary' component='p'>
                    2021 <Copyright/> Sneakers Store — best sneaker shop.
                </Typography>
                <Typography variant='subtitle1' align='center' color='textSecondary' component='p'>
                    All rights reserved.
                </Typography>
            </Container>
        </div>
    )
}

export default withStyles(styles)(Footer);