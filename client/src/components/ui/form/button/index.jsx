import React from "react";
import classNames from "classnames";
import styles from './styles.module.scss';


export const Button = props => {
    const { name, type, label, className, onClick } = props;
    return (
        <div className={styles.root}>
            <button
                className={classNames(styles.btn, className)}
                type={type ? type : 'button'}
                onClick={onClick}
            >
                {label}
            </button>
        </div>
    )
}
