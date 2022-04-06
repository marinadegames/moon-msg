// import


// components
import {ProfileType, setUserProfileTC} from "../../redux/profileReducer";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {rootReducerType} from "../../redux/store";
import {ProfileInfo} from "./ProfileInfo";
import {RouteNames} from "../../routes";
import {Navigate, useParams} from "react-router-dom";

export const Profile = () => {

    const {userId} = useParams()
    const isAuth = useSelector<rootReducerType, boolean>(state => state.auth.isAuth)
    const profile = useSelector<rootReducerType, ProfileType | null>(state => state.profilePage.profile)
    const dispatch = useDispatch()

    useEffect(() => {
        if (userId) dispatch(setUserProfileTC(Number(userId)))
    }, [userId, dispatch])

    if (!isAuth) return <Navigate to={RouteNames.LOGIN}/>
    if (!userId) return <Navigate to={RouteNames.NOT_FOUND}/>

    return (
        <div>
            <ProfileInfo profile={profile}/>
        </div>
    )
}