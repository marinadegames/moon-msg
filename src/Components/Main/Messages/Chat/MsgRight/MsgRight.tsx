import {BigHead} from "@bigheads/core";
import s from './MsgRight.module.css'
import React from "react";

export const MsgRight = function () {

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
        <div className={s.msgRight}>

            <div className={s.textMsg}>
                What? What you doing?! Lorem ipsum dolor septim sanctum!
                Error 404 not found!
                <div className={s.timeMsg}>16:25</div>
            </div>
            <div className={s.msgAvatarFriend}>{userLogo()}</div>

        </div>
    )
}