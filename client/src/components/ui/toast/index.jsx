import React from "react";
import classNames from "classnames";
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';

const colors = {
    success: {
        title: 'Success!',
        color: '#5cb85c'
    },
    danger: {
        title: 'Danger',
        color: '#d9534f'
    },
    info: {
        title: 'Info',
        color: '#5bc0de'
    },
    warning: {
        title: 'Warning',
        color: '#f0ad4e'
    },
};

export const Toast = props => {
    const { notifications, deleteToast } = props;

    return (
        <div className={classNames(styles.notificationContainer)}>
            {notifications.map((toast, i) => {
                if (toast.autoClose) {
                    setTimeout(() => {
                        deleteToast(toast.key);
                    }, toast.time ? toast.time : 3000);
                }
                return (
                    <div
                        key={`${i}-toast-notification`}
                        className={styles.notification}
                        style={{ backgroundColor: colors[toast.type].color }}
                    >
                        <div className={styles.message}>
                            <p className={styles.notificationTitle}>{colors[toast.type].title}</p>
                            <p className={styles.notificationMessage}>{toast.description}</p>
                        </div>
                        <div className={styles.cancelBtn}>
                            <div onClick={() => {
                                deleteToast(toast.key);
                            }}>
                                <FiX size={20} />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
