import s from './EditProfileForms.module.css'
import React, {memo} from "react";
import {ProfileType, saveProfileTC} from "../../Redux/meProfileReducer";
import {useDispatch} from "react-redux";
import {useFormik} from "formik";

type PropsType = {
    profile: ProfileType
    changeProfileEditMode: () => void
}
export const EditProfileForms = memo(({profile, changeProfileEditMode}: PropsType) => {

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            userId: profile.userId,
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            fullName: profile.fullName,
            aboutMe: profile.aboutMe,
            contacts: {
                github: profile.contacts.github,
                vk: profile.contacts.vk,
                facebook: profile.contacts.facebook,
                instagram: profile.contacts.instagram,
                twitter: profile.contacts.twitter,
                website: profile.contacts.website,
                youtube: profile.contacts.youtube,
                mainLink: profile.contacts.mainLink
            }
        },
        onSubmit: values => {
            dispatch(saveProfileTC(values))
            changeProfileEditMode()
        },
    });

    return (
        <form className={s.profileEditBox} onSubmit={formik.handleSubmit}>
            <div className={s.main}>
                <div className={s.containerLeft}>
                    <div className={s.editProfileTitle}>Edit profile:</div>
                    <div className={s.element}>
                        <b>Full name: </b>
                        <input id={'fullName'}
                               {...formik.getFieldProps('fullName')}
                               className={s.inputElement}/>
                    </div>
                    <div className={s.element}>
                        <b>Looking for job: </b>
                        <input id={'lookingForAJob'}
                               type={"checkbox"}
                               checked={formik.values.lookingForAJob}
                               onChange={formik.handleChange}
                               className={s.checkboxElement}/>
                    </div>
                    <div className={s.element}>
                        <b>My skills: </b>
                        <input id={'lookingForAJobDescription'}
                               {...formik.getFieldProps('lookingForAJobDescription')}
                               className={s.inputElement}/>
                    </div>
                    <div className={s.element}>
                        <b>About me: </b>
                        <input id={'aboutMe'}
                               {...formik.getFieldProps('aboutMe')}
                               className={s.inputElement}/>
                    </div>
                </div>

                <div className={s.containerRight}>
                    <div className={s.editProfileTitle}>Contacts:</div>

                    <div className={s.element}>
                        <b>Github: </b>
                        <input id={'contacts.github'}
                               {...formik.getFieldProps('contacts.github')}
                               className={s.inputElement}/>
                    </div>

                    <div className={s.element}>
                        <b>VK: </b>
                        <input id={'contacts.vk'}
                               {...formik.getFieldProps('contacts.vk')}
                               className={s.inputElement}/>
                    </div>

                    <div className={s.element}>
                        <b>Facebook: </b>
                        <input id={'contacts.facebook'}
                               {...formik.getFieldProps('contacts.facebook')}
                               className={s.inputElement}/>
                    </div>

                    <div className={s.element}>
                        <b>Instagram: </b>
                        <input id={'contacts.instagram'}
                               {...formik.getFieldProps('contacts.instagram')}
                               className={s.inputElement}/>
                    </div>
                    <div className={s.element}>
                        <b>Twitter: </b>
                        <input id={'contacts.twitter'}
                               {...formik.getFieldProps('contacts.twitter')}
                               className={s.inputElement}/>
                    </div>
                    <div className={s.element}>
                        <b>Website: </b>
                        <input id={'contacts.website'}
                               {...formik.getFieldProps('contacts.website')}
                               className={s.inputElement}/>
                    </div>
                    <div className={s.element}>
                        <b>YouTube: </b>
                        <input id={'contacts.youtube'}
                               {...formik.getFieldProps('contacts.youtube')}
                               className={s.inputElement}/>
                    </div>
                    <div className={s.element}>
                        <b>Main link: </b>
                        <input id={'contacts.mainLink'}
                               {...formik.getFieldProps('contacts.mainLink')}
                               className={s.inputElement}/>
                    </div>

                </div>
            </div>
            <button type={'submit'} className={s.buttonSaveProfile}>save</button>
        </form>
    )
})