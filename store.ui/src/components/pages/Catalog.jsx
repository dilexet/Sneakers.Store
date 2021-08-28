import React, {useEffect} from "react";
import {
    withStyles,
    Container
} from "@material-ui/core";

import {Card} from "semantic-ui-react"

import Loading from "../other/Loading";
import Filter from "../../containers/catalog/Filter";
import CardProduct from "../../containers/catalog/CardProduct";


const useStyles = theme => ({
        root: {
            flexGrow: 1,
            "& .MuiTableCell-head": {
                fontSize: "1.25rem"
            }
        },
        catalogContent: {},
        catalogButtons: {},
        cardGrid: {
            marginTop: theme.spacing(4)
        },
        card: {},
        cardMedia: {
            paddingTop: "56.25%"
        },
        cardText: {},
        cardContent: {
            flexGrow: 1
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

    }
)

const Catalog = ({classes, ...props}) => {

    useEffect(() => {
        props.fetchAllProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <Filter/>
            <Container className={classes.cardGrid} maxWidth='md'>
                <Card.Group itemsPerRow={4}>
                    {
                        !props.isLoading ? <Loading/> :
                            props.productList.map((record, index) => <CardProduct key={index} {...record}/>)
                    }
                </Card.Group>
            </Container>
        </div>

    )
}

export default (withStyles(useStyles)(Catalog));