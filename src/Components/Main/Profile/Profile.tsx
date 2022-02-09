// import
import React from "react";
import s from './Profile.module.css'
import {Posts} from "./Posts/Posts";
import {ProfileType} from "../../../Redux/profileReducer";
import {Dispatch} from "../../../Redux/redux-store";

// types
type ProfilePropsType = {
    profile: ProfileType
    dispatch: Dispatch
}
// assets

// components

export const Profile = function (props: ProfilePropsType) {

    return (
        <div>
            <div className={s.pageName}>Profile</div>
            <div className={s.profileInform}>
                <div className={s.profileInfoLeft}>
                    <div className={s.userLogo}>
                        {props.profile.avatar}
                    </div>
                    <div>
                        <div className={s.userName}>Eugene Pashkevich</div>
                        <div className={s.userBirthday}>17.02.1997</div>
                        <div className={s.userLocation}>Minsk, Belarus</div>
                        <div className={s.userEmail}><a
                            href={`mailto:${props.profile.email}`}>{props.profile.email}</a></div>

                    </div>
                </div>
                <div className={s.profileInfoRight}>
                    <div className={s.userSlogan}>"I AM REALLY LIKE A PIZZA!"</div>
                </div>


            </div>

            <Posts postsUser={props.profile.posts}
                   userId={props.profile.id}
                   dispatch={props.dispatch}/>

        </div>
    )
}