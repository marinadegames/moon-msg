// import
import React from "react";
import {ProfileInfo} from "./ProfileInfo";
import {useSelector} from "react-redux";
import {rootReducerType} from "../../../Redux/store";
import {Navigate} from "react-router-dom";
import {RouteNames} from "../../../routes";

// components
export const Profile = () => {

    const isAuth = useSelector<rootReducerType, boolean>(state => state.auth.isAuth)
    if (!isAuth) {
        return <Navigate to={RouteNames.LOGIN}/>
    }

    return (
        <div>
            <ProfileInfo/>
            {/*<Posts profile={profile}/>*/}
        </div>
    )
}