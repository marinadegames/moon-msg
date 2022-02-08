import React from "react";
import s from './MsgRight.module.css'
import {UserType} from "../../../../../Redux/profileReducer";
import {MessageType} from "../../../../../Redux/dialogsReducer";

// type
type ChatRightPropsType = {
    rightMessages: Array<MessageType>
    users: Array<UserType>
}


export const MsgRight = function (props: ChatRightPropsType) {

    return (
        <div>
            {props.rightMessages.map( (m) => {
                return (
                    <div className={s.msgRight} key={m.id}>
                        <div className={s.textMsg}>
                            {m.message}
                            <div className={s.timeMsg}>{m.time}</div>
                        </div>
                        <div className={s.msgAvatarFriend}>{props.users[0].avatar}</div>
                    </div>
                )
            } )}

        </div>
    )

}