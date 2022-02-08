// import
import React, {KeyboardEvent, useState} from "react";
import s from './Chat.module.css'
import {MsgLeft} from "./MsgLeft/MsgLeft";
import {MsgRight} from "./MsgRight/MsgRight";
import {AllMessagesType, SendMessageAC} from "../../../../Redux/dialogsReducer";
import {UserType} from "../../../../Redux/profileReducer";

// types
type ChatPropsType = {
    allMessages: AllMessagesType
    dispatch: any
    users: Array<UserType>
}
// assets

// components

export const Chat = function (props: ChatPropsType) {

    const [textAreaValue, setTextAreaValue] = useState('')

    const textAreaHandler = (e: string) => {
        setTextAreaValue(e)
    }
    const onclickSendMessageHandler = () => {
        if (textAreaValue !== '') {
            props.dispatch(SendMessageAC(textAreaValue))
            setTextAreaValue('')
        }

    }
    const enterHandler = (event: KeyboardEvent) => {
        if (event.charCode === 13 && textAreaValue !== '') {
            props.dispatch(SendMessageAC(textAreaValue))
            setTextAreaValue('')
        }
    }

    return (
        <div className={s.backChat}>
            <div className={s.chatNameUser}>Elina Malina</div>
            <div className={s.chat}>
                <MsgLeft leftMessages={props.allMessages.LEFT} users={props.users}/>
                <MsgRight rightMessages={props.allMessages.RIGHT} users={props.users}/>
            </div>
            <div className={s.senMsgArea}>
                <textarea className={s.sendMsgTextArea}
                          value={textAreaValue}
                          onChange={(e) => textAreaHandler(e.currentTarget.value)}
                          placeholder={'Send message...'}
                          onKeyPress={(event) => enterHandler(event)}
                >
                </textarea>
                <button className={s.btnSendMsg} onClick={onclickSendMessageHandler}>send</button>
            </div>
        </div>
    )
}