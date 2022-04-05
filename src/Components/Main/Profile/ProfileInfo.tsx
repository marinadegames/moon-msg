// import
import React, {memo, useCallback, useState} from "react";
import s from './Profile.module.css'
import {updateStatusTC} from "../../../Redux/profileReducer";
import {Preloader} from "../../OtherComponents/Preloader";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../../../Redux/store";
import {Anonymous} from "../../../Redux/BigHeadsFile";

// components
export const ProfileInfo = memo(({profile}: any) => {

    // local state
    const status = useSelector<rootReducerType, string>(state => state.profilePage.status)
    const [statusText, setStatusText] = useState<string>(status)
    const [editMode, setEditMode] = useState<boolean>(false)
    const dispatch = useDispatch()

    // functions
    const changeInputValue = useCallback((e: string) => {
        setStatusText(e)
    }, [])

    const updateStatusHandler = () => {
        setEditMode(false)
        dispatch(updateStatusTC(statusText))
    }

    // returns
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
                        {profile.lookingForAJob ?
                            <div className={s.lookingForAJob}>
                                Looking for job in the moment
                            </div>
                            : null}
                    </div>

                </div>
                <div className={s.profileInfoRight}>
                    {profile.aboutMe}

                    {!editMode
                        ?
                        <div className={s.userSlogan}
                             onDoubleClick={() => setEditMode(true)}>{statusText}
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
})