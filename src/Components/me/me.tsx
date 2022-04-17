import {useSelector} from "react-redux";
import {Posts} from "../posts/Posts";
import {MeInfo} from "./meInfo";
import {RouteNames} from "../../routes";
import {Navigate} from "react-router-dom";
import React from "react";
import {Spinner} from "../otherComponents/Spinner";
import {rootReducerType} from "../../Redux/store";
import {ProfileType} from "../../Redux/profileReducer";

export const Me = () => {
    const isAuth = useSelector<rootReducerType, boolean>(state => state.auth.isAuth)
    const myProfile = useSelector<rootReducerType, ProfileType | null>(state => state.meProfilePage.profile)
    if (!isAuth) return <Navigate to={RouteNames.LOGIN}/>
    return (
        <div>
            {!myProfile
                ? <Spinner isLoading={isAuth} size={'300'} style={{width: '100%', display: 'flex', justifyContent: 'center'}}/>
                :
                <React.Fragment>
                    <MeInfo profile={myProfile}/>
                    <Posts profile={myProfile}/>
                </React.Fragment>
            }
        </div>
    )
}