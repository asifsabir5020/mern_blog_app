import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { Button } from "../../../components/ui/form/button";
import { Table } from "../../../components/ui/table";
import { useAppContext } from "../../../context/app";
import styles from './styles.module.scss';
import axios from "axios";


const columns = props => {
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
                    <div className={styles.actions}>
                        <div className={styles.editBtn} onClick={() => {
                            props.handleEditClick(record._id);
                        }}>
                            <FiEdit size={20} />
                        </div>
                        <div className={styles.deleteBtn} onClick={() => {
                            props.handleDeleteClick(record._id);
                        }}>
                            <FiTrash2 size={20} />
                        </div>
                    </div>
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
        // let postURL = (actions.getUserRole() === 'user') ? '/posts/user' : null;
        // actions.fetchPostList(postURL);
    }, []);

    const handleEditClick = id => {
        navigate(`/dashboard/post/edit/${id}`);
    }

    const handleDeleteClick = async (id) => {
        const result = window.confirm("Do you want to delete this record?");
        if (result) {
            try {
                const postURL = (actions.getUserRole() === 'user') ? '/posts/user' : null;
                await axios.delete(`/posts/${id}`);
                actions.fetchPostList(postURL);
            } catch (e) {
                console.log(e);
            }
        }
    }

    return (
        <div className={styles.root}>
            <div className={styles.breadCrumb}>
                <div className={styles.headingSection}>
                    All Post List
                </div>
                <div className={styles.btnSection}>
                    <Button
                        label="Add New Post"
                        onClick={() => {
                            navigate('/dashboard/post/new')
                        }}
                    />
                </div>
            </div>
            <div className={styles.table}>
                <Table columns={columns({ handleEditClick, handleDeleteClick })} data={post.list} />
            </div>
        </div>
    )
}