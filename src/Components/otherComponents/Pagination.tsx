// imports
import React, {memo} from "react";
import s from "../friends/Friends.module.css";

// types
type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPageHandler: (currentPage: number) => void
}

// component

export const Pagination = memo((props: PropsType) => {

    // counting
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    // return
    return (
        <>
            {pages.map(p => {
                return (
                    <span
                        key={p}
                        onClick={() => props.setCurrentPageHandler(p)}
                        className={props.currentPage === p ? s.pageNumberButton_active : s.pageNumberButton}>{p}</span>
                )
            })}
        </>
    )
}
)