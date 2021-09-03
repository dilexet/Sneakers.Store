import React, {useEffect} from "react";
import {Drawer, List, withStyles} from '@material-ui/core';

import '../../../css/cart.css';
import FavoriteEmpty from "./FavoriteEmpty";
import FavoriteComponent from "../../../containers/favorite/FavoriteComponent";

const styles = () => ({
    drawerItem: {
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
    },
    list: {
        width: 'auto',
        overflow: 'auto',
        marginBottom: '30px',
        flex: 1,
    },
    heading: {
        textAlign: 'center',
        padding: '15px 0px',
        marginBottom: '0px'
    },
});

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


export default withStyles(styles)(FavoriteMenu);
