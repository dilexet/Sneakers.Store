/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from "react";
import {AppBar, Container, Toolbar, IconButton, Typography, Box, Button, withStyles} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';


import CartMenu from '../../containers/cart/CartMenu';
import {variable} from "../../variables/variable";
import {Link} from "react-router-dom";

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
    },
    box: {
        float: 'left',
    },
    link: {
        color: 'white'
    }
});

const Header = ({classes, ...props}) => {


    const handleLogout = () => {
        props.logout();
        // window.location.reload();
    }

    useEffect(() => {
        props.getUser()
    }, []);


    const isNotAuth = (
        <Box mr={3}>
            <Box mr={3} className={classes.box}>
                <Link to='/login'>
                    Login
                </Link>
            </Box>
            <Link to='/register'>
                Register
            </Link>
        </Box>
    )

    const isAuth = (
        <Box mr={3} className={classes.box}>
            <Button onClick={handleLogout.bind(this)}>
                Logout
            </Button>
        </Box>
    )

    // TODO: смена на logout происходит только после обновления страницы

    return (
        <header className={classes.bar}>
            <AppBar position="fixed">
                <Container>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            <Link to='/' className={classes.link}>
                                {variable.ProjectName}
                            </Link>
                        </Typography>
                        <Box mr={5}>
                            <CartMenu/>
                        </Box>
                        <Box>
                            {props.isAuth ? isAuth : isNotAuth}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </header>
    )
}

export default withStyles(styles)(Header);