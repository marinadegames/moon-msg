import React from "react";
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css'

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
    return <div className={s.message}>{props.text}</div>
}

const SendMessageTextArea = (props: any) => {

    let newMessage: any = React.createRef()

    let sendMessage = () => {
        let text = newMessage.current.value;
        alert(text);
    }

    return (
        <div>
        <textarea ref={newMessage} maxLength={500} placeholder='Отправьте сообщение...' className={s.textAreaSendMessage}/>
            <div className={s.rightFlex}>
                <button className={s.btnSendMessage} onClick={sendMessage}>Send</button>
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
                <SendMessageTextArea/>
            </div>



        </div>

    )
}

export default Dialogs;