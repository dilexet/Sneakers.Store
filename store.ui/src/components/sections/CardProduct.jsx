import React from 'react';
import {Card, Icon, Image} from 'semantic-ui-react';
import {Button, withStyles} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import {Link} from 'react-router-dom';

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
    }
});

const CardProduct = ({classes, addToCart, updateCount, addedCount, ...product}) => {

    const handleClick = () => {
        if (addedCount === 0) {
            addToCart(product.Id)
        } else if (addedCount > 0) {
            updateCount(product.Id)
        }
    }


    return (

        <Card>
            <Image src={product.Image} wrapped ui={false}/>
            <Card.Content>

                <Card.Header>
                    <Link to={`/product/${product.Id}`}>{product.Name}</Link>
                </Card.Header>

                <Card.Meta>
                    <span className='date'>{product.ShortDescription}</span>
                </Card.Meta>

                {/*<Card.Description>*/}
                {/*    Matthew is a musician living in Nashville.*/}
                {/*</Card.Description>*/}

            </Card.Content>
            <Card.Content extra>
            <span>
                <Icon name='usd'/>
                {product.Price}
            </span>
            </Card.Content>
            <Button
                variant="contained"
                color="default"
                size="small"
                className={classes.smMargin}
                startIcon={<EditIcon/>}
                disabled={false}
                onClick={handleClick.bind(this)}
            >
                Add to cart + {addedCount}
            </Button>
        </Card>
    )
}

export default (withStyles(styles)(CardProduct));