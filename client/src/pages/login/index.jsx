import axios from "axios";
import React from "react";
import { Button } from "../../components/ui/form/button";
import { InputText } from "../../components/ui/form/inputText";
import { useAppContext } from "../../context/app";
import { useForm } from "../../hooks/useForm";
import styles from './styles.module.scss';
import { useValidation } from "./useValidation";


export const Login = props => {
    const { actions } = useAppContext();
    const { values, setFieldValue, error, setIsSubmitting, isSubmitting } = useForm();
    const { setDirty, isValid } = error;

    useValidation({ values, error });

    const handleSubmit = async e => {
        e.preventDefault();
        setDirty();
        if (!isValid) return;

        setIsSubmitting(true);
 
        await actions.login(values);

        setIsSubmitting(false);
        
    }

    return (
        <div className={styles.root}>
            <form onSubmit={handleSubmit} autoComplete="off" className={styles.form}>
                <div className={styles.field}>
                    <InputText
                        placeholder="Email"
                        name="email"
                        value={values.email}
                        onChange={e => setFieldValue('email', e.target.value)}
                        error={error}
                    />
                </div>
                <div className={styles.field}>
                    <InputText
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={e => setFieldValue('password', e.target.value)}
                        error={error}
                    />
                </div>
                <div className={styles.field}>
                    <Button
                        className={styles.btn}
                        type="submit"
                        label={isSubmitting ? 'Logging...' : 'Login'}
                    />
                </div>
            </form>
        </div>
    )
}