import React from "react";
import {Icon, Image, List} from "semantic-ui-react";

import {withStyles} from "@material-ui/core";
import {useStyles} from "../styles/FavoriteComponentStyles";

const FavoriteComponent = ({classes, removeFromFavorite, ...product}) => {
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
            </List.Content>
            {/*<IconButton aria-label="cart" onClick={handleRemove.bind(this)}>*/}
            {/*    <DeleteIcon/>*/}
            {/*</IconButton>*/}
        </List.Item>
    );
}

export default withStyles(useStyles)(FavoriteComponent);