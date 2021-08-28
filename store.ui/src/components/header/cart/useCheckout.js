// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";

const useCheckout = (initialFieldValues, checkout, setOpenOrder) => {

    const [values, setValues] = useState(initialFieldValues)

    const handleClose = () => {
        setValues({
            ...initialFieldValues
        });
        setOpenOrder(false);
    }

    const handleSubmit = () => {
        checkout(values);
        handleClose();
    }
    const handleInputChange = e => {
        const {name, value} = e.target;
        const fieldValue = {[name]: value}
        setValues({
            ...values,
            ...fieldValue
        })
    }

    return {
        values, handleClose, handleSubmit, handleInputChange
    };
}

export default useCheckout;