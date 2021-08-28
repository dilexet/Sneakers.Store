import React, {useEffect} from 'react';
import {Button, withStyles} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import {useToasts} from "react-toast-notifications";

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

const Product = ({classes, addToCart, updateCount, addedCount, fetchById, ...props}) => {

    const {addToast} = useToasts();


    const {product} = props.product;

    console.log(props)
    useEffect(() => {
        const Id = props.match.params.Id;
        fetchById(Id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    const handleClick = () => {
        if (addedCount === 0) {
            addToCart(product.Id)
        } else if (addedCount > 0) {
            updateCount(product.Id)
        }
    }


    return (
        <h1>
            TEST
        </h1>
        // <Card>
        //     <Image src={product.Image} wrapped ui={false}/>
        //     <Card.Content>
        //
        //         <Card.Header>
        //             {product.Name}
        //         </Card.Header>
        //
        //         <Card.Meta>
        //             <span className='date'>{product.ShortDescription}</span>
        //         </Card.Meta>
        //
        //         <Card.Description>
        //             {product.Description}
        //         </Card.Description>
        //
        //     </Card.Content>
        //     <Card.Content extra>
        //     <span>
        //         <Icon name='usd'/>
        //         {product.Price}
        //     </span>
        //     </Card.Content>
        //
        //     <Button
        //         variant="contained"
        //         color="default"
        //         size="small"
        //         className={classes.smMargin}
        //         startIcon={<EditIcon/>}
        //         disabled={false}
        //         onClick={handleClick.bind(this)}
        //     >
        //         Add to cart + {addedCount}
        //     </Button>
        // </Card>
    )
}

export default (withStyles(styles)(Product));