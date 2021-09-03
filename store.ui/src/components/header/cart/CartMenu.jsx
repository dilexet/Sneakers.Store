import React, {useEffect} from "react";
import {Drawer, List, ListItem, Box, Button, withStyles, lighten, darken} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import CartComponent from '../../../containers/cart/CartComponent';
import Checkout from "../../../containers/cart/Checkout";
import CartEmpty from "./CartEmpty";
import '../../../css/cart.css';

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
    cartTotalBlock: {
        margin: '20px 20px',
        '& div': {
            flex: 1,
            height: '1px',
            borderBottom: '1px dashed black',
            position: 'relative',
            top: '-4px',
            margin: '0px 7px'
        },
        '& ul': {
            display: 'block',
            marginBottom: '20px'
        },
        '& li': {
            display: 'flex',
            alignItems: 'flex-end',
            padding: '10px 0px'
        },
    },

    buttonCheckout: {
        width: '100%',
        height: '55px',
        background: '#9dd558',
        marginBottom: '10px',
        borderRadius: '18px',
        border: 0,
        color: '#fff',
        fontSize: '16px',
        fontWeight: '500px',

        '& svg': {
            position: 'absolute',
            right: '30px',
            top: '17.5px',
        },

        '&:hover': {
            background: lighten('#9dd558', 0.1),
        },
        '&:active': {
            background: darken('#9dd558', 0.1),
        },
    },
    btnText: {},
});

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


export default withStyles(styles)(CartMenu);
