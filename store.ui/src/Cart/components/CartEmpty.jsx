import React from 'react';
import {Image} from "semantic-ui-react";
import {Box, Button, Typography} from "@material-ui/core";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const CartEmpty = ({...props}) => {
    return (
        <Box className='cartEmptyBox'>
            <Box className='main'>
                <Image className='cartEmptyImg' src='img/cartEmpty.png' size='small' wrapped/>
                <h3 className='head'>Cart is empty</h3>
                <Typography className='infoText'>
                    You should add a product to your shopping cart to order
                </Typography>
            </Box>
            <Button
                variant="contained"
                className='buttonBack'
                startIcon={<ArrowForwardIcon className='backIcon'/>}
                onClick={() => props.setOpen(false)}
            >
                Come back
            </Button>
        </Box>
    );

}
export default CartEmpty;