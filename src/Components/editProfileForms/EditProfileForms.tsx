import s from './EditProfileForms.module.css'
import React, {memo, useCallback, useEffect, useState} from "react";
import {ProfileType, saveProfileTC} from "../../Redux/meProfileReducer";
import {SocMediaItem} from "./socMediaItem";
import {useDispatch} from "react-redux";

type PropsType = {
    profile: ProfileType
    changeProfileEditMode: () => void
}
export const EditProfileForms = memo(({profile, changeProfileEditMode}: PropsType) => {

    const dispatch = useDispatch()
    const [fullName, setFullName] = useState<string>('')
    const [lookingForAJob, setLookingForAJob] = useState<boolean>(false)
    const [lookingForAJobDescription, setLookingForAJobDescription] = useState<string>('')
    const [aboutMe, setAboutMe] = useState<string>('')

    const [github, setGithub] = useState<string>('')
    const [vk, setVk] = useState<string>('')
    const [facebook, setFacebook] = useState<string>('')
    const [instagram, setInstagram] = useState<string>('')
    const [twitter, setTwitter] = useState<string>('')
    const [website, setWebsite] = useState<string>('')
    const [youtube, setYoutube] = useState<string>('')
    const [mainLink, setMainLink] = useState<string>('')

    useEffect(() => {
        if (profile) {
            setFullName(profile.fullName)
            setLookingForAJob(profile.lookingForAJob)
            setLookingForAJobDescription(profile.lookingForAJobDescription)
            setAboutMe(profile.aboutMe)
            setGithub(profile.contacts.github || '')
            setVk(profile.contacts.vk || '')
            setFacebook(profile.contacts.facebook || '')
            setInstagram(profile.contacts.instagram || '')
            setTwitter(profile.contacts.twitter || '')
            setWebsite(profile.contacts.website || '')
            setYoutube(profile.contacts.youtube || '')
            setMainLink(profile.contacts.mainLink || '')
        }
    }, [profile])

    const onChangeFullName = useCallback((e: string) => {
        setFullName(e)
    }, [])
    const onChangeLookingForJob = useCallback((e: boolean) => {
        setLookingForAJob(e)
    }, [])
    const onChangeLookingForJobDescription = useCallback((e: string) => {
        setLookingForAJobDescription(e)
    }, [])
    const onChangeAboutMe = useCallback((e: string) => {
        setAboutMe(e)
    }, [])

    const onChangeGitHub = useCallback((e: string) => {
        setGithub(e)
    }, [])
    const onChangeVk = useCallback((e: string) => {
        setVk(e)
    }, [])
    const onChangeFacebook = useCallback((e: string) => {
        setFacebook(e)
    }, [])
    const onChangeInstagram = useCallback((e: string) => {
        setInstagram(e)
    }, [])
    const onChangeTwitter = useCallback((e: string) => {
        setTwitter(e)
    }, [])
    const onChangeWebsite = useCallback((e: string) => {
        setWebsite(e)
    }, [])
    const onChangeYoutube = useCallback((e: string) => {
        setYoutube(e)
    }, [])
    const onChangeMainLink = useCallback((e: string) => {
        setMainLink(e)
    }, [])

    const onSubmit = () => {
        const profileObj = {
            userId: profile.userId,
            fullName,
            lookingForAJob,
            lookingForAJobDescription,
            aboutMe,
            contacts: {
                github,
                vk,
                facebook,
                instagram,
                twitter,
                website,
                youtube,
                mainLink,
            },
        }

        dispatch(saveProfileTC(profileObj))
        changeProfileEditMode()
    }

    return (
        <div className={s.profileEditBox}>
            <div className={s.main}>
                <div className={s.containerLeft}>
                    <div className={s.editProfileTitle}>Edit profile:</div>
                    <div className={s.element}>
                        <b>Full name: </b>
                        <input value={fullName}
                               onChange={e => onChangeFullName(e.currentTarget.value)}
                               className={s.inputElement}/>
                    </div>
                    <div className={s.element}>
                        <b>Looking for job: </b>
                        <input type={"checkbox"}
                               onChange={e => onChangeLookingForJob(e.currentTarget.checked)}
                               checked={lookingForAJob} className={s.checkboxElement}/>
                    </div>
                    <div className={s.element}>
                        <b>My skills: </b>
                        <input value={lookingForAJobDescription}
                               onChange={e => onChangeLookingForJobDescription(e.currentTarget.value)}
                               className={s.inputElement}/>
                    </div>
                    <div className={s.element}>
                        <b>About me: </b>
                        <input value={aboutMe}
                               onChange={e => onChangeAboutMe(e.currentTarget.value)}
                               className={s.inputElement}/>
                    </div>
                </div>

                <div className={s.containerRight}>
                    <div className={s.editProfileTitle}>Contacts:</div>

                    <SocMediaItem value={github} callback={onChangeGitHub} title={'Github'}/>
                    <SocMediaItem value={vk} callback={onChangeVk} title={'VK'}/>
                    <SocMediaItem value={facebook} callback={onChangeFacebook} title={'Facebook'}/>
                    <SocMediaItem value={instagram} callback={onChangeInstagram} title={'Instagram'}/>
                    <SocMediaItem value={twitter} callback={onChangeTwitter} title={'Twitter'}/>
                    <SocMediaItem value={website} callback={onChangeWebsite} title={'Website'}/>
                    <SocMediaItem value={youtube} callback={onChangeYoutube} title={'YouTube'}/>
                    <SocMediaItem value={mainLink} callback={onChangeMainLink} title={'Main link'}/>

                </div>
            </div>

            <button onClick={onSubmit} className={s.buttonSaveProfile}>save</button>

        </div>
    )
})