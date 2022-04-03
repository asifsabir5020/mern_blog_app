import React, { useState } from "react";

const initState = {
    values: {},
    errors: {},
    dirtyValues: {},
    isFormDirty: false,
    isValid: false,
    isSubmitting: false,
};

export const useForm = props => {
    const [state, setState] = useState(initState);

    const setFieldValue = (field, value) => {
        setState(state => {
            return {
                ...state,
                values: {
                    ...state.values,
                    [field]: value
                }
            }
        });
    }

    const setFieldValues = e => {
        const inputValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setState(state => {
            return {
                ...state,
                values: {
                    ...state.values,
                    [e.target.name]: inputValue
                }
            }
        });
    }

    const setErrors = (fieldsWithErrors) => {
        setState(state => {
            return {
                ...state,
                errors: {
                    // ...state.errors,
                    ...fieldsWithErrors
                }
            }
        })
    }

    const setDirty = (field) => {
        if (field) {
            setState(state => {
                return {
                    ...state,
                    dirtyValues: {
                        ...state.dirtyValues,
                        [field]: true
                    }
                }
            });
        } else {
            setState(state => {
                return {
                    ...state,
                    isFormDirty: true
                }
            })
        }
    }

    const setValid = (valid) => {
        setState(state => {
            return {
                ...state,
                isValid: valid
            }
        })
    }

    const setIsSubmitting = submitting => {
        setState(state => {
            return {
                ...state,
                isSubmitting: submitting
            }
        })
    }

    return {
        error: {
            errors: state.errors,
            setErrors,
            dirtyValues: state.dirtyValues,
            setDirty,
            isValid: state.isValid,
            setValid,
            isFormDirty: state.isFormDirty,
        },
        formState: state,
        values: state.values,
        setFieldValue,
        setIsSubmitting,
        isSubmitting: state.isSubmitting
    }

}