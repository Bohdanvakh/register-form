import React from "react";
import { useState, useEffect } from "react";
import validationinfo from "./validateInfo";

const useForm = (callback, validationinfo) => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        password2: "",
    });
    const [errors, setErrors] = useState({});
    const [isSubmited, setIsSubmited] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors(validationinfo(values));
        setIsSubmited(true);
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmited) {
            callback();
        }
    }, [errors])

    return { handleChange, values, handleSubmit, errors };
}

export default useForm;