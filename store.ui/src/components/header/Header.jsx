import React from "react";
import {AppBar, Container, Toolbar, IconButton, Typography, Box, Button, withStyles} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';


import LogIn from "./authentication/LogIn";
import CartMenu from '../../containers/cart/CartMenu';
import {variable} from "../../variables/variable";

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(1)
    },
    title: {
        flexGrow: 1
    },
    bar: {
        marginBottom: theme.spacing(10)
    }
});

const Header = ({classes}) => {
    const [open, setOpen] = React.useState(false);

    return (
        <header className={classes.bar}>
            <AppBar position="fixed">
                <Container>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            {variable.ProjectName}
                        </Typography>
                        <Box mr={5}>
                            <CartMenu/>
                        </Box>
                        <Box mr={3}>
                            <Button color="inherit" variant="outlined" onClick={() => setOpen(true)}>
                                Log In
                            </Button>
                            <LogIn {...({open, setOpen})}/>
                        </Box>
                        <Button color="secondary" variant="contained">
                            Sign Up
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </header>
    )
}

export default withStyles(styles)(Header);