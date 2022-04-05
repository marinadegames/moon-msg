// import
import React, {useEffect} from "react";
import {ProfileInfo} from "./ProfileInfo";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../../../Redux/store";
import {Navigate} from "react-router-dom";
import {RouteNames} from "../../../routes";
import {ProfileType, setUserProfileThunkCreator} from "../../../Redux/profileReducer";

// components
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
            {/*<Posts profile={profile}/>*/}
        </div>
    )
}