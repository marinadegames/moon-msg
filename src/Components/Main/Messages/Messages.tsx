// import
import React, {useState} from "react";
import s from './Messages.module.css'
import {MsgTitle} from "./MsgTitle/MsgTitle";
import {Chat} from "./Chat/Chat";
import {AllMessagesType, MessageType, PostType} from "../../../Redux/state";

// types
type MessagesPropsType = {
    allMessages: AllMessagesType
    dispatch: any
}
// assets

// components

export const Messages = function (props: MessagesPropsType) {

    const [activeTitle, setActiveTitle] = useState(false)

    return (
        <div>
            <div className={s.pageName}>Messages</div>

            <div className={s.divMain}>

                <div className={s.msgBoxLeft}>
                    <div className={s.titleMsgBoxPage}>Friends:</div>

                    <MsgTitle activeTitle={true}/>
                    <MsgTitle activeTitle={false}/>
                    <MsgTitle activeTitle={false}/>
                    <MsgTitle activeTitle={false}/>

                </div>

                <div className={s.msgBoxRight}>
                    <Chat allMessages={props.allMessages}
                          dispatch={props.dispatch}/>

                </div>

            </div>

        </div>
    )
}