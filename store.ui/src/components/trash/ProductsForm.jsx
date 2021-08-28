/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from "react";
import {
    Grid,
    TextField,
    withStyles,
    FormControl,
    InputLabel,
    InputAdornment,
    OutlinedInput,
    Button,
    FormHelperText
} from "@material-ui/core";
import {useToasts} from "react-toast-notifications";

import useForm from "./UseForm";

const initialFieldValues = {
    Name: '',
    Description: '',
    ShortDescription: '',
    Price: '',
    Image: ''
};

const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            minWidth: 230
        }
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 230
    },
    smMargin: {
        margin: theme.spacing(1),
    }
});

// TODO: разобраться
const ProductsForm = ({classes, ...props}) => {

    const {addToast} = useToasts();

    const validate = (fieldValues = values) => {
        let temp = {...errors};

        if ('Name' in fieldValues) {
            temp.Name = fieldValues.Name ? "" : "This field is required.";
        }

        if ('Description' in fieldValues) {
            temp.Description = fieldValues.Description ? "" : "This field is required.";
        }

        if ('ShortDescription' in fieldValues) {
            temp.ShortDescription = fieldValues.ShortDescription ? "" : "This field is required.";
        }

        if ('Price' in fieldValues) {
            temp.Price = (/^(0|[1-9]\d*)(\.[0-9]{1,2})?$/).test(fieldValues.Price) ? "" : "This field is required.";
        }

        if ('Image' in fieldValues) {
            temp.Image = fieldValues.Image ? "" : "This field is required.";

            if (temp.Image === "") {
                temp.Image = (/\.(jpeg|jpg|gif|png)$/).test(fieldValues.Image) ? "" : "This field is not valid.";
            }
        }

        setErrors({
            ...temp
        })

        if (fieldValues === values) {
            return Object.values(temp).every(x => x === "");
        }
    }

    const {
        values, setValues,
        errors, setErrors,
        handleInputChange, resetForm
    } = useForm(initialFieldValues, validate, props.setCurrentId);


    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            const onSuccess = () => {
                resetForm();
                addToast("Submitted successfully", {appearance: 'success'});
            }
            if (props.currentId === 0) {
                props.createProduct(values, onSuccess);
            } else {
                props.updateProduct(props.currentId, values, onSuccess);
            }

        }
    }

    useEffect(() => {
        if (props.currentId !== 0) {
            setValues({
                ...props.productList.find(x => x.Id === props.currentId)
            })
            setErrors({})
        }
    }, [props.currentId]);


    return (
        <form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs>
                    <TextField
                        name="Name"
                        variant="outlined"
                        label="Name"
                        value={values.Name}
                        onChange={handleInputChange}
                        {...(errors.Name && {error: true, helperText: errors.Name})}
                    />
                    <TextField
                        name="Description"
                        variant="outlined"
                        label="Description"
                        value={values.Description}
                        onChange={handleInputChange}
                        {...(errors.Description && {error: true, helperText: errors.Description})}
                    />
                </Grid>
                <Grid item xs>
                    <TextField
                        name="ShortDescription"
                        variant="outlined"
                        label="ShortDescription"
                        value={values.ShortDescription}
                        onChange={handleInputChange}
                        {...(errors.ShortDescription && {error: true, helperText: errors.ShortDescription})}

                    />
                    <FormControl
                        className={classes.formControl}
                        variant="outlined"
                        {...(errors.Price && {error: true})}
                    >

                        <InputLabel>Price</InputLabel>
                        <OutlinedInput
                            name="Price"
                            type="number"
                            value={values.Price}
                            onChange={handleInputChange}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            labelWidth={60}
                        />
                        {errors.Price && <FormHelperText>{errors.Price}</FormHelperText>}
                    </FormControl>
                    <TextField
                        name="Image"
                        variant="outlined"
                        label="Image"
                        value={values.Image}
                        onChange={handleInputChange}
                        {...(errors.Image && {error: true, helperText: errors.Image})}
                    />
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className={classes.smMargin}
                        >
                            Submit
                        </Button>
                        <Button
                            variant="contained"
                            className={classes.smMargin}
                            onClick={resetForm}
                        >
                            Reset
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </form>
    );
}

export default (withStyles(styles)(ProductsForm));