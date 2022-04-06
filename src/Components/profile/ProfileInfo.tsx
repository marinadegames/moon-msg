// import
import React, {memo} from "react";
import s from './Profile.module.css'
import {Preloader} from "../otherComponents/Preloader";
import {Anonymous} from "../../utils/BigHeadsFile";
import {ProfileType} from "../../redux/profileReducer";

type PropsType = {
    profile: ProfileType | null
    status: string
}
// components
export const ProfileInfo = memo(({profile, status}: PropsType) => {


    if (!profile) return <Preloader isFetching={true}/>
    return (
        <div>
            <div className={s.pageName}>
                <div>USER: {profile.fullName}</div>
            </div>
            <div className={s.profileInform}>
                <div className={s.profileInfoLeft}>
                    <div className={s.userLogo}>
                        {!profile.photos.large ? Anonymous() :
                            <img className={s.avatarUser} src={profile.photos.large} alt={'avatar'}/>}
                    </div>
                    <div className={s.profileInfoTextBox}>
                        <div className={s.userName}>{profile.fullName}</div>
                        <div className={s.userLocation}>{profile.contacts.mainLink}</div>
                        <div className={s.userLocation}>{profile.contacts.github}</div>
                        <div className={s.userLocation}>{profile.contacts.youtube}</div>
                        <div className={s.userWebsite}>
                            <a href={`mailto:${profile.contacts.website}`}>{profile.contacts.website}</a>
                        </div>
                        {profile.lookingForAJob &&
                            <div className={s.lookingForAJob}>
                                Looking for job in the moment
                            </div>}
                    </div>

                </div>
                <div className={s.profileInfoRight}>
                    {status}
                </div>
            </div>
        </div>
    )
})