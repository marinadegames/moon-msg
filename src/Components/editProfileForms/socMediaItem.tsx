import s from "./EditProfileForms.module.css";
import React, {memo} from "react";

type PropsType = {
    title: string
    value: string | null
    callback: (e: string) => void
}

export const SocMediaItem = memo(({value, callback, title}: PropsType) => {
    return (
        <div className={s.element}>
            <b>{title}: </b>
            <input value={value ? value : ''}
                   onChange={e => callback(e.currentTarget.value)}
                   className={s.inputElement}/>
        </div>
    )
})