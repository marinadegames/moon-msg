// import
import {useDispatch, useSelector} from "react-redux";
import {memo, useEffect} from "react";
import {ProfileInfo} from "./ProfileInfo";
import {RouteNames} from "../../routes";
import {Navigate, useParams} from "react-router-dom";
import {getStatusTC, ProfileType, setUserProfileTC} from "../../Redux/profileReducer";
import {rootReducerType} from "../../Redux/store";

export const Profile = memo(() => {

    const {userId} = useParams()
    const isAuth = useSelector<rootReducerType, boolean>(state => state.auth.isAuth)
    const profile = useSelector<rootReducerType, ProfileType | null>(state => state.profilePage.profile)
    const status = useSelector<rootReducerType, string>(state => state.profilePage.status)
    const dispatch = useDispatch()

    useEffect(() => {
        if (userId) {
            dispatch(setUserProfileTC(Number(userId)))
            dispatch(getStatusTC(Number(userId)))
        }
    }, [userId, dispatch])

    if (!isAuth) return <Navigate to={RouteNames.LOGIN}/>
    if (!userId) return <Navigate to={RouteNames.NOT_FOUND}/>
    return (
        <div>
            <ProfileInfo profile={profile} status={status}/>
        </div>
    )
})