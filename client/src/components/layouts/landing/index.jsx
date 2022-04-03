import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../../sections/footer";
import { Header } from "../../sections/header";
import styles from './styles.module.scss';

export const LandingLayout = props => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <Header />
            </div>
            <div className={styles.content}>
                <Outlet />
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    )
}