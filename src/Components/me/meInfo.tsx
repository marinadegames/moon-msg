// import
import React, {memo, useCallback, useState} from "react";
import s from './me.module.css'
import {useDispatch, useSelector} from "react-redux";
import {ProfileType, savePhotoTC, updateMyStatusTC} from "../../Redux/meProfileReducer";
import {rootReducerType} from "../../Redux/store";
import {Anonymous} from "../../Utils/BigHeadsFile";


type PropsType = {
    profile: ProfileType
    changeProfileEditMode: () => void
}

export const MeInfo = memo(({profile, changeProfileEditMode}: PropsType) => {

    const [statusText, setStatusText] = useState<string>('')
    const [editMode, setEditMode] = useState<boolean>(false)
    const status = useSelector<rootReducerType, string>(state => state.meProfilePage.status)
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

    const onMainPhotoSelected = (e: any) => {
        dispatch((savePhotoTC(e.target.files[0])))
    }

    const changeEditModeProfileCallback = () => {
        changeProfileEditMode()
    }

    return (
        <div style={{margin: '1rem 0 0 0'}}>
            <div className={s.profileInform}>
                <div className={s.profileInfoLeft}>
                    <div className={s.container}>
                        <div className={s.userLogo}>
                            {!profile.photos.large ? Anonymous() :
                                <img className={s.avatarUser}
                                     src={profile.photos.large}
                                     alt={'avatar'}/>}
                        </div>
                        <div className={s.input__wrapper}>
                            <input onChange={onMainPhotoSelected} type="file" name="file" id="input__file" className={s.input__file} multiple/>
                            <label htmlFor="input__file" className={s.input__file_button}>
                                <span className={s.input__file_button_text}>Change photo</span>
                            </label>
                        </div>
                        <button className={s.editProfileButton} onClick={changeEditModeProfileCallback}>Edit profile</button>
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
                                        <div key={c[0].toLocaleLowerCase()}>
                                            <b>{c[0]}</b>: <a href={`http://${c[1]}`}>{c[1]}</a>
                                        </div>
                                    )
                                }
                            })}
                        </div>
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
                    {!editMode && <button onClick={changeEditMode} className={s.setStatusButton}>Edit status</button>}
                </div>

            </div>
        </div>
    )
})