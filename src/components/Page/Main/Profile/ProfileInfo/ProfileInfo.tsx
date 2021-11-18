import React from "react";
import s from './ProfileInfo.module.css'

let avatarLogo = 'http://cdn.onlinewebfonts.com/svg/img_568656.png'


const ProfileInfo = (props: any) => {
    return(
        <div className={s.profile}>
            <img id={s.avatarLogo} src={avatarLogo}/>
            <div className={s.profileData}>
                <div className={s.nameUser}>Eugene Pashkevich</div>
                <div className=''><b>Name of birth:</b> 17.02.1997</div>
                <div className=''><b>City:</b> Minsk</div>
                <div className=''><b>Country:</b> Belarus</div>
                <div className=''><b>Web-site:</b> <a href='#'>marinadegames.ru</a></div>
            </div>
        </div>
    )
}

export default ProfileInfo;