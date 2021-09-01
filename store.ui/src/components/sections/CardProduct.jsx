import React, {useState} from 'react';
import {Card, Icon, Image} from 'semantic-ui-react';
import {IconButton, Typography, withStyles} from "@material-ui/core";
import {Redirect} from 'react-router-dom';
import '../../css/card.css';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

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

const CardProduct = ({classes, addToCart, updateCount, addedCount, ...product}) => {

    const [redirect, setRedirect] = useState(false);
    const handleClick = () => {
        if (addedCount === 0) {
            addToCart(product.Id)
        } else if (addedCount > 0) {
            updateCount(product.Id)
        }
    }

    if (redirect) {
        return <Redirect to={`/product/${product.Id}`}/>
    }

    return (
        <Card className='cardMain'>
            <Card className='cardClick' onClick={() => setRedirect(true)}>
                <Image src={product.Image} wrapped ui={false}/>
                <Card.Content>
                    <Card.Header className='productName text'>
                        {product.Name}
                    </Card.Header>
                    <Card.Meta>
                        <span className='productShortDescription text'>{product.ShortDescription}</span>
                    </Card.Meta>
                </Card.Content>
            </Card>
            <Card.Content extra className='downContent'>
                <Typography className='priceContent text'>
                    Price:
                    <span className='price text'><Icon name='usd'/>{product.Price}</span>
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