import React from "react";
import Main from "./Main/Main";
import Nav from "./Nav/Nav";
import './Page.module.css'
import s from './Page.module.css'

const Page = (props:any) => {
    return (
        <div className={s.page}>
            <Nav />
            <Main notesData={props.notesData}
                  messagesData={props.messagesData}
                  dialogsData={props.dialogsData}
                  addNote={props.addNote}
            />
        </div>
    )
}


export default Page;