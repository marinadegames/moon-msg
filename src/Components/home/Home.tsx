// imports
import React, {useEffect} from 'react'
import s from './Home.module.css'
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {RouteNames} from "../../routes";
import {rootReducerType} from "../../Redux/store";
import {ProfileType} from "../../Redux/profileReducer";
import {getUsersTC, UserType} from "../../Redux/usersReducer";
import {CardUser} from "../friends/cardUser/CardUser";
import {Spinner} from "../otherComponents/Spinner";

// component
export const Home = () => {
    const id = useSelector<rootReducerType, number | null>(state => state.auth.id)
    const myProfile = useSelector<rootReducerType, ProfileType | null>(state => state.meProfilePage.profile)
    const totalUsersCount = useSelector<rootReducerType, number>(state => state.allUsers.totalUsersCount)

    const users = useSelector<rootReducerType, UserType[]>(state => state.allUsers.users)
    const followingInProgress = useSelector<rootReducerType, number[]>(state => state.allUsers.followingInProgress)
    const isAuth = useSelector<rootReducerType, boolean>(state => state.auth.isAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        if (id) {
            dispatch(getUsersTC(1, 10))
        }
    }, [id, dispatch])

    if (!isAuth) {
        return <Navigate to={RouteNames.LOGIN}/>
    }

    if (totalUsersCount === 0) return <Spinner isLoading={isAuth} size={'300'} style={{width: '100%', display: 'flex', justifyContent: 'center'}}/>

    return (
        <>
            <div className={s.pageName}>HOME</div>
            <div className={s.homeMain}>
                <h1>News for you, {myProfile && myProfile.fullName}:</h1>
                <h1>All users: {totalUsersCount}</h1>

                <h1 style={{margin: '20px 0 0 0 '}}>New samurai's:</h1>
                <div className={s.container}>
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
            </div>
        </>

    )
}