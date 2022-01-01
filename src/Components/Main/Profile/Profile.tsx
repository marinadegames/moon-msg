// imports
import React from "react";
import s from './Profile.module.css'
import {ProfileInformation} from "./ProfileInformation/ProfileInformation";
import {NotesProfile} from "./NotesProfile/NotesProfile";

//types

// assets

//components

export const Profile = function () {



    return (
        <div className={s.Profile}>

            <div className={s.titlePageProfile}>Your profile:</div>
            <ProfileInformation/>
            <NotesProfile />
        </div>
    )
}
