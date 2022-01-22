import {BigHead} from "@bigheads/core";
import React from "react";
import {MessageType} from "../../../../../Redux/state";
import s from './MsgRight.module.css'

// type
type ChatRightPropsType = {
    rightMessages: Array<MessageType>
}


export const MsgRight = function (props: ChatRightPropsType) {

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
            {props.rightMessages.map( (m) => {
                return (
                    <div className={s.msgRight} key={m.id}>
                        <div className={s.textMsg}>
                            {m.message}
                            <div className={s.timeMsg}>{m.time}</div>
                        </div>
                        <div className={s.msgAvatarFriend}>{userLogo()}</div>
                    </div>
                )
            } )}

        </div>
    )

}