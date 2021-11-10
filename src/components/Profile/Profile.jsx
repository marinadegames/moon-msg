import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css"

const Profile = () =>{
    return (
        <div>
        <div className={s.backImg}></div>
          <div className={s.mainProfile}>
            <div className={s.avatar}></div>
            <div className={s.profileData}>
              <div className={s.nameUser}><h3>Eugene Pashkevich</h3></div>
              <div className={s.informUser}>
                <p><b>Date of birth:</b> 17.02.1997</p>
                <p><b>City:</b> Minsk </p>
                <p><b>Education:</b> GSMU '2019</p>
                <p><b>Web-site:</b> </p>
              </div>
            </div>

          </div>
            <MyPosts />
          </div>
    )
}

export default Profile;