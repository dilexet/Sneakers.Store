import React, {useEffect} from "react";
import {
    withStyles,
    Container
} from "@material-ui/core";

import {Card} from "semantic-ui-react"

import Loading from "../../Shared/components/Loading";
import Filter from "../containers/Filter";
import CardProduct from "../containers/CardProduct";
import {useStyles} from "../styles/CatalogStyles"

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