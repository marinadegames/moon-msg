// import
import React, {useState} from "react";
import s from './Messages.module.css'
import {BigHead} from "@bigheads/core";
import {MsgTitle} from "./MsgTitle/MsgTitle";
import {Chat} from "./Chat/Chat";

// types

// assets

// components

export const Messages = function () {

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
                    <Chat/>

                </div>

            </div>

        </div>
    )
}