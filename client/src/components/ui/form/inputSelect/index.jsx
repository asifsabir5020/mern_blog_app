import React from "react";
import styles from './styles.module.scss';


export const InputSelect = props => {
    const { name, value, onChange, options, selectMessage } = props;
    return (
        <div className={styles.root}>
            <select name={name} value={value || ''} onChange={onChange}>
                {selectMessage && <option value='' key="000-XYZ-ABC">{selectMessage}</option>}
                {options.map(item => {
                    return (
                        <option key={item.value} value={item.value}>{item.text}</option>
                    )
                })}
            </select>
        </div>
    )
}