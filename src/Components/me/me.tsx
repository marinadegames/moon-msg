import {useSelector} from "react-redux";
import {Posts} from "../posts/Posts";
import {MeInfo} from "./meInfo";
import {RouteNames} from "../../routes";
import {Navigate} from "react-router-dom";
import React, {useCallback, useState} from "react";
import {Spinner} from "../otherComponents/Spinner";
import {rootReducerType} from "../../Redux/store";
import {ProfileType} from "../../Redux/profileReducer";
import {EditProfileForms} from "../editProfileForms/EditProfileForms";

export const Me = () => {

    const [editModeProfile, setEditModeProfile] = useState<boolean>(false)

    const isAuth = useSelector<rootReducerType, boolean>(state => state.auth.isAuth)
    const myProfile = useSelector<rootReducerType, ProfileType | null>(state => state.meProfilePage.profile)

    const changeProfileEditMode = useCallback(() => {
        setEditModeProfile(!editModeProfile)
    }, [editModeProfile])

    if (!isAuth) {
        return <Navigate to={RouteNames.LOGIN}/>
    }
    return (
        <div>
            {!myProfile
                ? <Spinner isLoading={isAuth} size={'300'} style={{width: '100%', display: 'flex', justifyContent: 'center'}}/>
                :
                <React.Fragment>
                    <MeInfo profile={myProfile} changeProfileEditMode={changeProfileEditMode}/>
                    {editModeProfile
                        ? <EditProfileForms changeProfileEditMode={changeProfileEditMode} profile={myProfile}/>
                        : <Posts profile={myProfile}/>}
                </React.Fragment>
            }
        </div>
    )
}