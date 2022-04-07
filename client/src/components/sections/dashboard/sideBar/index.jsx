import React from "react";
import { useNavigate } from "react-router-dom";
import styles from './styles.module.scss';

export const SideBar = props => {
    const navigate = useNavigate();
    return (
        <div className={styles.wrapper}>
            <ul className={styles.menu}>
                <li className={styles.menuItem} onClick={() => navigate('/dashboard')}>Dashboard</li>
                <li className={styles.menuItem} onClick={() => navigate('/dashboard/post')}>Post</li>
                <li className={styles.menuItem} onClick={() => navigate('/dashboard/post-category')}>Post Category</li>
            </ul>
        </div>
    )
}