import React from "react";
import {
    Button,
    TextField,
    Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions
} from "@material-ui/core";


const LogIn = ({...props}) => {
    return (
        <Dialog open={props.open} onClose={() => props.setOpen(false)} aria-labelledby='form-dialog-title'>
            <DialogTitle id='form-dialog-title'>
                Log In
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Log in to buy
                </DialogContentText>
                <TextField
                    autoFocus
                    margin='dense'
                    id='name'
                    label='Email Address'
                    type='email'
                    fullWidth
                />
                <TextField
                    margin='dense'
                    id='pass'
                    label='Password'
                    type='password'
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => props.setOpen(false)} color='primary'>
                    Cancel
                </Button>
                <Button onClick={() => props.setOpen(false)} color='primary'>
                    Log In
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default LogIn;