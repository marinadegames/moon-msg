// import
import React from "react";
import s from './Profile.module.css'
import {Posts} from "./Posts/Posts";
import {PostType} from "../../../Redux/profileReducer";

// types
type ProfilePropsType = {
    postsUser: Array<PostType>
    userId: string
    dispatch: (action: any) => void
    avatar: any
}
// assets

// components

export const Profile = function ({postsUser, dispatch, ...props}: ProfilePropsType) {

    return (
        <div>
            <div className={s.pageName}>Profile</div>
            <div className={s.profileInform}>
                <div className={s.profileInfoLeft}>
                    <div className={s.userLogo}>
                        {props.avatar}
                    </div>
                    <div>
                        <div className={s.userName}>Eugene Pashkevich</div>
                        <div className={s.userBirthday}>17.02.1997</div>
                        <div className={s.userLocation}>Minsk, Belarus</div>
                        <div className={s.userEmail}><a
                            href='mailto:marinadegames@gmail.com'>marinadegames@gmail.com</a></div>

                    </div>
                </div>
                <div className={s.profileInfoRight}>
                    <div className={s.userSlogan}>"I AM REALLY LIKE A PIZZA!"</div>
                </div>


            </div>

            <Posts postsUser={postsUser}
                   userId={props.userId}
                   dispatch={dispatch}/>

        </div>
    )
}