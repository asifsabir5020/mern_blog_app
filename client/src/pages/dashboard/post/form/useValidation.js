import { useEffect } from "react";
import { setRequiredValidation } from "../../../../utils/misc";

export const useValidation = props => {
    const { values, error } = props;
    const { setErrors, setValid } = error;
    const requiredValues = {
        title: {
            value: values.title,
        },
        body: {
            value: values.body,
        },
    };

    const requireds = setRequiredValidation(requiredValues);

  
    useEffect(() => {

        const out = {
            ...requireds,
        };

        setValid(!Object.keys(out).length);
        setErrors(out);
    }, [values]);
}