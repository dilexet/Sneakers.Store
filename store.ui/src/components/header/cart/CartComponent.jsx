import React from "react";
import {Icon, Image, List} from "semantic-ui-react";

import DeleteIcon from '@material-ui/icons/Delete';
import {IconButton, withStyles} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const styles = theme => ({
    cartItem: {
        display: 'flex',
        alignItems: 'center',
        margin: '20px 20px',
        border: '1px solid #f3f3f3',
        borderRadius: theme.spacing(3)
    },
    img: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
    cartContent: {
        margin: 'auto',
        textAlign: 'center',
        padding: '20px 20px'
    },
    desc: {
        margin: '6px 6px'
    }
});


const CartComponent = ({classes, removeFromCart, updateCount, ...product}) => {
    return (
        <List.Item className={classes.cartItem}>
            <Image src={product.Product.Image} className={classes.img}/>
            <List.Content className={classes.cartContent}>
                <List.Header className={classes.desc} as='a'>{product.Product.Name}</List.Header>
                <List.Description className={classes.desc}>
                    {product.Product.ShortDescription}
                </List.Description>
                <List.Description className={classes.desc}>
                        <span>
                            <Icon name='usd'/>
                            {product.Product.Price}
                        </span>
                </List.Description>
                <List.Description>
                    <IconButton aria-label="decrement" onClick={removeFromCart.bind(this, product.Id)}>
                        <RemoveIcon fontSize='small'/>
                    </IconButton>
                    <span>
                        {product.CountProducts}
                    </span>
                    <IconButton aria-label="increment" onClick={updateCount.bind(this, product.Product.Id)}>
                        <AddIcon fontSize='small'/>
                    </IconButton>
                </List.Description>
            </List.Content>
            <IconButton className={classes.btnDelete} aria-label="cart" onClick={removeFromCart.bind(this, product.Id)}>
                <DeleteIcon/>
            </IconButton>
        </List.Item>
    );
}

export default withStyles(styles)(CartComponent);