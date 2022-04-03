import React from "react";
import styles from './styles.module.scss';


export const InputCheckbox = props => {
    const { name, checked, onChange, label } = props;
    return (
        <div className={styles.root}>
            <input id={name} type="checkbox" name={name} checked={checked || false} onChange={onChange} />
            <label htmlFor={name}>{label}</label>
        </div>
    )
}
