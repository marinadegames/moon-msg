// import
import React, {memo, useCallback, useState} from "react";
import s from './me.module.css'
import {useDispatch} from "react-redux";
import {Anonymous} from "../../utils/BigHeadsFile";
import {ProfileType} from "../../redux/profileReducer";
import {updateMyStatusTC} from "../../redux/meProfileReducer";

type PropsType = {
    profile: ProfileType
    status: string
}

export const MeInfo = memo(({profile, status}: PropsType) => {

    const [statusText, setStatusText] = useState<string>(status)
    const [editMode, setEditMode] = useState<boolean>(false)
    const dispatch = useDispatch()

    const changeInputValue = useCallback((e: string) => {
        setStatusText(e)
    }, [])

    const changeEditMode = () => {
        setStatusText(status)
        setEditMode(true)
    }

    const updateStatusHandler = useCallback(() => {
        setEditMode(false)
        dispatch(updateMyStatusTC(statusText))
    }, [dispatch, statusText])


    return (
        <div style={{margin:'1rem 0 0 0'}}>
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
                    {!editMode && <span className={s.userSlogan}>{status}</span>}
                    {editMode
                        && <>
                            <input className={s.editStatusInput}
                                   value={statusText}
                                   onChange={e => changeInputValue(e.currentTarget.value)}/>
                            <button className={s.setStatusButton} style={{margin: '10px 0 0 0'}} onClick={updateStatusHandler}>save</button>
                        </>}
                </div>
                {!editMode && <button onClick={changeEditMode} className={s.setStatusButton}>Edit status</button>}
            </div>
        </div>
    )
})