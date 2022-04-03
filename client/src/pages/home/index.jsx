import React, { useEffect } from "react";
import { useAppContext } from "../../context/app";
import styles from './styles.module.scss';

export const Home = props => {
    const { state, actions } = useAppContext();

    useEffect(() => {
        actions.fetchPostList();
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                {state.post.list.map(item => (
                    <div className={styles.tile} key={item._id}>
                        <div className={styles.header}>
                            <img src="https://picsum.photos/seed/picsum/200/300" />
                        </div>
                        <div className={styles.content}>
                            {item.title}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}