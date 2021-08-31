import React from "react";
import {
    Avatar, Box,
    Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link,
    TextField, Typography,
    withStyles,

} from "@material-ui/core";
import useForm from "./useForm";
import {Copyright} from "@material-ui/icons";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Redirect} from "react-router-dom";

const styles = theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

const initialFieldValues = {
    UserName: '',
    Password: '',
};

const Login = ({classes, ...props}) => {
    const {
        values, handleSubmit, handleInputChange, redirect
    } = useForm(initialFieldValues, props.login, props.response);


    if (redirect) {
        return <Redirect to='/'/>
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>

                {
                    props.response.Status.toLowerCase() === 'error' ?
                        <Typography>{props.response.Message}</Typography> : ""
                }

                <form className={classes.form} onSubmit={handleSubmit} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="userName"
                        label="User Name"
                        name="UserName"
                        value={values.UserName}
                        onChange={handleInputChange}
                        autoComplete="UserName"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="Password"
                        value={values.Password}
                        onChange={handleInputChange}
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary"/>}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        // onClick={handleSubmit}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright/>
            </Box>
        </Container>
    )
}

export default withStyles(styles)(Login);