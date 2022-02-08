// import
import React from "react";
import s from './MsgLeft.module.css'
import {UserType} from "../../../../../Redux/profileReducer";
import {MessageType} from "../../../../../Redux/dialogsReducer";

// types
type ChatLeftPropsType = {
    leftMessages: Array<MessageType>
    users: Array<UserType>
}

// assets

// components

export const MsgLeft = function (props: ChatLeftPropsType) {


    return (
        <div>
            { props.leftMessages.map( m => {
                return (
                    <div className={s.msgLeft} key={m.id}>
                        <div className={s.msgAvatarFriend}>{props.users[1].avatar}</div>
                        <div className={s.textMsg}>
                            What? What you doing?! Lorem ipsum dolor septim sanctum!
                            Error 404 not found!
                            <div className={s.timeMsg}>16:25</div>
                        </div>

                    </div>
                )
            })}
        </div>

    )
}