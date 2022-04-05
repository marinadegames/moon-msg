// imports
import React, {useCallback, useEffect} from "react";
import s from "./Friends.module.css";
import {CardUser} from "./CardUser/CardUser";
import {getUsersThunkCreator, UserType} from "../../../Redux/usersReducer";
import {Preloader} from "../../OtherComponents/Preloader";
import {Pagination} from "../../OtherComponents/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../../../Redux/store";

// component
export const Friends = () => {

    const totalUsersCount = useSelector<rootReducerType, number>(state => state.allUsers.totalUsersCount)
    const pageSize = useSelector<rootReducerType, number>(state => state.allUsers.pageSize)
    const currentPage = useSelector<rootReducerType, number>(state => state.allUsers.currentPage)
    const isFetching = useSelector<rootReducerType, boolean>(state => state.allUsers.isFetching)
    const users = useSelector<rootReducerType, UserType[]>(state => state.allUsers.users)
    const followingInProgress = useSelector<rootReducerType, number[]>(state => state.allUsers.followingInProgress)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsersThunkCreator(currentPage, pageSize))
    }, [dispatch, currentPage, pageSize])

    const setCurrentPageHandler = useCallback((p: number) => {
        dispatch(getUsersThunkCreator(p, pageSize))
    }, [dispatch, pageSize])

    //return
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