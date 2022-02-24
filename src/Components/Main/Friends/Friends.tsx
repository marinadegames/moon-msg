// imports
import React, {memo} from "react";
import s from "./Friends.module.css";
import {CardUser} from "./CardUser/CardUser";
import {UserType} from "../../../Redux/usersReducer";
import {Preloader} from "../../OtherComponents/Preloader";
import {Pagination} from "../../OtherComponents/Pagination";

// types
type PropsType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPageHandler: (currentPage: number) => void
    onClickFollowHandler: (id: number) => void
    setTotalUserCount: (totalCount: number) => void
    onClickUnfollowHandler: (id: number) => void
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void
    followingInProgress: Array<number>
    toggleIsFollowingIsProgress: (isFetch: boolean, userId: number) => void
}

// component
export const Friends = memo((props: PropsType) => {

    //return
    return (
        <div>
            <div className={s.pageName}>Friends</div>

            <Pagination totalUsersCount={props.totalUsersCount}
                        pageSize={props.pageSize}
                        currentPage={props.currentPage}
                        setCurrentPageHandler={props.setCurrentPageHandler}
            />

            {props.isFetching
                ? <Preloader isFetching={props.isFetching}/>
                :
                <>
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
                                          followingInProgress={props.followingInProgress}
                                          toggleIsFollowingIsProgress={props.toggleIsFollowingIsProgress}
                                />

                            )
                        })}
                    </div>
                    <button className={s.showMoreButton}>show more...</button>
                </>
            }

        </div>
    )
})