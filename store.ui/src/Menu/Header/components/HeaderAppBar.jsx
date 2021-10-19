/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import {Container, withStyles} from "@material-ui/core";
import {variable} from "../../../Shared/variables/variable";
import {Link} from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from '@material-ui/icons/Favorite';
import CartMenu from "../../../Cart/containers/CartMenu";

import '../styles/css/header.css';
import FavoriteMenu from "../../../Favorite/containers/FavoriteMenu";
import {useStyles} from "../styles/HeaderAppBarStyle";

const HeaderAppBar = ({classes, ...props}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const [openCart, setOpenCart] = useState(false);
    const [openFavorite, setOpenFavorite] = useState(false);


    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleLogout = () => {
        props.logout();
        handleMenuClose();
    }

    useEffect(() => {
        props.getUser();
    }, []);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';

    const isNotAuth = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={menuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>
                <Link to='/login'>
                    Login
                </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Link to='/register'>
                    Register
                </Link>
            </MenuItem>
        </Menu>
    )

    const isAuth = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={menuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleLogout.bind(this)}>
                Logout
            </MenuItem>
        </Menu>
    )

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}>

            <MenuItem onClick={() => {
                handleMobileMenuClose();
                setOpenCart(true)
            }}>
                <IconButton aria-label="cart" color="inherit">
                    <Badge badgeContent={props.count} color="secondary">
                        <ShoppingCartIcon/>
                    </Badge>
                </IconButton>
                <p>Cart</p>
            </MenuItem>
            <CartMenu open={openCart} setOpen={setOpenCart}/>

            <MenuItem onClick={() => {
                handleMobileMenuClose();
                setOpenFavorite(true)
            }}>
                <IconButton aria-label="favorite" color="inherit">
                    <Badge badgeContent={props.countFavorite} color="secondary">
                        <FavoriteIcon/>
                    </Badge>
                </IconButton>
                <p>Favorite</p>
            </MenuItem>
            <FavoriteMenu open={openFavorite} setOpen={setOpenFavorite}/>


            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle/>
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <header className={classes.bar}>
                <AppBar className='appBar' position='fixed'>
                    <Container>
                        <Toolbar>

                            {/**/}
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="open drawer"
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Typography className={classes.title} variant="h6" noWrap>
                                <Link to='/' className={classes.link}>
                                    {variable.ProjectName}
                                </Link>
                            </Typography>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon/>
                                </div>
                                <InputBase
                                    placeholder="Search…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{'aria-label': 'search'}}
                                />
                            </div>
                            {/**/}

                            <div className={classes.grow}/>

                            <div className={classes.sectionDesktop}>
                                <IconButton aria-label="cart" onClick={() => setOpenCart(true)} color="inherit">
                                    <Badge badgeContent={props.count} color="secondary">
                                        <ShoppingCartIcon/>
                                    </Badge>
                                </IconButton>
                                <CartMenu open={openCart} setOpen={setOpenCart}/>

                                <IconButton aria-label="favorite" onClick={() => setOpenFavorite(true)} color="inherit">
                                    <Badge badgeContent={props.countFavorite} color="secondary">
                                        <FavoriteIcon/>
                                    </Badge>
                                </IconButton>
                                <FavoriteMenu open={openFavorite} setOpen={setOpenFavorite}/>

                                <IconButton
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    onClick={handleProfileMenuOpen}
                                    color="inherit"
                                >
                                    <AccountCircle/>
                                </IconButton>
                            </div>
                            <div className={classes.sectionMobile}>
                                <IconButton
                                    aria-label="show more"
                                    aria-controls={mobileMenuId}
                                    aria-haspopup="true"
                                    onClick={handleMobileMenuOpen}
                                    color="inherit"
                                >
                                    <MoreIcon/>
                                </IconButton>
                            </div>
                        </Toolbar>
                    </Container>
                </AppBar>
                {renderMobileMenu}
                {props.isAuth ? isAuth : isNotAuth}
            </header>
        </div>
    );
}

export default withStyles(useStyles)(HeaderAppBar);

