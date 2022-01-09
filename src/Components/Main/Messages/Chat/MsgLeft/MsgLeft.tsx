// import
import React from "react";
import s from './MsgLeft.module.css'
import {BigHead} from "@bigheads/core";

// types

// assets

// components

export const MsgLeft = function () {

    const ElinaMalina = () => (
        <BigHead
            accessory="roundGlasses"
            body="chest"
            circleColor="blue"
            clothing="shirt"
            clothingColor="red"
            eyebrows="leftLowered"
            eyes="simple"
            faceMask={false}
            faceMaskColor="black"
            facialHair="stubble"
            graphic="react"
            hair="afro"
            hairColor="pink"
            hat="none"
            hatColor="white"
            lashes
            lipColor="pink"
            mask
            mouth="grin"
            skinTone="red"
        />
    )

    return (
        <div className={s.msgLeft}>
            <div className={s.msgAvatarFriend}>{ElinaMalina()}</div>
            <div className={s.textMsg}>
                What? What you doing?! Lorem ipsum dolor septim sanctum!
                Error 404 not found!
                <div className={s.timeMsg}>16:25</div>
            </div>

        </div>
    )
}