import axios from "axios";
import React from "react";
import { Button } from "../../../../components/ui/form/button";
import { InputText } from "../../../../components/ui/form/inputText";
import { InputTextArea } from "../../../../components/ui/form/inputTextArea";
import { useAppContext } from "../../../../context/app";
import { useForm } from "../../../../hooks/useForm";
import styles from './styles.module.scss';
import { useValidation } from "./useValidation";


export const PostInput = props => {
    const { actions } = useAppContext();
    const { values, setFieldValue, error, setIsSubmitting, isSubmitting } = useForm();
    const { setDirty, isValid } = error;

    useValidation({ values, error });

    const handleSubmit = async e => {
        e.preventDefault();
        setDirty();
        if (!isValid) return;

        try {
            setIsSubmitting(true);
            await axios.post("/posts", values);
            setIsSubmitting(false);
        } catch (e) {
            setIsSubmitting(false);
            console.log(e);
        };
    }

    return (
        <div className={styles.root}>
            <h2>Create New Post</h2>
            <form onSubmit={handleSubmit} autoComplete="off" className={styles.form}>
                <InputText
                    className={styles.inputText}
                    placeholder="Post Title"
                    name="title"
                    value={values.title}
                    onChange={e => setFieldValue('title', e.target.value)}
                    error={error}
                />
                <InputTextArea
                    className={styles.inputText}
                    placeholder="write here ..."
                    name="body"
                    value={values.body}
                    onChange={e => setFieldValue('body', e.target.value)}
                    error={error}
                    rows={10}
                />

                <Button
                    className={styles.btn}
                    type="submit"
                    label={isSubmitting ? 'Saving...' : 'Save'}
                />
            </form>
        </div>
    )
}