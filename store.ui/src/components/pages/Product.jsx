import React, {useEffect} from 'react';
import {Button, withStyles} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import {Card, Icon, Image} from "semantic-ui-react";

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

const Product = ({classes, ...props}) => {


    const {product, addToCart, updateCount, addedCount, fetchById} = props;

    useEffect(() => {
        const Id = props.match.params.Id;
        fetchById(Id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const handleClick = () => {
        if (addedCount === 0) {
            addToCart(product.item.Id)
        } else if (addedCount > 0) {
            updateCount(product.item.Id)
        }
    }


    return (
        <Card>
            <Image src={product.item.Image} wrapped ui={false}/>
            <Card.Content>

                <Card.Header>
                    {product.item.Name}
                </Card.Header>

                <Card.Meta>
                    <span className='date'>{product.item.ShortDescription}</span>
                </Card.Meta>

                <Card.Description>
                    {product.item.Description}
                </Card.Description>

            </Card.Content>
            <Card.Content extra>
            <span>
                <Icon name='usd'/>
                {product.item.Price}
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

export default (withStyles(styles)(Product));