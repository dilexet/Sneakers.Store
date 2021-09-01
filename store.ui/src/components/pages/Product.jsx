import React, {useEffect} from 'react';
import {IconButton, Typography, withStyles} from "@material-ui/core";
import {Card, Icon, Image} from "semantic-ui-react";
import {withRouter} from "react-router-dom";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

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
    const {addToCart, updateCount, addedCount} = props;

    const handleClick = () => {
        if (addedCount === 0) {
            addToCart(props.item.Id)
        } else if (addedCount > 0) {
            updateCount(props.item.Id)
        }
    }

    useEffect(() => {
        const Id = props.match.params.id;
        props.fetchById(Id);
        console.log(props.item)
        console.log(props.list)
    }, []);

    return (
        <Card className='cardMain'>
            <Card className='cardClick'>
                <Image src={props.isLoading ? props.item.Image : ''} wrapped ui={false}/>
                <Card.Content>
                    <Card.Header className='productName text'>
                        {props.isLoading ? props.item.Name : ''}
                    </Card.Header>
                    <Card.Meta>
                        <span className='productShortDescription text'>
                            {props.isLoading ? props.item.ShortDescription : ''}
                        </span>
                    </Card.Meta>
                    <Card.Description>
                        {props.isLoading ? props.item.Description : ''}
                    </Card.Description>
                </Card.Content>
            </Card>
            <Card.Content extra className='downContent'>
                <Typography className='priceContent text'>
                    Price:
                    <span className='price text'><Icon name='usd'/>{props.isLoading ? props.item.Price : ''}</span>
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

export default withRouter(withStyles(styles)(Product));