import React from "react";
import s from './MsgRight.module.css'
import {Anonymous} from "../../../Utils/BigHeadsFile";
import {MessageType} from "../../../Redux/dialogsReducer";

type ChatRightPropsType = {
    rightMessages: Array<MessageType>
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
                        <div className={s.msgAvatarFriend}>{Anonymous()}</div>
                    </div>
                )
            } )}
        </div>
    )
}