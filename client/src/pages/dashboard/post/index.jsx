import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/form/button";
import { Table } from "../../../components/ui/table";
import { useAppContext } from "../../../context/app";
import styles from './styles.module.scss';


const columns = () => {
    return ([
        {
            title: 'Title',
            key: 'title',
            width: '20',
        },
        {
            title: 'Body',
            key: 'body',
            width: '50',
        },
        {
            title: 'Created At',
            key: 'createdAt',
            width: '10',
        },
        {
            title: 'Updated At',
            key: 'updatedAt',
            width: '10',
        },
        {
            title: 'Actions',
            width: '10',
            render: (record) => {
                return (
                    <div>This is a Text</div>
                )
            }
        }
    ]);
};

export const Post = props => {
    const navigate = useNavigate();
    const { state, actions } = useAppContext();
    const { post } = state;

    useEffect(() => {
        let postURL = (actions.getUserRole() === 'user') ? '/posts/user' : null;
        actions.fetchPostList(postURL);
    }, []);

    return (
        <div className={styles.root}>
            <div className={styles.breadCrumb}>
                <div>
                    <Button
                        label="Add New Post"
                        onClick={() => {
                            navigate('/dashboard/post/new')
                        }}
                    />
                </div>
            </div>
            <div className={styles.breadCrumb}>
                <Table columns={columns()} data={post.list} />
            </div>
        </div>
    )
}