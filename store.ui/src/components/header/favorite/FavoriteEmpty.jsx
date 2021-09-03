import React from 'react';
import {Image} from "semantic-ui-react";
import {Box, Button, Typography} from "@material-ui/core";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

//TODO: переделать
const FavoriteEmpty = ({...props}) => {
    return (
        <Box className='cartEmptyBox'>
            <Box className='main'>
                <Image className='cartEmptyImg' src='img/cartEmpty.png' size='small' wrapped/>
                <h3 className='head'>Favorites is empty</h3>
                <Typography className='infoText'>
                    You did not add products in your favorites
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
export default FavoriteEmpty;