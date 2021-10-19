import React from "react";
import {
    Typography,
    withStyles, Container, CssBaseline,
} from "@material-ui/core";


import {Copyright} from "@material-ui/icons";
import {useStyles} from "../styles/FooterStyles";

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

export default withStyles(useStyles)(Footer);