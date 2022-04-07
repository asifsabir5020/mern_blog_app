import React from "react";
import classNames from "classnames";
import styles from './styles.module.scss';


export const Table = props => {
    const { columns, data, className } = props;
    return (
        <div className={styles.root}>
            <table className={classNames(styles.table, className)}>
                {(columns.length > 0) && (
                    <thead>
                        <tr>
                            {columns.map((header, i) => {
                                return (
                                    <th style={{ width: `${header.width}%` }} key={`th-${i}`}>{header.title}</th>
                                )
                            })}
                        </tr>
                    </thead>
                )}
                {(data.length > 0) && (
                    <tbody>
                        {data.map((record, i) => {
                            return (
                                <tr key={`tbody-tr${i}`}>
                                    {columns.map((col, ii) => {
                                        const isRender = !!col.render;
                                        return (
                                            <td key={`tr-${i}-td${ii}`}>
                                                {isRender ? (
                                                    col.render(record)
                                                ) : <span>{record[col.key]}</span>}
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                )}
            </table>
            {(data.length === 0) && <div>No Data</div>}
        </div>
    )
}
