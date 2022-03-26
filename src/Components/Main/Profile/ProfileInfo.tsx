// import
import React, {useCallback, useState} from "react";
import s from './Profile.module.css'
import {ProfileType} from "../../../Redux/profileReducer";
import {BigHead} from "@bigheads/core";
import {Preloader} from "../../OtherComponents/Preloader";

// types
type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}

// components
export const ProfileInfo = (props: ProfileInfoPropsType) => {

    // local state
    const [statusText, setStatusText] = useState<string>(props.status)
    const [editMode, setEditMode] = useState<boolean>(false)

    // functions
    const changeInputValue = useCallback((e: string) => {
        setStatusText(e)
    }, [])

    const updateStatusHandler = () => {
        setEditMode(false)
        props.updateStatus(statusText)
    }

    // const TEMP_AVATAR = useCallback(() => (
    //     <BigHead/>
    // ), [])

    // returns
    if (!props.profile) return <Preloader isFetching={true}/>
    return (
        <div>
            <div className={s.pageName}>
                <div>USER: {props.profile.fullName}</div>
            </div>
            <div className={s.profileInform}>
                <div className={s.profileInfoLeft}>
                    <div className={s.userLogo}>
                        {!props.profile.photos.large ? <BigHead/>:
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
                    {/*{props.profile.aboutMe}*/}

                    {!editMode
                        ?
                        <div className={s.userSlogan}
                             onDoubleClick={() => setEditMode(true)}
                        >{statusText}
                        </div>

                        :
                        <input className={s.editStatusInput}
                               onBlur={updateStatusHandler}
                               autoFocus={true}
                               onChange={(e) => changeInputValue(e.currentTarget.value)}
                               value={statusText}/>
                    }

                </div>
            </div>
        </div>
    )
}