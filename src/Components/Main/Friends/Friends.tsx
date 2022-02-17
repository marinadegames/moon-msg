import React from "react";
import s from "./Friends.module.css";
import {CardUser} from "./CardUser/CardUser";
import {UserType} from "../../../Redux/usersReducer";


type PropsType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPageHandler: (num: number) => void
    onClickFollowHandler: (id: number) => void
    setTotalUserCount: (totalCount: number) => void
    onClickUnfollowHandler: (id: number) => void
}


export const Friends = (props: PropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div key={2}>
            <div className={s.pageName}>Friends</div>
            {pages.map(p => {
                return (
                    <span
                        onClick={() => props.setCurrentPageHandler(p)}
                        className={props.currentPage === p ? s.pageNumberButton_active : s.pageNumberButton}>{p}</span>
                )
            })}
            <div className={s.mainUsers}>


                {props.users.map((user: UserType) => {
                    return (
                        <CardUser name={user.name}
                                  id={user.id}
                                  uniqueUrlName={user.uniqueUrlName}
                                  photos={user.photos}
                                  status={user.status}
                                  followed={user.followed}
                                  onClickFollowHandler={props.onClickFollowHandler}
                                  onClickUnfollowHandler={props.onClickUnfollowHandler}
                        />
                    )
                })}
            </div>

            <button className={s.showMoreButton}>show more...</button>

        </div>
    )
}