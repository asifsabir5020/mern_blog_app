import { useEffect, useMemo } from "react";
import { setRequiredValidation } from "../../utils/misc";
import { isValidEmail } from "../../utils/validations";

export const useValidation = props => {
    const { values, error } = props;
    const { setErrors, setValid } = error;
    const requiredValues = {
        email: {
            value: values.email,
        },
        password: {
            value: values.password,
        },
    };

    const requireds = setRequiredValidation(requiredValues);

    const emailValidation = useMemo(() => {
        const out = {};
        if(values.email && !isValidEmail(values.email)) {
            return {
                email: {
                    message: 'invalid email',
                }
            }
        }
        return out;
    }, [values.email]);
  
    useEffect(() => {

        const out = {
            ...requireds,
            ...emailValidation
        };

        setValid(!Object.keys(out).length);
        setErrors(out);
    }, [values]);
}