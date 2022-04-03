import React from "react";
import classNames from "classnames";
import styles from './styles.module.scss';


export const Button = props => {
    const { name, type, onChange, label, className } = props;
    return (
        <div className={styles.root}>
            <button
                className={classNames(styles.btn, className)}
                type={type ? type : 'button'}
                onChange={onChange}
            >
                {label}
            </button>
        </div>
    )
}
