import React from "react";
import classNames from "classnames";
import { Outlet } from "react-router-dom";
import styles from './styles.module.scss';
import { Header } from "../../sections/dashboard/header";
import { SideBar } from "../../sections/dashboard/sideBar";


export const DashboardLayout = props => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <Header />
            </div>
            <div className={styles.body}>
                <div className={styles.sideBar}>
                    <SideBar />
                </div>
                <div className={styles.mainContnet}>
                   <Outlet />
                </div>
            </div>
        </div>
    )
}