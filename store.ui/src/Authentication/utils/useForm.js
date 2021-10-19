// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";

const useForm = (initialFieldValues, fetch, response) => {

    const [values, setValues] = useState(initialFieldValues)
    const [redirect, setRedirect] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch(values);
        if (response.Message.toLowerCase() === 'success') {
            setRedirect(true)
        }
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
        values, handleSubmit, handleInputChange, redirect
    };
}

export default useForm;