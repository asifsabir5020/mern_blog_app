import React from "react";
import styles from './styles.module.scss';


export const RadioInputGroup = props => {
    const { name, children, direction } = props;
    return (
        <div className={styles.radioGroupRoot}>
            <div className={styles[direction]}>
                {children.map((item, i) => {
                    return (
                        <InputRadio {...item.props} name={name} key={`${name}-${i}`} />
                    )
                })}
            </div>
        </div>
    );

}

export const InputRadio = props => {
    const { name, value, onChange, label } = props;
    return (
        <div className={styles.radioRoot}>
            <input id={value} type="radio" name={name} value={value} onChange={onChange} />
            <label htmlFor={value}>{label}</label>
        </div>
    )
}