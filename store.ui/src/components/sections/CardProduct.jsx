import React, {useState} from 'react';
import {Card, Icon, Image} from 'semantic-ui-react';
import {IconButton, Typography, withStyles} from "@material-ui/core";
import {Redirect} from 'react-router-dom';
import '../../css/card.css';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

const styles = theme => ({
    root: {
        "& .MuiTableCell-head": {
            fontSize: "1.25rem"
        }
    },
    paper: {
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    smMargin: {
        margin: theme.spacing(1),
    },
});

const CardProduct = ({
                         classes,
                         addToCart,
                         updateCount,
                         addedCount,
                         removeFromFavorite,
                         addToFavorite,
                         isFavorite,
                         ...product
                     }) => {

    const [redirect, setRedirect] = useState(false);
    const [isLiked, setIsLiked] = useState(isFavorite);

    const handleClick = () => {
        if (addedCount === 0) {
            addToCart(product.Id)
        } else if (addedCount > 0) {
            updateCount(product.Id)
        }
    }

    const handleLikeClick = () => {
        if (isLiked === true) {
            console.log('remove')
            console.log(isLiked)
            console.log(isFavorite)
            removeFromFavorite(product.Id)
            setIsLiked(false)
        } else {
            console.log('add')
            console.log(isLiked)
            console.log(isFavorite)
            addToFavorite(product.Id)
            setIsLiked(true)
        }
    }

    if (redirect) {
        return <Redirect to={`/product/${product.Id}`}/>
    }

    return (
        <Card className='cardMain'>
            <IconButton className='likeButton' onClick={handleLikeClick.bind(this)}>
                {
                    isLiked ? <FavoriteIcon className='likeIcon'/> :
                        <FavoriteBorderIcon className='likeIcon'/>
                }
            </IconButton>
            <Card className='cardClick' onClick={() => setRedirect(true)}>
                <Image src={product.Image} wrapped ui={false}/>
                <Card.Content>
                    <Card.Header className='productName text'>
                        {product.Name}
                    </Card.Header>
                    <Card.Meta>
                        <span className='productShortDescription'>{product.ShortDescription}</span>
                    </Card.Meta>
                </Card.Content>
            </Card>
            <Card.Content extra className='downContent'>
                <Typography className='priceContent'>
                    Price:
                    <span className='price'><Icon name='usd'/>{product.Price}</span>
                </Typography>
                <IconButton className='addToCartButton' disabled={addedCount > 0} onClick={handleClick.bind(this)}>
                    {
                        addedCount > 0
                            ? <DoneOutlineIcon style={{color: "#29BE00"}} size="small"/>
                            : <AddShoppingCartIcon size="small"/>
                    }
                </IconButton>
            </Card.Content>
        </Card>
    )
}

export default (withStyles(styles)(CardProduct));