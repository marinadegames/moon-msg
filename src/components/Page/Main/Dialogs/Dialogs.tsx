import React from "react";
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css'
import store, {sendMessageCreator, updateNewMessageBodyCreator} from "../../../../redux/state";

const Dialog = (props: any) => {
    return (
        <NavLink to={'/dialogs/' + props.id} className={s.navLinkDialog}>
            <div className={s.dialog}>
                <div className={s.nameUser}>{props.userName}</div>
            </div>
        </NavLink>
    )
}
const Message = (props: any) => {
    return (
        <div className={s.msgBox}>
            <div className={s.triangleMsgBox}>
                <div className={s.triangleMsg}/>
            </div>

            <div className={s.message}>{props.text}</div>
        </div>

    )
}
const SendMessageTextArea = (props: any) => {

    let state = props.store.getState().dialogsPage

    let SenMessageElement:any = React.createRef()
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (event:any) => {
        let body = event.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }


    const pressEnterFunction = (event:any) => {
        if (event.keyCode===13 ){

            props.store.dispatch(sendMessageCreator())
        }
    }

    return (
        <div>
        <textarea
            maxLength={2000}
            placeholder='Отправьте сообщение...'
            className={s.textAreaSendMessage}
            ref={SenMessageElement}
            onChange={onNewMessageChange}
            onKeyUp={pressEnterFunction}
            value={newMessageBody}/>
            <div className={s.rightFlex}>
                <button
                    className={s.btnSendMessage}
                    onClick={onSendMessageClick}

                    >
                    Send
                </button>
            </div>
        </div>
    )
}

const Dialogs = (props: any) => {

    let dialogsElements = props.dialogsData.map((d: any) => <Dialog id={d.id} userName={d.name}/>)
    let messagesElements = props.messagesData.map((m: any) => <Message id={m.id} text={m.text}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsList}>
                {dialogsElements}
            </div>
            <div className={s.rightBox}>
                <div className={s.messages}>
                   {messagesElements}
                </div>
                <SendMessageTextArea store={props.store}/>
            </div>
        </div>
    )
}

export default Dialogs;