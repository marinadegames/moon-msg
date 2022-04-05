// import


// components
import {ProfileType, setUserProfileThunkCreator} from "../../redux/profileReducer";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Posts} from "../posts/Posts";
import {rootReducerType} from "../../redux/store";
import {ProfileInfo} from "./ProfileInfo";
import {RouteNames} from "../../routes";
import { Navigate } from "react-router-dom";

export const Profile = () => {

    const id = useSelector<rootReducerType, number | null>(state => state.auth.id)
    const isAuth = useSelector<rootReducerType, boolean>(state => state.auth.isAuth)
    const profile = useSelector<rootReducerType, ProfileType | null>(state => state.profilePage.profile)
    const dispatch = useDispatch()

    useEffect(() => {
        if (id) dispatch(setUserProfileThunkCreator(id))
    }, [id, dispatch])

    if (!isAuth) {
        return <Navigate to={RouteNames.PROFILE}/>
    }

    return (
        <div>
            <ProfileInfo profile={profile}/>
            <Posts profile={profile}/>
        </div>
    )
}