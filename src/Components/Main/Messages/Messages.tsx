// import
import React from "react";
import s from './Messages.module.css'
import {MsgTitle} from "./MsgTitle/MsgTitle";
import {Chat} from "./Chat/Chat";
import {DialogsType} from "../../../Redux/state";

// types
type MessagesPropsType = {
    dialogs: DialogsType[]
}
// assets




// components

export const Messages = function (props: MessagesPropsType) {

    // const [selectedDialog, setSelectedDialog] = useState(false)

    return (
        <div>
            <div className={s.pageName}>Messages</div>

            <div className={s.divMain}>

                <div className={s.msgBoxLeft}>
                    <div className={s.titleMsgBoxPage}>Friends:</div>

                    {props.dialogs.map( d => {
                        return (
                            <MsgTitle selectedDialog={d.selectedDialog}
                                      lastMessage={d.lastMessage}
                                      avatar={d.avatar}
                                      time={d.time}
                                      id={d.id}
                                      userName={d.userName}/>
                        )
                    })}


                </div>

                <div className={s.msgBoxRight}>
                    <Chat/>

                </div>

            </div>

        </div>
    )
}