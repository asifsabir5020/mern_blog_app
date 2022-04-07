import React from "react";
import { useNavigate } from "react-router-dom";
import styles from './styles.module.scss';

export const Header = props => {
    const navigate = useNavigate();
    return (
        <div className={styles.wrapper}>
            <div className={styles.logoWrapper} onClick={() => navigate('/')}>
                <div className={styles.logo} onClick={() => navigate('/')}>
                    Logo
                </div>
            </div>
        </div>
    )
}