// import
import React, {memo} from "react";
import s from './Profile.module.css'
import {ProfileType} from "../../Redux/profileReducer";
import {Spinner} from "../otherComponents/Spinner";
import {Anonymous} from "../../Utils/BigHeadsFile";

type PropsType = {
    profile: ProfileType | null
    status: string
}
// components
export const ProfileInfo = memo(({profile, status}: PropsType) => {

    if (!profile) return <Spinner isLoading={true} size={'300'} style={{width: '100%', display: 'flex', justifyContent: 'center'}}/>

    return (
        <div style={{margin: '1rem 0 0 0'}}>
            <div className={s.profileInform}>
                <div className={s.profileInfoLeft}>
                    <div className={s.userLogo}>
                        {!profile.photos.large ? Anonymous() :
                            <img className={s.avatarUser} src={profile.photos.large} alt={'avatar'}/>}
                    </div>
                    <div className={s.profileInfoTextBox}>
                        <div className={s.userName}>{profile.fullName}</div>
                        <div className={s.containerText}>
                            <b>Looking for job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
                        </div>
                        <div className={s.containerText}>
                            <b>My skills:</b> {profile.lookingForAJobDescription}
                        </div>
                        <div className={s.containerText}>
                            <b>About me:</b> {profile.aboutMe}
                        </div>
                        <br/>
                        <div className={s.containerText}>
                            <b>Contacts:</b> <br/>
                            {Object.entries(profile.contacts).map(c => {
                                if (c[1]) {
                                    return (
                                        <div key={c[0]}>
                                            <b><a href={`http://${c[1]}`}>{c[0]}</a></b>: {c[1]}
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>

                </div>
                <div className={s.profileInfoRight}>
                    <b>Status:</b>
                    <div>{status}</div>
                </div>
            </div>
        </div>
    )
})