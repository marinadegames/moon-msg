// import
import React from "react";
import s from './Profile.module.css'
import {Posts} from "./Posts/Posts";
import {BigHead} from "@bigheads/core";
import {PostType} from "../../../Redux/state";

// types
type ProfilePropsType = {
    postsUser: Array<PostType>
    addPost: (text: string) => void
}
// assets

// components

export const Profile = function ({postsUser, addPost, ...props}: ProfilePropsType) {

    const userLogo = () => (
        <BigHead
            accessory="roundGlasses"
            body="breasts"
            circleColor="blue"
            clothing="dressShirt"
            clothingColor="red"
            eyebrows="raised"
            eyes="normal"
            faceMask={false}
            faceMaskColor="black"
            facialHair="mediumBeard"
            graphic="vue"
            hair="balding"
            hairColor="brown"
            hat="none4"
            hatColor="white"
            lashes={false}
            lipColor="green"
            mask
            mouth="grin"
            skinTone="red"
        />
    )

    return (
        <div>
            <div className={s.pageName}>Profile</div>
            <div className={s.profileInform}>
                <div className={s.profileInfoLeft}>
                    <div className={s.userLogo}>
                        {userLogo()}
                    </div>
                    <div>
                        <div className={s.userName}>Eugene Pashkevich</div>
                        <div className={s.userBirthday}>17.02.1997</div>
                        <div className={s.userLocation}>Minsk, Belarus</div>
                        <div className={s.userEmail}><a
                            href='mailto:marinadegames@gmail.com'>marinadegames@gmail.com</a></div>

                    </div>
                </div>
                <div className={s.profileInfoRight}>
                    <div className={s.userSlogan}>"I AM REALLY LIKE A PIZZA!"</div>
                </div>


            </div>

            <Posts postsUser={postsUser}
                   addPost={addPost}/>

        </div>
    )
}