import React from "react";
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props:any) => {



    return (
        <div>

            <ProfileInfo/>
            <Posts
                notesData={props.notesData}
                dispatch={props.dispatch}/>

        </div>
    )
}

export default Profile;