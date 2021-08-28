import React from "react";
import {
    Button,
    TextField,
    Dialog, DialogTitle, DialogContent, DialogActions,
    withStyles,
} from "@material-ui/core";
import useCheckout from "./useCheckout";

const initialFieldValues = {
    Name: '',
    Phone: '',
};

const styles = () => ({

});

const Checkout = ({classes, ...props}) => {

    const {
        values, handleClose, handleSubmit, handleInputChange
    } = useCheckout(initialFieldValues, props.checkout, props.setOpenOrder);

    return (
        <Dialog open={props.openOrder} onClose={handleClose} aria-labelledby='form-dialog-title'>
            <DialogTitle id='form-dialog-title'>
                Checkout
            </DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin='dense'
                    id='Name'
                    variant="outlined"
                    label="Name"
                    name="Name"
                    value={values.Name}
                    onChange={handleInputChange}
                    type='text'
                    fullWidth
                />
                <TextField
                    margin='dense'
                    id='Phone'
                    variant="outlined"
                    label="Phone"
                    name="Phone"
                    value={values.Phone}
                    onChange={handleInputChange}
                    type='text'
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color='primary'>
                    Cancel
                </Button>
                <Button onClick={handleSubmit} color='primary'>
                    Buy
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default withStyles(styles)(Checkout);