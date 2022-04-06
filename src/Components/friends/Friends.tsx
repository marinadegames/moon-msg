// imports
import React, {useCallback, useEffect} from "react";
import s from "./Friends.module.css";
import {useDispatch, useSelector} from "react-redux";
import {Pagination} from "../otherComponents/Pagination";
import {Preloader} from "../otherComponents/Preloader";
import {CardUser} from "./cardUser/CardUser";
import {rootReducerType} from "../../redux/store";
import {getUsersThunkCreator, UserType} from "../../redux/usersReducer";
import {Navigate} from "react-router-dom";
import {RouteNames} from "../../routes";

// component
export const Friends = () => {

    const totalUsersCount = useSelector<rootReducerType, number>(state => state.allUsers.totalUsersCount)
    const pageSize = useSelector<rootReducerType, number>(state => state.allUsers.pageSize)
    const currentPage = useSelector<rootReducerType, number>(state => state.allUsers.currentPage)
    const isFetching = useSelector<rootReducerType, boolean>(state => state.allUsers.isFetching)
    const users = useSelector<rootReducerType, UserType[]>(state => state.allUsers.users)
    const followingInProgress = useSelector<rootReducerType, number[]>(state => state.allUsers.followingInProgress)
    const isAuth = useSelector<rootReducerType, boolean>(state => state.auth.isAuth)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsersThunkCreator(currentPage, pageSize))
    }, [dispatch, currentPage, pageSize])

    const setCurrentPageHandler = useCallback((p: number) => {
        dispatch(getUsersThunkCreator(p, pageSize))
    }, [dispatch, pageSize])

    //return
    if (!isAuth) {
        return <Navigate to={RouteNames.LOGIN}/>
    }
    if (isFetching) return <Preloader isFetching={true}/>
    return (
        <div>
            <div className={s.pageName}>Friends</div>
            <Pagination totalUsersCount={totalUsersCount}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        setCurrentPageHandler={setCurrentPageHandler}
            />
            {isFetching
                ? <Preloader isFetching={isFetching}/>
                :
                <div className={s.mainUsers}>
                    {users.map((user: UserType) => {
                        return (
                            <CardUser name={user.name}
                                      key={user.id}
                                      id={user.id}
                                      uniqueUrlName={user.uniqueUrlName}
                                      photos={user.photos}
                                      status={user.status}
                                      followed={user.followed}
                                      followingInProgress={followingInProgress}
                            />
                        )
                    })}
                </div>

            }

        </div>
    )
}