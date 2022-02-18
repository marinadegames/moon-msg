// import
import React from "react";
import {ProfileType} from "../../../Redux/profileReducer";
import {ProfileInfo} from "./ProfileInfo";

// types
type ProfilePropsType = {
    profile: ProfileType
}


// components
export const Profile = function (props: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            {/*<Posts postsUser={props.profile.posts}*/}
            {/*       userId={props.profile.id}*/}
            {/*       dispatch={props.dispatch}/>*/}

        </div>
    )
}