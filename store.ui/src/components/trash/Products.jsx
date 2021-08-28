/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from "react";
import {
    Grid,
    Paper,
    Avatar,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    withStyles,
    ButtonGroup,
    Button
} from "@material-ui/core";

import {useToasts} from "react-toast-notifications";

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import ProductsForm from "../../containers/trash/ProductsForm";
import Loading from "../../components/other/Loading";

import Sort from "../../containers/catalog/Filter";


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

// TODO: разобраться

const Products = ({classes, ...props}) => {

    const [currentId, setCurrentId] = useState(0);

    const {addToast} = useToasts();


    useEffect(() => {
        props.fetchAllProducts();
    }, []);

    const onDelete = Id => {
        if (window.confirm('Are you sure to delete this record?')) {
            props.deleteProduct(Id, () => addToast("Deleted successfully", {appearance: 'info'}))
        }
    }

    return (
        <Paper className={classes.paper} elevation={3}>
            <Grid container>
                <Grid item xs>
                    <ProductsForm {...({currentId, setCurrentId})}/>
                </Grid>

                <Grid item xs>
                    <Sort/>
                </Grid>

                <Grid item xs>
                    <TableContainer>
                        <Table>
                            <TableHead className={classes.root}>
                                <TableRow>
                                    <TableCell>Image</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Description</TableCell>
                                    <TableCell>ShortDescription</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell> </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    !props.isLoading ? <Loading/> :
                                        props.productList.map((record, index) => {
                                                return (
                                                    <TableRow key={index} hover onClick={() => addToast(record.Name)}>
                                                        <TableCell>
                                                            <Avatar alt={record.Name} src={record.Image}
                                                                    className={classes.large}/>
                                                        </TableCell>
                                                        <TableCell>{record.Name}</TableCell>
                                                        <TableCell>{record.Description}</TableCell>
                                                        <TableCell>{record.ShortDescription}</TableCell>
                                                        <TableCell>{record.Price}</TableCell>
                                                        <TableCell>
                                                            <ButtonGroup>
                                                                <Button
                                                                    variant="contained"
                                                                    color="default"
                                                                    size="small"
                                                                    className={classes.smMargin}
                                                                    startIcon={<EditIcon/>}
                                                                    onClick={() => {
                                                                        setCurrentId(record.Id)
                                                                    }}
                                                                >
                                                                    Edit
                                                                </Button>
                                                                <Button
                                                                    variant="contained"
                                                                    color="secondary"
                                                                    size="small"
                                                                    className={classes.smMargin}
                                                                    startIcon={<DeleteIcon/>}
                                                                    onClick={() => onDelete(record.Id)}
                                                                >
                                                                    Delete
                                                                </Button>
                                                            </ButtonGroup>
                                                        </TableCell>
                                                    </TableRow>
                                                )
                                            }
                                        )
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default (withStyles(styles)(Products));