// import
import React from "react";
import s from './Chat.module.css'
import {MsgLeft} from "./MsgLeft/MsgLeft";
import {MsgRight} from "./MsgRight/MsgRight";
// types

// assets

// components

export const Chat = function () {

    return (
        <div className={s.backChat}>
            <div className={s.chatNameUser}>Elina Malina</div>
            <div className={s.chat}>
                <MsgLeft />
                <MsgRight />
            </div>
            <div className={s.senMsgArea}>
                <textarea className={s.sendMsgTextArea}
                          placeholder={'Send message...'}>

                </textarea>
                <button className={s.btnSendMsg}>send</button>
            </div>
        </div>
    )
}