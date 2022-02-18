// import
import React from "react";
import s from './Profile.module.css'
import {ProfileType} from "../../../Redux/profileReducer";
import {BigHead} from "@bigheads/core";
import {Preloader} from "../../OtherComponents/Preloader";

// types
type ProfileInfoPropsType = {
    profile: ProfileType
}

// components
export const ProfileInfo = function (props: ProfileInfoPropsType) {

    const TEMP_AVATAR = () => (
        <BigHead/>
    )

    if (!props.profile) {
        return <Preloader isFetching={true}/>
    } else {
        return (
            <div>
                <div className={s.pageName}>
                    <div>USER: {props.profile.fullName}</div>
                </div>
                <div className={s.profileInform}>
                    <div className={s.profileInfoLeft}>
                        <div className={s.userLogo}>
                            {!props.profile.photos.large ? TEMP_AVATAR() :
                                <img className={s.avatarUser} src={props.profile.photos.large} alt={'avatar'}/>}
                        </div>
                        <div className={s.profileInfoTextBox}>
                            <div className={s.userName}>{props.profile.fullName}</div>
                            <div className={s.userLocation}>{props.profile.contacts.mainLink}</div>
                            <div className={s.userLocation}>{props.profile.contacts.github}</div>
                            <div className={s.userLocation}>{props.profile.contacts.youtube}</div>
                            <div className={s.userWebsite}>
                                <a href={`mailto:${props.profile.contacts.website}`}>{props.profile.contacts.website}</a>
                            </div>
                            {props.profile.lookingForAJob ?
                                <div className={s.lookingForAJob}>
                                    Looking for job in the moment
                                </div>
                                : null}
                        </div>

                    </div>
                    <div className={s.profileInfoRight}>
                        <div className={s.userSlogan}>"{props.profile.aboutMe}"</div>
                    </div>
                </div>
            </div>
        )
    }


}