// import
import React, {useState} from "react";
import s from './NotesProfile.module.css'

// types

// assets

// components

export const NotesProfile = function () {

    const [textLength, setTextLength] = useState<number>(0)

    const texareaHandler = (e:number) => {
        console.log(textLength)
        setTextLength(e)
    }

    const textWarningMaxLength = textLength === 200 ? s.textDanger : '' || textLength > 180 ? s.textWarning : ''

    return (
        <div className={s.addNoteBox}>
            <div className={s.titleAddNote}>Add note:
                <small className={textWarningMaxLength}>{textLength}</small>
            </div>
            <textarea className={s.textareaAddNote}
                      onChange={(e) => texareaHandler(e.currentTarget.textLength)}
                      maxLength={200}/>
            <div className={s.buttonsAddNoteBox}>
                <button className={s.btnAddNote}> Add note + </button>
            </div>

        </div>
    )
}