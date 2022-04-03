import React from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticatedUser, removeAuthInfoFromLocal } from "../../../utils/auth";
import styles from './styles.module.scss';

export const Header = props => {
    const navigate = useNavigate();
    return (
        <header className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <h1>Logo</h1>
                </div>
                <nav className={styles.nav}>
                    <ul>
                        <li><a>About</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Store</a></li>
                        <li><a onClick={() => {
                            if (isAuthenticatedUser()) {
                                removeAuthInfoFromLocal();
                                navigate('/');
                            }else{
                                navigate('/auth/login');
                            }
                        }}>{isAuthenticatedUser() ? 'Logout' : 'Login'}</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}