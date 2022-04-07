import React from "react";
import classNames from "classnames";
import styles from './styles.module.scss';

export const InputTextArea = props => {
    const { type, name, value, onChange, placeholder, error, className, rows } = props;
    const { setDirty, errors, dirtyValues, isFormDirty } = error;
    const isError = (dirtyValues[name] || isFormDirty) && errors[name]
    return (
        <div className={styles.root}>
            <textarea
                className={classNames(styles.inputText, className)}
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
                rows={rows || 20}
            >
                ok
            </textarea>
            {isError && (
                <div className={styles.error}>
                    {errors[name].message}
                </div>
            )}
        </div>
    )
}