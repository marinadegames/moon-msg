// import
import React from "react";
import s from './MsgTitle.module.css'
import {BigHead} from "@bigheads/core";

// types

// assets

// components

export const MsgTitle = function (props:any) {

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
        <div className={ props.activeTitle ? s.friendMsgTitle_ACTIVE : s.friendMsgTitle}>
            <div className={s.avatarBoxMsg}>
                {ElinaMalina()}
            </div>
            <div className={s.titleMsgNameAndTextMsg}>
                <div className={s.titleMsgUserName}>Elina Malina</div>
                <div className={s.textMsgTitle}>Hi, how are you?</div>
            </div>

            <div className={s.timeMsgTitleFriend}>
                <div>
                    16:24
                </div>
            </div>
        </div>
    )
}