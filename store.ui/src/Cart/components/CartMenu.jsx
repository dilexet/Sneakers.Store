import React, {useEffect} from "react";
import {Drawer, List, ListItem, Box, Button, withStyles} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import CartComponent from '../containers/CartComponent';
import Checkout from "../../Order/containers/Checkout";
import CartEmpty from "./CartEmpty";
import '../styles/css/cart.css';
import {useStyles} from "../styles/CartMenuStyles";

const CartMenu = ({classes, ...props}) => {
    const [openOrder, setOpenOrder] = React.useState(false);

    useEffect(() => {
        props.getCart();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (

        <Drawer className='drawer' anchor='right' open={props.open} onClose={() => props.setOpen(false)}>
            <h2 className={classes.heading}>Shopping cart</h2>
            {props.products.length > 0 ? (
                <div className={classes.drawerItem}>

                    <List className={classes.list}>
                        {props.products.map((product, index) => <CartComponent
                            key={index} {...product}/>)}
                    </List>

                    <Box className={classes.cartTotalBlock}>
                        <List name='totalPrice'>
                            <ListItem>
                        <span>
                            Total:
                        </span>
                                <Box/>
                                <b>{props.totalPrice}</b>&nbsp;$
                            </ListItem>
                        </List>
                        <Button
                            variant="contained"
                            className={classes.buttonCheckout}
                            endIcon={<ArrowForwardIcon/>}
                            onClick={() => setOpenOrder(true)}
                        >
                            Checkout
                        </Button>
                        <Checkout {...({openOrder, setOpenOrder})}/>
                    </Box>
                </div>
            ) : (
                <CartEmpty setOpen={props.setOpen}/>
            )}
        </Drawer>
    )
}


export default withStyles(useStyles)(CartMenu);
