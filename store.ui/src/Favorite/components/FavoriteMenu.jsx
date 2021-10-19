import React, {useEffect} from "react";
import {Drawer, List, withStyles} from '@material-ui/core';

import '../../Cart/styles/css/cart.css';
import FavoriteEmpty from "./FavoriteEmpty";
import FavoriteComponent from "../containers/FavoriteComponent";
import {useStyles} from "../styles/FavoriteMenuStyles";

const FavoriteMenu = ({classes, ...props}) => {
    useEffect(() => {
        props.getFavorite();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Drawer className='drawer' anchor='right' open={props.open} onClose={() => props.setOpen(false)}>
            <h2 className={classes.heading}>Favorites</h2>
            {props.products.length > 0 ? (
                <div className={classes.drawerItem}>
                    <List className={classes.list}>
                        {props.products.map((product, index) => <FavoriteComponent
                            key={index} {...product}/>)}
                    </List>
                </div>
            ) : (
                <FavoriteEmpty setOpen={props.setOpen}/>
            )}
        </Drawer>
    )
}


export default withStyles(useStyles)(FavoriteMenu);
