import React from "react";
import s from './Note.module.css'


const Note = (props: any) => {
    return (
    <div className={s.note}>
        <div>{props.text}</div>
        <div className={s.buttonsNote}>
            <button className={s.btnLike}>  <b>like</b>     <div>{props.likes}</div></button>
            <button className={s.btnShare}> <b>share</b>    </button>
            <button className={s.btnFav}>   <b>favorite</b> </button>
        </div>
    </div>
)
}

export default Note;