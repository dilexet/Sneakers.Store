import React from "react";
import {
    Button,
    TextField,
    withStyles,
    CssBaseline,
    Avatar,
    Typography,
    FormControlLabel, Checkbox, Grid, Link, Box, Container
} from "@material-ui/core";
import useForm from "../utils/useForm";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {Redirect} from "react-router-dom";
import {useStyles} from "../styles/AuthFormStyle";



const initialFieldValues = {
    UserName: '',
    Email: '',
    Password: '',
};


const Register = ({classes, ...props}) => {
    const {
        values, handleSubmit, handleInputChange, redirect
    } = useForm(initialFieldValues, props.register, props.response);

    if (redirect) {
        return <Redirect to='/login'/>
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Register
                </Typography>

                {
                    props.response && props.response.Status.toLowerCase() === 'error' ?
                        <Typography color='red'>{props.response.Message}</Typography> : ""
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
                        id="email"
                        label="Email"
                        name="Email"
                        value={values.Email}
                        onChange={handleInputChange}
                        autoComplete="email"
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
            <Box mt={8}/>
        </Container>
    )
}

export default withStyles(useStyles)(Register);