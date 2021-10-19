import React from "react";
import {Icon, Image, List} from "semantic-ui-react";

import DeleteIcon from '@material-ui/icons/Delete';
import {IconButton, withStyles} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {useStyles} from "../styles/CartComponentStyles";


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

export default withStyles(useStyles)(CartComponent);