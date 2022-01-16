// import
import React from "react";
import s from './MsgTitle.module.css'
import {DialogsType} from "../../../../Redux/state";

// types

// assets

// components

export const MsgTitle = function (props:DialogsType) {

    return (
        <div className={ props.selectedDialog ? s.friendMsgTitle_ACTIVE : s.friendMsgTitle}>
            <div className={s.avatarBoxMsg}>
                {props.avatar()}
            </div>
            <div className={s.titleMsgNameAndTextMsg}>
                <div className={s.titleMsgUserName}>{props.userName}</div>
                <div className={s.textMsgTitle}>{props.lastMessage}</div>
            </div>

            <div className={s.timeMsgTitleFriend}>
                <div>
                    {props.time}
                </div>
            </div>
        </div>
    )
}