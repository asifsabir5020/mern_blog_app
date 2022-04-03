import React from "react";
import styles from './styles.module.scss';

export const InputText = props => {
    const { type, name, value, onChange, placeholder, error } = props;
    const { setDirty, errors, dirtyValues, isFormDirty } = error;
    const isError = (dirtyValues[name] || isFormDirty) && errors[name]
    return (
        <div className={styles.root}>
            <input
                className={styles.inputText}
                type={type ? type : 'text'}
                placeholder={placeholder}
                name={name}
                value={value || ''}
                onChange={onChange}
                onFocus={() => {
                    // console.log("onFocus");
                }}
                onBlur={() => {
                    setDirty(name);
                }}
            />
            {isError && (
                <div className={styles.error}>
                    {errors[name].message}
                </div>
            )}
        </div>
    )
}