import {ProfileType} from "../../redux/profileReducer";
import {useSelector} from "react-redux";
import {Posts} from "../posts/Posts";
import {rootReducerType} from "../../redux/store";
import {MeInfo} from "./meInfo";
import {RouteNames} from "../../routes";
import {Navigate} from "react-router-dom";
import {Preloader} from "../otherComponents/Preloader";
import React from "react";

export const Me = () => {

    const isAuth = useSelector<rootReducerType, boolean>(state => state.auth.isAuth)
    const myProfile = useSelector<rootReducerType, ProfileType | null>(state => state.meProfilePage.profile)
    const myStatus = useSelector<rootReducerType, string>(state => state.meProfilePage.status)

    if (!isAuth) return <Navigate to={RouteNames.LOGIN}/>

    return (
        <div>
            {!myProfile
                ? <Preloader isFetching={true}/>
                :
                <React.Fragment>
                    <MeInfo profile={myProfile} status={myStatus}/>
                    <Posts profile={myProfile}/>
                </React.Fragment>
            }
        </div>
    )
}