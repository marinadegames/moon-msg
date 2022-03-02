// import
import React from "react";
import {ProfileType} from "../../../Redux/profileReducer";
import {ProfileInfo} from "./ProfileInfo";
import {Posts} from "./Posts/Posts";

// types
type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}


// components
export const Profile = function (props: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}/>
            <Posts profile={props.profile}

            />

        </div>
    )
}