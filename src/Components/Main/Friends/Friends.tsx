// imports
import React from "react";
import s from "./Friends.module.css";
import {CardUser} from "./CardUser/CardUser";
import {UserType} from "../../../Redux/usersReducer";
import {Preloader} from "../../OtherComponents/Preloader";

// types
type PropsType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPageHandler: (num: number) => void
    onClickFollowHandler: (id: number) => void
    setTotalUserCount: (totalCount: number) => void
    onClickUnfollowHandler: (id: number) => void
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void
}

// component
export const Friends = (props: PropsType) => {

    // counting
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    //return
    return (
        <div>

            <div className={s.pageName}>Friends</div>

            <Preloader isFetching={props.isFetching}/>

            {pages.map(p => {
                return (
                    <span
                        key={p}
                        onClick={() => props.setCurrentPageHandler(p)}
                        className={props.currentPage === p ? s.pageNumberButton_active : s.pageNumberButton}>{p}</span>
                )
            })}
            <div className={s.mainUsers}>
                {props.users.map((user: UserType) => {
                    return (
                        <CardUser name={user.name}
                                  key={user.id}
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